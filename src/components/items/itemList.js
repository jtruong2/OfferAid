import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, FlatList, Button, TouchableHighlight} from 'react-native';
import {SwipeableFlatList} from 'react-native-swipeable-flat-list'
import ItemsForm from './itemsForm'
import DatePicker from '../datePicker/datePicker'

class ItemList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItems: []
    }
    this.handleList = this.handleList.bind(this)
  }

  handleList(obj) {
    let itemsCopy = this.state.selectedItems.slice()
    itemsCopy.push(obj)
    this.setState({
      selectedItems: itemsCopy
    })
  }

  _handleBackPress() {
   this.props.navigator.pop()
  }

  _handleNextPress(nextRoute) {
   this.props.navigator.push(nextRoute)
  }

  _keyExtractor = (item, index) => index

  _deleteItem() {
    let itemsCopy = this.state.selectedItems.slice()
    let index = itemsCopy.indexOf(this)
    itemsCopy.splice(index, 1)
    this.setState({
      selectedItems: itemsCopy
    })
  }

  render() {

    const nextRoute = {
      component: DatePicker,
      title: 'Pick a Date and Time',
      passProps: {userInfo: this.props.userInfo, items: this.state.selectedItems}
    }
    return(
      <KeyboardAvoidingView style={styles.container}>
        <ItemsForm handleList = {this.handleList} availableItems = {this.props.availableItems}/>
        <SwipeableFlatList
          data={this.state.selectedItems}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
            <Text style={styles.list}>{item['name']}  x  {item['quantity']}</Text>
          }
          renderRight={({item}) => (
              <Text style={{ width: 40, padding: 10 }}>
                <TouchableHighlight style={{height: 20, width: 20}} onPress={() => {this._deleteItem()}}>
                    <Image style={styles.deleteButton }source={require('../../images/close.png')} />
                </TouchableHighlight>
              </Text>
          )}
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
    fontSize: 20,
    height: 60,
    textAlign: 'center'
  },
  container:{
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 64
  },
  deleteButton: {
    position: 'relative',
    bottom: -10
  }
})

module.exports = ItemList
