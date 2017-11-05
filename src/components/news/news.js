import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

class News extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>News</Text>
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

module.exports = News
