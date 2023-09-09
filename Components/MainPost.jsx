import React from "react";
import Icons from "./Icons";
import Post from "./Post";
import RoundedImage from './RoundedImage';

import { StyleSheet,Text,View } from "react-native";

const MainPost = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.profile}>
        <RoundedImage src={props.pic} />
        <Text style={styles.name}>{props.name}</Text>
      </View>

      <Post src={props.src} />

      <View style={styles.footer}>
        <View style={styles.reacts}>
          <Icons name="heart" size={25} color="snow" love='red' />
          <Icons name="comment" size={25} color="snow" />
          <Icons name="share" size={25} color="snow" />
        </View>
        <View>
          <Icons name="bookmark" size={25} color="snow" />
        </View>
      </View>
    </View>
  );
};

export default MainPost;

const styles = StyleSheet.create({

    main:{
        marginBottom:35,
        width:'90%',
    },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 10,
    marginLeft: 10,
    width: "100%",
  },
  name: {
    color: "snow",
    marginLeft: 10,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    width: "95%",
  },
  reacts: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
});
