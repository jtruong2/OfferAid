import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity, FlatList} from 'react-native'
import { Container, Header, Content, List, ListItem, Button } from 'native-base';
import Confirmation from '../confirmation/confirmation'
import styles from '../../styles/styles'
import url from '../../api'

class Summary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: props.userInfo.id,
      pickUpAddress: props.address,
      pickUpDate: props.date,
      items: props.items,
      email: props.userInfo.email,
      confirmation: ''
    }
  }
  _handleBackPress() {
   this.props.navigator.pop()
  }

 _handleNextPress(nextRoute) {
   this._postDonation(nextRoute)
 }

 _postDonation(nextRoute) {
   fetch(`${url}/api/v1/user/${this.state.user_id}/donations`, {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       user_id: this.state.user_id,
       email: this.state.email,
       pickup_date: this.state.pickUpDate,
       pickup_address: this.state.pickUpAddress,
       items: this.state.items
     })
   }).then((response) => response.json()).then((responseJson) => {
     this.setState({ confirmation: responseJson.confirmation })
   }).then(() => {
     const nextRoute = {
       component: Confirmation,
       title: 'Confirmation',
       passProps: { confirmation: this.state.confirmation }
     }
     this.props.navigator.push(nextRoute)})
 }

 _keyExtractor = (item, index) => index

 _dateFormat() {
  let date = this.state.pickUpDate.slice()
  let dateSplit = date.split(' ').slice(0,5).join(' ')
  return dateSplit
 }

  render() {
    return(
      <View style={styles.summaryContainer}>
        <Text style={styles.headerFont}>Pick Up Address: </Text>
        <Text style={styles.summaryText}>{this.state.pickUpAddress}</Text>
        <Text style={styles.headerFont}>Pick Up Date: </Text>
        <Text style={styles.summaryText}>{this._dateFormat()}</Text>
        <Text style={styles.headerFont}>Items: </Text>
        <FlatList
          data={this.state.items}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <Text style={styles.summaryList}>{item['name']}  x  {item['quantity']}</Text>}
        />
        <Button style={styles.buttonPosition} onPress={() => {this._handleNextPress()}} rounded block>
          <Text style={{color: 'white'}}>Schedule Pickup</Text>
        </Button>
      </View>
    )
  }
}
module.exports = Summary
