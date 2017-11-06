import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Summary from '../summary/summary'
import styles from '../../styles/styles'

class LocationPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      address: props.userInfo.address,
      // latitude: null,
      // longitude: null,
      // error: null,
    })
  }
  _handleBackPress() {
   this.props.navigator.pop()
  }

 _handleNextPress(nextRoute) {
   this.props.navigator.push(nextRoute)
 }

 // componentDidMount() {
 //   navigator.geolocation.getCurrentPosition(
 //     (position) => {
 //       this.setState({
 //         latitude: position.coords.latitude,
 //         longitude: position.coords.longitude,
 //         error: null,
 //       });
 //     },
 //     (error) => this.setState({ error: error.message }),
 //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
 //   );
 // }

  render() {
    const nextRoute = {
      component: Summary,
      title: 'Summary',
      passProps: {address: this.state.address, date: this.props.date, items: this.props.items, userInfo: this.props.userInfo}
    }

    return(
      <View style={styles.locationPickerContainer}>
        <Text style={styles.header}>Primary Address: </Text>
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
