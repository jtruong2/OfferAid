import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, FlatList, Button} from 'react-native';
import ItemsForm from './itemsForm'
import renderNextPage from '../nextNav/nextNav'

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

  _keyExtractor = (item, index) => index

  render() {
    return(
      <KeyboardAvoidingView>
        <ItemsForm handleList = {this.handleList}/>
        <FlatList
          data={this.state.items}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <Text style={styles.list}>{item['item']}  x  {item['quantity']}</Text>}
        />
        <Button onPress={renderNextPage("Items", "Date")} title="Next" />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
})

module.exports = ItemList
