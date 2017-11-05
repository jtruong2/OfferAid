import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import Donation from '../donation/donation'

class Confirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmation: props.confirmation
    }
  }

 _handleNextPress(nextRoute) {
   this.props.navigator.popToTop(nextRoute)
 }

  render() {
    const nextRoute = {
      component: Donation,
      title: 'Donate',
    }

    console.log(this.state)
    return(
      <View style={styles.container}>
        <Text>Confirmation: {this.props.confirmation}</Text>
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
    backgroundColor: 'white',
    paddingTop: 64
  },
})

module.exports = Confirmation
