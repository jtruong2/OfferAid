import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, FlatList, Button, TouchableHighlight} from 'react-native';
import ItemsForm from './itemsForm'
import DatePicker from '../datePicker/datePicker'

class ItemList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItems: [],
      availableItems: props.availableItems
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

  // componentDidMount(){
  //   this._loadAvailableItems()
  // }
  //
  // _loadAvailableItems(){
  //   fetch('https://offeraidbackend.herokuapp.com/api/v1/items')
  //   .then((response) => response.json())
  //   .then((responseJson) => this.setState({ availableItems: responseJson}))
  //   .then(() => console.log(this.state.availableItems))
  // }

  render() {

    const nextRoute = {
      component: DatePicker,
      title: 'Pick a Date and Time',
      passProps: {userInfo: this.props.userInfo, items: this.state.selectedItems}
    }
    this._loadAvailableItems
    return(
      <KeyboardAvoidingView style={styles.container}>
        <ItemsForm handleList = {this.handleList} availableItems = {this.state.availableItems}/>
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
