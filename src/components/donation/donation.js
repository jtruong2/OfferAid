import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableHighlight, TouchableOpacity} from 'react-native';
import ItemList from '../items/itemList'
import styles from '../../styles/styles'
import url from '../../api'
import AnimateNumber from 'react-native-animate-number'


class Donation extends React.Component {
  constructor() {
    super()
    this.state = {
      availableItems: null,
      itemCount: 0
    }
  }

  _getCount() {
    fetch(`${url}/api/v1/user/${this.props.userInfo.id}/items`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json()).then((responseJson) => {
      this.setState({
        itemCount: responseJson.count
      })
    })
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
    this._getCount()

    return(
      <View style={styles.donationsContainer}>
        <View style={styles.countContainer}>
          <Text style={styles.countHeader}>
          Contributions{"\n"}
          to Date</Text>
          <AnimateNumber style={styles.count} value={this.state.itemCount} countBy={1} />
        </View>
        <TouchableOpacity style={styles.buttonPosition} onPress={() => {this._handleNextPress(nextRoute)}}>
          <Image style={{position: 'relative', left: -10}} source={require('../../images/donate-button.png')} />
        </TouchableOpacity>
      </View>
    )
  }
}
module.exports = Donation
