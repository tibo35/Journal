import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";

import CalendarScreen from "./screens/CalendarScreen";
import TaskScreen from "./screens/TaskScreen";
import SettingScreen from "./screens/SettingScreen";

import AddIcon from "../../assets/AddIcon.png";
import AddIconActive from "../../assets/AddIcon.png";
import CalendarIcon from "../../assets/CalendarIcon.png";
import CalendarIconActive from "../../assets/CalendarIcon.png";
import settingsIcon from "../../assets/SettingIcon.png";
import settingsIconActive from "../../assets/SettingIcon.png";

const CalendarName = "Calendar";
const TaskName = "Task";
const SettingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <LinearGradient
      // Specify the colors and other properties for your LinearGradient here
      colors={["#c31432", "#240b36"]}
      style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={TaskName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let rn = route.name;

              if (rn === CalendarName) {
                return (
                  <Image
                    source={focused ? CalendarIconActive : CalendarIcon}
                    style={{ width: 40, height: 40 }}
                  />
                );
              } else if (rn === TaskName) {
                return (
                  <Image
                    source={focused ? AddIconActive : AddIcon}
                    style={{ width: 50, height: 50 }}
                  />
                );
              } else if (rn === SettingsName) {
                return (
                  <Image
                    source={focused ? settingsIconActive : settingsIcon}
                    style={{ width: 40, height: 40 }}
                  />
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "grey",
            showLabel: false,
            tabBarItemStyle: {
              width: "33%", // adjust based on your requirement
            },
          }}>
          <Tab.Screen name={CalendarName} component={CalendarScreen} />
          <Tab.Screen name={TaskName} component={TaskScreen} />
          <Tab.Screen name={SettingsName} component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainContainer;
