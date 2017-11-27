import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, ScrollView} from 'react-native';
import styles from '../../styles/styles'
import AnimateNumber from 'react-native-animate-number'
import url from '../../api'

class Dashboard extends React.Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <View style={styles.headerBar}>
          <Image style={styles.header} source={require('../../images/letteringlogo.png')} />
        </View>

      </View>
    )
  }
}

module.exports = Dashboard
