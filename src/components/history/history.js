import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/styles'
import {SwipeableFlatList} from 'react-native-swipeable-flat-list'
import DonationItems from './donationItems'
import HistoryTable from './table.js'

class History extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
      donations: props.userInfo.donations,
      selectedDonation: null
    })
  }

  _handleBackPress() {
   this.props.navigator.pop()
  }

  _handleNextPress(donation) {
    console.log(donation)
    const nextRoute = {
      component: DonationItems,
      title: 'Donation Receipt',
      passProps: {donation: donation}
    }
    this.props.navigator.push(nextRoute)
  }

  _keyExtractor = (item, index) => index

  render() {
    let donationsAndDate = this.state.donations.map((donation) => {
      [donation['created_at'], donation['confirmation']]
    })
    return(
      <View style={styles.historyContainer}>
        <Image style={styles.construction} source={require('../../images/construction.png')} />
      </View>
    )
  }
}

module.exports = History
