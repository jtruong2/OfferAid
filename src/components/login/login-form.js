import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Button, StatusBar } from 'react-native';
import Login from './login'

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit() {
    this.props.handleSubmit(this.state)
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput className = 'email' style = {styles.input}
               onChangeText = {(email) => this.setState({ email })}
               autoCapitalize="none"
               onSubmitEditing={() => this.passwordInput.focus()}
               autoCorrect={false}
               keyboardType='email-address'
               returnKeyType="next"
               placeholder='Email'
               textAlign= 'center'
               placeholderTextColor='rgba(225,225,225,0.7)'/>

        <TextInput style = {styles.input}
                    returnKeyType="go"
                    onChangeText = {(password) => this.setState({ password })}
                    ref={(input)=> this.passwordInput = input}
                    placeholder='Password'
                    textAlign= 'center'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry/>

        <TouchableOpacity style={styles.buttonContainer}
                           onPress={this.handleSubmit}>
                   <Text  style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   padding: 20
  },
  input:{
      height: 40,
      backgroundColor: 'rgba(225,225,225,0.2)',
      marginBottom: 10,
      padding: 10,
      color: '#fff'
  },
  buttonContainer:{
      backgroundColor: '#5c65aa',
      paddingVertical: 15
  },
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  }
})
module.exports = LoginForm
