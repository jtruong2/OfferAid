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
      email: props.userInfo.email
    }
  }
  _handleBackPress() {
   this.props.navigator.pop()
  }

 _handleNextPress(nextRoute) {
   this._postDonation()
   this.props.navigator.push(nextRoute)
 }

 _postDonation() {
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
     console.log(responseJson)
   })
 }

 _keyExtractor = (item, index) => index

  render() {
    const nextRoute = {
      component: Confirmation,
      title: 'Confirmation',
    }

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
        <TouchableHighlight onPress={() => {this._handleNextPress(nextRoute)}}>
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
    backgroundColor: '#2c3e50',
    paddingTop: 64
  },
})
module.exports = Summary
