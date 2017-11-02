import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import Donation from '../donation/donation'

class Confirmation extends React.Component {
 _handleNextPress(nextRoute) {
   this.props.navigator.push(nextRoute)
 }

  render() {
    const nextRoute = {
      component: Donation,
      title: 'Donate',
    }

    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {this._handleNextPress(nextRoute)}}>
          <Text style={{marginBottom: 100, alignSelf: 'center'}}>
            Continue
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    paddingTop: 64
  },
})

module.exports = Confirmation
