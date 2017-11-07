import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import styles from '../../styles/styles'

class News extends React.Component {
  render() {
    return(
      <View style={{flex:1}}>
        <View style={styles.headerBar}>
          <Text style={styles.headerFont}>News</Text>
        </View>
        <View style={styles.newsContainer}>

        </View>
      </View>
    )
  }
}

module.exports = News
