import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import styles from '../../styles/styles'

class News extends React.Component {
  render() {
    return(
      <View style={styles.newsContainer}>
        <Text>News</Text>
      </View>
    )
  }
}

module.exports = News
