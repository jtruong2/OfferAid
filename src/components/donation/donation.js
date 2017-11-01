import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import ItemsList from './itemsList'

class Donation extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <ItemsList />
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
