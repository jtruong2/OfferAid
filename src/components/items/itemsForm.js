import React from 'react';
import { Text, StyleSheet, View, TextInput, Picker, KeyboardAvoidingView, Button, Keyboard} from 'react-native';
import styles from '../../styles/styles'

class ItemsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.availableItems[0].name,
      id: props.availableItems[0].id,
      quantity: null
    }
  }

  _handleAddItem() {
    this.props.handleList(this.state)
    this.textInput.clear()
    Keyboard.dismiss()
  }

  render() {
    let items = this.props.availableItems.map((item) => {
      return <Picker.Item key={item.id} value={item.name} label={item.name} />
    })

    return(
      <KeyboardAvoidingView style={styles.itemsFormContainer}>
        <Picker
        onValueChange={(itemValue, itemIndex) => this.setState({name: itemValue, index: itemIndex + 1 })}
        selectedValue={this.state.name}
        itemStyle={styles.itemLabel}>
        {items}
        </Picker>
        <View style={styles.quantity}>
          <Text style={{ padding: 10}}>Quantity:</Text>
          <TextInput style={styles.quantityInput}
            onChangeText={(quantity) => this.setState({quantity})}
            value={this.state.quantity}
            keyboardType= "numeric"
            ref={input => { this.textInput = input }}
          />
        </View>
        <Button onPress={() => {this._handleAddItem()}} title="Add Item" style={styles.addItemButton}/>
      </KeyboardAvoidingView>
    )
  }
}

module.exports = ItemsForm
