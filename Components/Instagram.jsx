import React from 'react';
import { View,StyleSheet,Text,ScrollView } from 'react-native';
import MainPost from './MainPost';

import RoundedImage from './RoundedImage';

import postImg from '../assets/bank-2547356_1920.jpg';
import postImg2 from '../assets/ekrem-osmanoglu-Uor3RZNHZ9E-unsplash.jpg';
import postImg3 from '../assets/cover.jpeg';
import postImg4 from '../assets/pascal-debrunner-y6vIz1G6TAM-unsplash.jpg';
import person1 from '../assets/customer-img.jpg';
import person2 from '../assets/customer-1.jpg';
import person3 from '../assets/man4.jpg';
import person4 from '../assets/testimonial-4.jpg';


export default function Instagram() {
  return (
    <ScrollView style={styles.containers}>
    <View style={styles.container}>

      <View style={styles.story}>
        <RoundedImage src={person1}/>
        <RoundedImage src={person2}/>
        <RoundedImage src={person3}/>
        <RoundedImage src={person1}/>
      </View>

        <View style={styles.insta}>
            <MainPost name='Nadia Khaled' pic={person1} src={postImg4}/>
        </View>
        <View style={styles.insta}>
            <MainPost name='sami Ahmed' pic={person2} src={postImg2}/>
        </View>
        <View style={styles.insta}>
            <MainPost name='Salma Mohammed' pic={person4} src={postImg}/>
        </View>
        <View style={styles.insta}>
            <MainPost name='Hazem Amr' pic={person3} src={postImg3}/>
        </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    containers:{
        flex:1,
        
    },
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    marginTop:20,
  },
  insta:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  story:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    width:'100%',
    marginBottom:30,
    marginTop:20
},

});
