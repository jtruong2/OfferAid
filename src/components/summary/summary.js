import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableHighlight, FlatList} from 'react-native';
import Confirmation from '../confirmation/confirmation'

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
   fetch(`https://offeraidbackend.herokuapp.com/api/v1/user/${this.state.user_id}/donations`, {
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

  render() {

    return(
      <View style={styles.container}>
      <Text>Summary</Text>
      <Text>{this.state.pickUpAddress}</Text>
      <Text>{this.state.pickUpDate}</Text>
      <FlatList
        data={this.state.items}
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => <Text style={styles.list}>{item['name']}  x  {item['quantity']}</Text>}
      />
        <TouchableHighlight onPress={() => {this._handleNextPress()}}>
          <Text style={{marginBottom: 100, alignSelf: 'center'}}>
            Schedule Pickup
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
module.exports = Summary
