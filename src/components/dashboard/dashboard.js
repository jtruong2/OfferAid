import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';

class Dashboard extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Dashboard</Text>
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

module.exports = Dashboard
