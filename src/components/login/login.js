import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './login-form'
import styles from '../../styles/styles'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(obj) {
    this.props.handleSubmit(obj)
  }
  render() {
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.mainContainer}>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.loginLogo} source={require('../../images/heart(2).png')} />
        </View>

        <View>
          <LoginForm handleSubmit = {this.handleSubmit}/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

module.exports = Login
