import React from 'react';
import { NavigatorIOS, Text } from 'react-native';
import History from '../history/history'

class HistoryNavigator extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: History,
          title: 'Past Donations',
          passProps: {userInfo: this.props.userInfo}
        }}
        translucent= {true}
        style={{flex: 1}}
      />
    );
  }
}
module.exports = HistoryNavigator
