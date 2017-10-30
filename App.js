import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundImage from './src/components/background/background-image'
import Login from './src/components/login/login'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: null,
      password: null,
      loggedInStatus: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  verifyLogin(obj) {
    fetch('https://offeraidbackend.herokuapp.com/api/v1/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization:', token
      },
      body: JSON.stringify({
        session: {
          email: obj.email,
          password: obj.password
        }
      })
    }).then((response) => console.log(response))
    this.setState({
      loggedInStatus: true
    })
  }

  handleSubmit(obj) {
    this.setState({
      email: obj.email,
      password: obj.password,
    }, function() {
      this.verifyLogin(this.state)
    })
  }

  render() {
    return (
      // <View style={styles.container}>
        <Login
        handleSubmit ={this.handleSubmit}/>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  }
});
