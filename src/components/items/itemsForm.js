import React from 'react';
import { Text, StyleSheet, View, TextInput, Picker, KeyboardAvoidingView, Button, Keyboard} from 'react-native';

class ItemsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      quantity: null,
      itemSelection: props.availableItems
    }
  }

  handleAddItem() {
    this.props.handleList(this.state)
    this.textInput.clear()
    Keyboard.dismiss()
  }

  render() {
    let availableItems = this.state.itemSelection.map((s, i) => {
      return <Picker.Item key={i} value={s} label={s} />
    })
    return(
      <KeyboardAvoidingView style={styles.container}>
        <Picker
        selectedValue={this.state.item}
        onValueChange={(itemValue, itemIndex) => this.setState({item: itemValue})}
        itemStyle={styles.itemLabel}>
          {availableItems}
        </Picker>
        <View style={styles.quantitySect}>
          <Text style={{color: 'white', padding: 10}}>Quantity:</Text>
          <TextInput style={styles.input}
            onChangeText={(quantity) => this.setState({quantity})}
            value={this.state.quantity}
            keyboardType= "numeric"
            ref={input => { this.textInput = input }}
          />
        </View>
          <Button onPress={() => {this.props.handleList(this.state); this.textInput.clear(); Keyboard.dismiss()}} title="Add Item" style={styles.button}/>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   padding: 20
  },
  quantitySec: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemLabel: {
    color: 'white'
  },
  input:{
      height: 40,
      width: 80,
      backgroundColor: 'rgba(225,225,225,0.2)',
      marginBottom: 10,
      padding: 10,
      color: '#fff'
  },
  button: {
    height: 50,
    width: 80,
    backgroundColor: '#107515',
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

module.exports = ItemsForm
