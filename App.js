import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import TextoCentral from "./src/components/TextoCentral";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextoCentral>App</TextoCentral>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
