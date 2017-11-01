import React from 'react';
import { Text, StyleSheet, View, TextInput, Picker, KeyboardAvoidingView, Button } from 'react-native';

class ItemsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: 'Canned goods',
      quantity: null,
    }
  }

  addToList(){
    this.props.handleList(this.state)
  }

  render() {
    return(
      <KeyboardAvoidingView style={styles.container}>
        <Picker
        selectedValue={this.state.item}
        onValueChange={(itemValue, itemIndex) => this.setState({item: itemValue})}
        itemStyle={styles.itemLabel}>
          <Picker.Item label="Canned goods" value="Canned Goods" />
          <Picker.Item label="Clothing items" value="Clothing items" />
          <Picker.Item label="Paper towels" value="Paper Towels" />
          <Picker.Item label="Blankets" value="Blankets" />
          <Picker.Item label="Water bottles" value="Water bottles" />
        </Picker>
        <View style={styles.quantitySect}>
          <Text style={{color: 'white', padding: 10}}>Quantity:</Text>
          <TextInput style={styles.input}
            onChangeText={(quantity) => this.setState({quantity})}
            value={this.state.quantity}
            keyboardType= "numeric"
          />
        </View>
        <Button onPress={() => this.props.handleList(this.state)} title="Add Item" style={styles.button}/>
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
