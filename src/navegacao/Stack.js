import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import PassoStack from "../components/PassoStack";

export default (props) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="TelaA"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name="TelaA" options={{ title: "Informações Iniciais" }}>
        {(props) => (
          <PassoStack {...props} avancar="TelaB">
            <TelaA />
          </PassoStack>
        )}
      </Stack.Screen>
      <Stack.Screen name="TelaB">
        {(props) => (
          <PassoStack
            {...props}
            voltar
            avancar="TelaC"
            avancarParams={{ numero: 0 }}
          >
            <TelaB />
          </PassoStack>
        )}
      </Stack.Screen>
      <Stack.Screen name="TelaC">
        {(props) => (
          <PassoStack
            {...props}
            voltar
            avancar="TelaC"
            avancarParams={{ numero: parseInt(Math.random() * 1000) }}
          >
            <TelaC {...props} />
          </PassoStack>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
