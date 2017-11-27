import React from 'react';
import { TabBarIOS, Text, StyleSheet, View } from 'react-native';
import Dashboard from '../dashboard/dashboard'
import DonationNavigation from '../navigation/donationNavigation'
import News from '../news/news'
import History from '../history/history'
import Settings from '../settings/settings'
import styles from '../../styles/styles'
import url from '../../api'

class TabBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Dashboard',
      donations: null
    };
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId});
  }

  _getDonations(){
    fetch(`${url}/api/v1/user/${this.props.userInfo.id}/donations`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json()).then((responseJson) => {
      this.setState({
        donations: responseJson
      })
    })
  }

  render() {
    this._getDonations()
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          icon={require('../../images/dashboard.png')}
          title= "Home"
          selected={this.state.selectedTab === 'Dashboard'}
          onPress={() => this.setTab('Dashboard')}>
          <Dashboard userInfo = {this.props.userInfo}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('../../images/news.png')}
          title= "News"
          selected={this.state.selectedTab === 'News'}
          onPress={() => this.setTab('News')}>
          <News/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('../../images/plus.png')}
          title= "Donate"
          selected={this.state.selectedTab === 'Donations'}
          onPress={() => this.setTab('Donations')}>
          <DonationNavigation userInfo = {this.props.userInfo}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('../../images/history.png')}
          title= "History"
          selected={this.state.selectedTab === 'History'}
          onPress={() => this.setTab('History')}>
          <History donations = {this.state.donations}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('../../images/settings.png')}
          title= "Settings"
          selected={this.state.selectedTab === 'Settings'}
          onPress={() => this.setTab('Settings')}>
          <Settings/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

}


class TabHistory extends React.Component {

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>History</Text>
      </View>
    );
  }

}

module.exports = TabBar
