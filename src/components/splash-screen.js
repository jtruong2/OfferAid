import React from 'react'
import SplashScreen from 'react-native-splash-screen'

export default class WelcomePage extends React.Component {
  componentDidMount() {
    SplashScreen.hide()
  }
}
