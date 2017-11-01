import React from 'react';
import { TabBarIOS, Text } from 'react-native';
import Dashboard from '../dashboard/dashboard'
import Donation from '../donation/donation'

class TabBar extends React.Component {
  constructor(props) {
    super(props)
    this.state({
      selectedTab: null
    })
  }

  handleNav = () =>{ this.setState({ selectedTab: this.props.handleNav()}) }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'Dashboard'}
          icon={{uri:'featured'}}
          onPress={() => {
              this.setState({
                  selectedTab: 'Dashboard',
              });
          }}>
            <Dashboard/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'Donation'}
          icon={{uri:'contacts'}}
          onPress={() => {
                this.setState({
                    selectedTab: 'Donation',
                });
          }}>
          <Donation/>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

module.exports = TabBar
