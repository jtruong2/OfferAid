import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import DatePicker from '../datePicker/datePicker'

let renderNextPage = (current, next) => {
  let previous = current
  if(next == 'date'){
    return <DatePicker previousPage= {previous}/>
  }
}

module.exports = renderNextPage
