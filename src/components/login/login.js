import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './login-form'

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
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../../images/placeholder-image.png')} />
        </View>

        <View style={styles.formContainer}>
          <LoginForm handleSubmit = {this.handleSubmit}/>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 100
  }
})
module.exports = Login
