import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import styles from '../../styles/styles'

class News extends React.Component {
  render() {
    return(
      <View style={{flex:1}}>
        <View style={styles.headerBar}>
          <Image style={styles.header} source={require('../../images/letteringlogo.png')} />
        </View>
        <View style={styles.newsContainer}>
          <Image style={styles.construction} source={require('../../images/construction.png')} />
        </View>
      </View>
    )
  }
}

module.exports = News
