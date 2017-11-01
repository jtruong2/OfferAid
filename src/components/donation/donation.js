import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';


class Donation extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Donation</Text>
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

module.exports = Donation
