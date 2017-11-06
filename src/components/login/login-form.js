import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Button, StatusBar } from 'react-native';
import Login from './login'
import styles from '../../styles/styles'

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
      <View style={styles.loginFormContainer}>
        <TextInput className = 'email' style = {styles.loginInput}
               onChangeText = {(email) => this.setState({ email })}
               autoCapitalize="none"
               onSubmitEditing={() => this.passwordInput.focus()}
               autoCorrect={false}
               keyboardType='email-address'
               returnKeyType="next"
               placeholder='Email'
               textAlign= 'center'
               placeholderTextColor='rgba(225,225,225,0.7)'/>

        <TextInput style = {styles.loginInput}
                    returnKeyType="go"
                    onChangeText = {(password) => this.setState({ password })}
                    ref={(input)=> this.passwordInput = input}
                    placeholder='Password'
                    textAlign= 'center'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry/>

        <TouchableOpacity style={styles.loginButtonContainer}
                           onPress={this.handleSubmit}>
                   <Text  style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

module.exports = LoginForm
