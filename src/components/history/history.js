import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import styles from '../../styles/styles'
import {SwipeableFlatList} from 'react-native-swipeable-flat-list'

class History extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
      donations: props.userInfo.donations
    })
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
            <Text style={styles.itemList}>{item['confirmation']}</Text>
          }
        />
      </View>
    )
  }
}

module.exports = History
