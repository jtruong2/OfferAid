import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import styles from '../../styles/styles'
import url from '../../api'

class DonationItems extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
      items: null
    })
  }

  _componentDidMount() {
    fetch(`${url}/api/v1/user/${this.props.donation.user_id}/donations/${this.props.donation.id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json()).then((responseJson) => {
      this.setState({
        items: responseJson
      })
    }).then(console.log(this.state))
  }

  _keyExtractor = (item, index) => index

  render() {
    return(
      <View>
        <Text>Confirmation</Text>
        <Text>{this.props.donation.confirmation}</Text>
        <FlatList
          data={this.state.items}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) =>
            <Text>{item['name']}</Text>
          }
        />
      </View>
    )
  }
}

module.exports = DonationItems
