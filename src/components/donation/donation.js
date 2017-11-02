import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import ItemList from './itemList'

class Donation extends React.Component {
  _handleBackPress() {
   this.props.navigator.pop()
  }

 _handleNextPress(nextRoute) {
   this.props.navigator.push(nextRoute)
 }

  render() {
    const nextRoute = {
      component: ItemList,
      title: 'Add Items',
      passProps: { address: this.props.address }
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
