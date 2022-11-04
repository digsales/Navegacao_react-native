import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native";

export default (props) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "TelaA":
              iconName = focused ? "ios-home" : "ios-home-outline";
              break;
            case "TelaB":
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              break;
            case "TelaC":
              iconName = focused ? "ios-list" : "ios-list-outline";
              break;
          }
          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "blue",
        // tabBarLabel: ({ focused }) => {
        //   return (
        //     <Text style={{ fontSize: 15, color: focused ? "red" : false }}>
        //       {focused ? route.name : ""}
        //     </Text>
        //   );
        // },
        // tabBarShowLabel: false,
        tabBarLabelStyle: { fontSize: 15 },
      })}
      initialRouteName="TelaB"
    >
      <Tab.Screen
        name="TelaA"
        component={TelaA}
        options={{ title: "Inicial" }}
      />
      <Tab.Screen
        name="TelaB"
        component={TelaB}
        options={{ title: "Informações" }}
      />
      <Tab.Screen name="TelaC" component={TelaC} options={{ title: "Menu" }} />
    </Tab.Navigator>
  );
};
