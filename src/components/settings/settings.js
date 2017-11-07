import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import styles from '../../styles/styles'

class Settings extends React.Component {
  render() {
    return(
      <View style={{flex:1}}>
        <View style={styles.headerBar}>
          <Text style={styles.headerFont}>Settings</Text>
        </View>
      </View>
    )
  }
}

module.exports = Settings
