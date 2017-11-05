import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import Summary from '../summary/summary'

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
      <View style={styles.container}>
        <Text style={styles.address}>Address: {this.state.address}</Text>
        <TouchableHighlight onPress={() => {this._handleNextPress(nextRoute)}}>
          <Text style={{marginBottom: 100, alignSelf: 'center'}}>
            Continue
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 64
  },
  address: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  }
})

module.exports = LocationPicker
