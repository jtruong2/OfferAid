import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableHighlight, TouchableOpacity} from 'react-native';
import ItemList from '../items/itemList'
import styles from '../../styles/styles'
import url from '../../api'

class Donation extends React.Component {
  constructor() {
    super()
    this.state = {
      availableItems: null
    }
  }
  _handleBackPress() {
   this.props.navigator.pop()
  }

 _handleNextPress(nextRoute) {
   this.props.navigator.push(nextRoute)
 }

 _loadAvailableItems(){
   fetch(`${url}/api/v1/items`)
   .then((response) => response.json())
   .then((responseJson) => this.setState({ availableItems: responseJson}))
   .then(() => console.log(this.state))
 }

 componentDidMount() {
   this._loadAvailableItems()
 }

  render() {
    const nextRoute = {
      component: ItemList,
      title: 'Add Items',
      passProps: { userInfo: this.props.userInfo, availableItems: this.state.availableItems }
    }

    return(
      <View style={styles.donationsContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={() => {this._handleNextPress(nextRoute)}}>
          <Image source={require('../../images/next.png')} />
        </TouchableOpacity>
      </View>
    )
  }
}
module.exports = Donation
