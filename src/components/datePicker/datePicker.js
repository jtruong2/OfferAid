import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, DatePickerIOS} from 'react-native'
import { Container, Header, Content, List, ListItem, Button } from 'native-base';
import LocationPicker from '../locationPicker/locationPicker'
import styles from '../../styles/styles'

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
      <View style={styles.datePickerContainer}>
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
        />
      <Button style={{position: 'relative', bottom : -350, right: -120, width: 180}} onPress={() => {this._handleNextPress(nextRoute)}} rounded success>
          <Text style={{color: 'white', position: 'relative', right: -65}}>Continue</Text>
      </Button>
      </View>
    )
  }
}

module.exports = DatePicker
