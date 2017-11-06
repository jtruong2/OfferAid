import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundImage from './src/components/background/background-image'
import Login from './src/components/login/login'
import Dashboard from './src/components/dashboard/dashboard'
import renderIf from './src/render/renderIf'
import TabBar from './src/components/tabBar/tabBar'
import styles from './src/styles/styles'
import url from './src/api'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      id: null,
      email: null,
      loggedIn: false,
      address: null,
      donations: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  verifyLogin(obj) {
    fetch(`${url}/api/v1/login`, {
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
          id: responseJson.user.id,
          loggedIn: true,
        })
      }
      console.log(responseJson)
      this.handleAddress(responseJson)
    }).then(() => {
      console.log(this.state)
      this._getDonations()
    }).done()
  }

  _getDonations(){
    fetch(`${url}/api/v1/user/${this.state.id}/donations`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json()).then((responseJson) => {
      this.setState({
        donations: responseJson
      })
    })
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
        {renderIf(this.state.loggedIn === true, <TabBar userInfo = {this.state}/>)}
      </View>
    );
  }
}
