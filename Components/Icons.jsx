import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

const Icons = (props) => {
  const [isPressed, setIsPressed] = useState(false);

  function pressHandler(){
    setIsPressed(true);
  }
  function pressOutHandler(){
    setIsPressed(false);
  }

  return (
    <FontAwesome
      name={props.name}
      size={props.size}
      color={isPressed?props.love:props.color}
      style={styles.icon}
      onPress={pressHandler}
      onPressOut={pressOutHandler}
    />
  );
};

export default Icons;

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 10,
  },
});
