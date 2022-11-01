import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.corFundo || "black",
      }}
    >
      <Text style={{ fontSize: 50, color: props.corFonte || "white" }}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
