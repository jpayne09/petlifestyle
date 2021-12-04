import * as React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import HomeScreen from './HomeScreenComponent';
import Profile from './ProfileComponent';
import Entry from './EntryComponent';


const Stack = createStackNavigator();


export default function Main() {
  return (
    <NavigationContainer>
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Entry"
        component={Entry}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen 
      name="Main" 
      component={AppStack}
      options={{
        gestureEnabled: false,
      }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createMaterialBottomTabNavigator();


function AppStack() {
  return (
        <Tab.Navigator
          activeColor = "white"
          barStyle={{backgroundColor: 'tomato'}}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-list' : 'ios-list';
              }else if (route.name === 'Entry'){
                iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
  );
}
