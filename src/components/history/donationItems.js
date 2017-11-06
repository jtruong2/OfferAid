import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import styles from '../../styles/styles'

class DonationItems extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
      donation: props.donation,
      items: null
    })
  }

  componentDidMount() {
    fetch(`https://offeraidbackend.herokuapp.com/api/v1/user/${this.state.donation.user_id}/donations/${this.state.donation.id}/items`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json()).then((responseJson) => {
      console.log(responseJson)
      this.setState({
        items: responseJson
      })
    })
  }

  _keyExtractor = (item, index) => index

  render() {
    return(
      <View>
        <FlatList
          data={this.state.items}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
            <Text style={styles.itemList}>{item['name']}  x  {item['quantity']}</Text>
          }
        />
      </View>
    )
  }
}

module.exports = DonationItems
