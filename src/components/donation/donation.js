import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import ItemList from '../items/itemList'

class Donation extends React.Component {
  _handleBackPress() {
   this.props.navigator.pop()
  }

 _handleNextPress(nextRoute) {
   this.props.navigator.push(nextRoute)
 }

 _loadAvailableItems(){
   fetch('https://offeraidbackend.herokuapp.com/api/v1/items')
   .then((response) => response.json())
   .then((responseJson) => this.setState({ availableItems: responseJson}))
   .then(() => console.log(this.state.availableItems))
 }

  render() {
    let items = this._loadAvailableItems()

    const nextRoute = {
      component: ItemList,
      title: 'Add Items',
      passProps: { userInfo: this.props.userInfo, availableItems: items }
    }

    return(
      <View style={styles.container}>
        <Image style={{flex: 1, height: undefined, width: undefined}} resizeMode='contain' source={require('../../images/box_of_food.jpg')}/>
        <TouchableHighlight style={{backgroundColor: '#2c3e50'}} onPress={() => {this._handleNextPress(nextRoute)}}>
          <Text style={{marginBottom: 100, alignSelf: 'center'}}>
            Continue
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    paddingTop: 64
  }
})

module.exports = Donation
