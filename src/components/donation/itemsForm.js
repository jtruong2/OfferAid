import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

class ItemsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ''
    }
  }
  render() {
    return(
      <TextInput
        style={styles.container}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})
