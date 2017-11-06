import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import styles from '../../styles/styles'
import {SwipeableFlatList} from 'react-native-swipeable-flat-list'
import DonationItems from './donationItems'

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
    return(
      <View style={styles.historyContainer}>
        <Text style={styles.header}>Past Donation Confirmations</Text>
        <FlatList
          data={this.state.donations}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
            <TouchableOpacity onPress={() => {this._handleNextPress(item)}}>
              <Text style={styles.itemList}>{item['created_at'].substring(0, 10)}: {item['confirmation']}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    )
  }
}

module.exports = History
