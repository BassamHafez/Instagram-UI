import React from 'react'
import { Image,StyleSheet } from 'react-native'

const RoundedImage = (props) => {


  return (<Image source={props.src} style={styles.person} />)
}


const styles = StyleSheet.create({ 
  person:{
    borderRadius:50,
    width:60,
    height:60,
    borderWidth:2,
    borderColor:'violet'
  }
})

export default RoundedImage
