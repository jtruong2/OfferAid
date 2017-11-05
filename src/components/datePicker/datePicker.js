import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, DatePickerIOS} from 'react-native';
import LocationPicker from '../locationPicker/locationPicker'

class DatePicker extends React.Component {

  constructor(){
    super()
    this.state = {
      date: new Date()
    }
  }
  _handleBackPress() {
   this.props.navigator.pop()
  }

  _handleNextPress(nextRoute) {
   this.props.navigator.push(nextRoute)
  }

  onDateChange = (date) => {
    this.setState({
      date: date
    })
  }


  render() {
    let date = this.state.date
    const nextRoute = {
      component: LocationPicker,
      title: 'Select A Pickup Location',
      passProps: {userInfo: this.props.userInfo, date: date.toString(), items: this.props.items}
    }
    return(
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
        />
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
})
module.exports = DatePicker
