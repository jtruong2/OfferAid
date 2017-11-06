import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import styles from '../../styles/styles'

class Settings extends React.Component {
  render() {
    return(
      <View style={styles.settingsContainer}>
        <Text>Settings</Text>
      </View>
    )
  }
}

module.exports = Settings
