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
    backgroundColor: 'white',
  },
})

module.exports = History
