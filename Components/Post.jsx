import React from 'react'
import { StyleSheet,Image } from 'react-native';

const Post = (props) => {
  return (
    <Image source={props.src} style={styles.image} />
  )
}

export default Post

const styles = StyleSheet.create({
    image: {
        width: '95%',
        height: 300,
        borderWidth:1,
        borderColor:'rgb(188, 188, 188)',
        borderRadius:10
      }, 
});