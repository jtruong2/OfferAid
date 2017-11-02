import React from 'react';
import { NavigatorIOS, Text } from 'react-native';
import Donation from '../donation/donation'

class Navigator extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Donation,
          title: 'Donate',
          passProps: {address: this.props.address}
        }}
        style={{flex: 1}}
      />
    );
  }
}
module.exports = Navigator
