import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import styles from '../../styles/styles'
import AnimateNumber from 'react-native-animate-number'
import url from '../../api'

class Dashboard extends React.Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.headerBar}>
          <Text style={styles.headerFont}>Home</Text>
        </View>
      </View>
    )
  }
}

module.exports = Dashboard
