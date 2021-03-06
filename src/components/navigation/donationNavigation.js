import React from 'react';
import { NavigatorIOS, Text } from 'react-native';
import Donation from '../donation/donation'

class DonationNavigator extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Donation,
          title: 'Main',
          passProps: {userInfo: this.props.userInfo}
        }}
        barTintColor= '#36357f'
        translucent= {true}
        style={{flex: 1}}
      />
    );
  }
}
module.exports = DonationNavigator
