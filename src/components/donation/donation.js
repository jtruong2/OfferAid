import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableHighlight, TouchableOpacity} from 'react-native';
import { Container, Header, Content, List, ListItem, Button } from 'native-base';
import ItemList from '../items/itemList'
import styles from '../../styles/styles'
import url from '../../api'
import AnimateNumber from 'react-native-animate-number'


class Donation extends React.Component {
  constructor() {
    super()
    this.state = {
      availableItems: null,
      itemCount: 0
    }
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

  _handleBackPress() {
   this.props.navigator.pop()
  }

 _handleNextPress(nextRoute) {
   this.props.navigator.push(nextRoute)
 }

 _loadAvailableItems(){
   fetch(`${url}/api/v1/items`)
   .then((response) => response.json())
   .then((responseJson) => this.setState({ availableItems: responseJson}))
   .then(() => console.log(this.state))
 }

 componentDidMount() {
   this._loadAvailableItems()
 }

  render() {
    const nextRoute = {
      component: ItemList,
      title: 'Add Items',
      passProps: { userInfo: this.props.userInfo, availableItems: this.state.availableItems }
    }
    this._getCount()

    return(
      <View style={styles.donationsContainer}>
        <View style={styles.countContainer}>
          <Text style={styles.countHeader}>
          Contributions{"\n"}
          to Date</Text>
          <AnimateNumber style={styles.count} value={this.state.itemCount} countBy={3} />
          </View>
        <Container>
          <Content>
            <List>
              <ListItem itemHeader first>
                <Text style={{fontWeight: 'bold', fontSize: 17, textAlign: 'center'}}>Items in Demand</Text>
              </ListItem>
              <ListItem>
                <Text>Shoes</Text>
              </ListItem>
              <ListItem >
                <Text>Canned Goods</Text>
              </ListItem>
              <ListItem>
                <Text>Blankets</Text>
              </ListItem>
              <ListItem>
                <Text>Backpacks</Text>
              </ListItem>
              <ListItem>
                <Text>Batteries</Text>
              </ListItem>
              <ListItem>
                <Text>Clothing Items</Text>
              </ListItem>
            </List>
          </Content>
        </Container>
        <Button style={styles.buttonPosition} onPress={() => {this._handleNextPress(nextRoute)}} rounded success>
          <Text style={{color: 'white', position: 'relative', right: -40}}>Make a Donation</Text>
        </Button>
      </View>
    )
  }
}
module.exports = Donation
