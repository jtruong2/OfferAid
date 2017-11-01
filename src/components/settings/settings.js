import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Settings extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
})

module.exports = Settings
