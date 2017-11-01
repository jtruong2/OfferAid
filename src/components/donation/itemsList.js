import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, FlatList} from 'react-native';
import ItemsForm from './itemsForm'
class ItemList extends React.Component {
  constructor() {
    super()
    this.state = {
      items: {}
    }
  }

  handleList(obj) {
    this.setState({
      items: 
    }).then(console.log(this.state))
  }

  render() {
    return(
      <KeyboardAvoidingView>
        <ItemsForm handleList = {this.handleList}/>
        <FlatList
          data={this.props.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </KeyboardAvoidingView>
    )
  }
}

module.exports = ItemList
