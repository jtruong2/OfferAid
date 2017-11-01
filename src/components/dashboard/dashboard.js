import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import TabBar from '../tabBar/tabBar'

class Dashboard extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <TabBar handleNav = {this.handleNav}/>
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

module.exports = Dashboard
