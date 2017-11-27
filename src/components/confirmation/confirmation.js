import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import { Container, Header, Content, List, ListItem, Button } from 'native-base';
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
        <Button style={{position: 'relative', bottom: -455, right: -120, width: 180}} onPress={() => {this._handleNextPress(nextRoute)}} rounded block>
          <Text style={{color: 'white', position: 'relative'}}>Back to Main</Text>
        </Button>
      </View>
    )
  }
}

module.exports = Confirmation
