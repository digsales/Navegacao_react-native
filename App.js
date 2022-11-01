import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import TextoCentral from "./src/components/TextoCentral";
import TelaA from "./src/views/TelaA";
import TelaB from "./src/views/TelaB";
import TelaC from "./src/views/TelaC";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TelaA />
      <TelaB />
      <TelaC />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
