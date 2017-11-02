import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundImage from './src/components/background/background-image'
import Login from './src/components/login/login'
import Dashboard from './src/components/dashboard/dashboard'
import renderIf from './src/render/renderIf'
import TabBar from './src/components/tabBar/tabBar'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: null,
      loggedIn: false,
      address: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  verifyLogin(obj) {
    fetch('https://offeraidbackend.herokuapp.com/api/v1/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        session: {
          email: obj.email,
          password: obj.password
        }
      })
    }).then((response) => response.json()).then((responseJson) => {
      if(responseJson.status == 'logged in'){
        this.setState({
          loggedIn: true,
        })
      }
      this.handleAddress(responseJson)
    }).then(() => { console.log(this.state)
    }).done()
  }

  handleAddress(obj) {
    let fullAddress = `\n ${obj.user.street_address} \n ${obj.user.city}, ${obj.user.state} ${obj.user.zip_code}`
    this.setState({
      address: fullAddress
    })
  }

  handleSubmit(obj) {
    this.setState({
      email: obj.email
    }, () => {
      this.verifyLogin(obj)
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {renderIf(this.state.loggedIn === false, <Login handleSubmit = {this.handleSubmit} />)}
        {renderIf(this.state.loggedIn === true, <TabBar address = {this.state.address}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
