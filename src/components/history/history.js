import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

class History extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>History</Text>
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

module.exports = History
