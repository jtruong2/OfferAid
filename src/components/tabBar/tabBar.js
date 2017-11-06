import React from 'react';
import { TabBarIOS, Text, StyleSheet, View } from 'react-native';
import Dashboard from '../dashboard/dashboard'
import Navigation from '../navigation/navigation'
import News from '../news/news'
import History from '../history/history'
import Settings from '../settings/settings'
import styles from '../../styles/styles'

class TabBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Dashboard'
    };
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId});
  }

  render() {
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
          <Navigation userInfo = {this.props.userInfo}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          icon={require('../../images/history.png')}
          title= "History"
          selected={this.state.selectedTab === 'History'}
          onPress={() => this.setTab('History')}>
          <History userInfo = {this.props.userInfo}/>
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
