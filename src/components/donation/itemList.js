import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, FlatList, Button, TouchableHighlight} from 'react-native';
import ItemsForm from './itemsForm'
import DatePicker from '../datePicker/datePicker'

class ItemList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.handleList = this.handleList.bind(this)
  }

  handleList(obj) {
    let itemsCopy = this.state.items.slice()
    itemsCopy.push(obj)
    this.setState({
      items: itemsCopy
    })
  }

  _handleBackPress() {
   this.props.navigator.pop()
  }

  _handleNextPress(nextRoute) {
   this.props.navigator.push(nextRoute)
  }

  _keyExtractor = (item, index) => index

  render() {
    const nextRoute = {
      component: DatePicker,
      title: 'Pick a Date and Time',
      passProps: {address: this.props.address, items: this.state.items}
    }
    return(
      <KeyboardAvoidingView style={styles.container}>
        <ItemsForm handleList = {this.handleList}/>
        <FlatList
          data={this.state.items}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <Text style={styles.list}>{item['item']}  x  {item['quantity']}</Text>}
        />
        <TouchableHighlight onPress={() => {this._handleNextPress(nextRoute)}}>
          <Text style={{marginBottom: 100, alignSelf: 'center'}}>
            Continue
          </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  container:{
    flex: 1,
    backgroundColor: '#2c3e50',
    paddingTop: 64
  }
})

module.exports = ItemList
