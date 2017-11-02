import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableHighlight, FlatList} from 'react-native';
import Confirmation from '../confirmation/confirmation'

class Summary extends React.Component {
  constructor() {
    super()
    this.state = {
      pickUpAddress: null,
      pickUpDate: null,
      items: null
    }
  }
  _handleBackPress() {
   this.props.navigator.pop()
  }

 _handleNextPress(nextRoute) {
   this.props.navigator.push(nextRoute)
 }

 _keyExtractor = (item, index) => index

 componentDidMount() {
   this.setSummary()
 }

 setSummary() {
   this.setState({
     pickUpAddress: this.props.address,
     pickUpDate: this.props.date,
     items: this.props.items
   }, function() {
     console.log(this.state)
   })
 }

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
        renderItem={({item}) => <Text style={styles.list}>{item['item']}  x  {item['quantity']}</Text>}
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
