import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableHighlight, TouchableOpacity} from 'react-native';
import ItemList from '../items/itemList'

class Donation extends React.Component {
  constructor() {
    super()
    this.state = {
      availableItems: null
    }
  }
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

    return(
      <View style={styles.container}>
        <View style={{width: undefined, height: 250, backgroundColor: '#36357f'}}>
          <TouchableOpacity style={styles.nextButton} onPress={() => {this._handleNextPress(nextRoute)}}>
            <Image source={require('../../images/next.png')} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 64
  },
  nextButton: {
    position: 'relative',
    bottom: -500,
    flexDirection: 'row',
    justifyContent: 'center'
  }

})

module.exports = Donation
