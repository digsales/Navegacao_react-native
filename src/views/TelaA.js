import React from "react";
import { View, StyleSheet } from "react-native";
import TextoCentral from "../components/TextoCentral";

export default (props) => <TextoCentral corFundo={"red"}>Tela A</TextoCentral>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
