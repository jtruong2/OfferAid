import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import styles from '../../styles/styles'
import AnimateNumber from 'react-native-animate-number'
import url from '../../api'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      itemCount: 0
    })
  }

  _getCount() {
    fetch(`${url}/api/v1/user/${this.props.userInfo.id}/items`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json()).then((responseJson) => {
      this.setState({
        itemCount: responseJson.count
      })
    })
  }

  render() {
    {this._getCount()}
    return(
      <View style={styles.dashboardContainer}>
        <View style={styles.headerBar}>
          <Text style={styles.countHeader}>Your Contributions to Date</Text>
          <AnimateNumber style={styles.count} value={this.state.itemCount} countBy={1} />
        </View>
      </View>
    )
  }
}

module.exports = Dashboard
