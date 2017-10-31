import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';

class Dashboard extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>This is the dashboard page</Text>
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
