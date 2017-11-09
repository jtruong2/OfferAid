import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Summary from '../summary/summary'
import styles from '../../styles/styles'

class LocationPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      address: props.userInfo.address
    })
  }
  _handleBackPress() {
   this.props.navigator.pop()
  }

 _handleNextPress(nextRoute) {
   this.props.navigator.push(nextRoute)
 }

  render() {
    const nextRoute = {
      component: Summary,
      title: 'Summary',
      passProps: {address: this.state.address, date: this.props.date, items: this.props.items, userInfo: this.props.userInfo}
    }

    return(
      <View style={styles.locationPickerContainer}>
        <Text style={styles.headerFont}>Primary Address: </Text>
        <Text style={styles.address}>{this.state.address}</Text>
        <TouchableOpacity style={{position: 'relative', bottom: -400}} onPress={() => {this._handleNextPress(nextRoute)}}>
          <Text style={{marginBottom: 100, alignSelf: 'center', padding: 10}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

module.exports = LocationPicker
