import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Image, ScrollView, Container, Text } from 'react-native';
import styles from '../../styles/styles'

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
      <View>
        <View style={styles.headerBar}>
          <Image style={styles.header} source={require('../../images/letteringlogo.png')} />
        </View>
        <ScrollView>
          <FlatList
            data={this.state.donations}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) =>
              <View>
                <Text style={{fontWeight: 'bold'}}>{(item['created_at']).slice(0, 10)}{"\n"}{"\n"}</Text>
                <Text>Pick up location: {item['pickup_address']}{"\n"}</Text>
                <Text>Pick up date: {item['pickup_date'].slice(0,24)}{"\n"}</Text>
                <FlatList
                  data={item.donation_items}
                  keyExtractor={this._keyExtractor}
                  renderItem={({item}) =>
                    <Text> {item.item['name']} x {item['quantity']} </Text>
                  }
                />
                <Text>{"\n"}</Text>
                <Text>confirmation: {item['confirmation']}{"\n"}</Text>
                <Text>_________________________________________________</Text>
              </View>
            }
          />
        </ScrollView>
      </View>
    )
  }
}




module.exports = History
