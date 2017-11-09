import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Container, Header, Content, ListItem, Radio, Right, Button } from 'native-base';
import Summary from '../summary/summary'
import styles from '../../styles/styles'

class LocationPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      address: props.userInfo.address
    })
  }
  _handleBackPress() {
   this.props.navigator.pop()
  }

 _handleNextPress(nextRoute) {
   this.props.navigator.push(nextRoute)
 }

  render() {
    const nextRoute = {
      component: Summary,
      title: 'Summary',
      passProps: {address: this.state.address, date: this.props.date, items: this.props.items, userInfo: this.props.userInfo}
    }

    return(
      <View style={styles.locationPickerContainer}>
        <Text style={styles.headerFont}>Choose a Pickup Location: </Text>
        <Container>
          <Content>
            <ListItem>
                <Text>123 Main St. Denver, CO 80202</Text>
                <Right>
                  <Radio selected={true} />
                </Right>
              </ListItem>
              <ListItem>
                <Text>1331 17th St. Denver, CO 80202</Text>
                <Right>
                  <Radio selected={false} />
                </Right>
              </ListItem>
              <ListItem>
                <Text>707 s. Alamo st. Denver, CO 80123</Text>
                <Right>
                  <Radio selected={false} />
                </Right>
              </ListItem>
            </Content>
          </Container>
          <Button style={styles.buttonPosition} onPress={() => {this._handleNextPress(nextRoute)}} rounded success>
            <Text style={{color: 'white', position: 'relative', right: -65}}>Continue</Text>
          </Button>
      </View>
    )
  }
}

module.exports = LocationPicker
