import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Donation from '../donation/donation'
import styles from '../../styles/styles'

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
      <View style={styles.confirmationContainer}>
        <Text style={{textAlign: 'center'}}>Thank you for donating!</Text>
        <Text style={styles.headerFont}>Confirmation: </Text>
        <Text style={{textAlign: 'center', padding: 10}}>{this.props.confirmation}</Text>
        <TouchableOpacity onPress={() => {this._handleNextPress(nextRoute)}}>
          <Text style={{marginBottom: 100, alignSelf: 'center', padding: 10}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

module.exports = Confirmation
