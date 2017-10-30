import React from 'react'
import {Image, StyleSheet, View} from 'react-native'

class BackgroundImage extends React.Component {
  render() {
    return (
      <Image
        source={require('../../images/gradient-wallpaper.jpeg')}
        style={styles.backgroundImage}>
        {this.props.children}
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null
  },
})

module.exports = BackgroundImage
