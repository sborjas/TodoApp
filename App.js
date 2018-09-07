import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator} from 'react-navigation'; 

import All from './Components/all';
import Active from './Components/active';
import Checked from './Components/checked';




export default createBottomTabNavigator(
  {
    All: { screen: All },
    Active: { screen: Active },
    Checked:{ screen: Checked},
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'All') {
          iconName = `ios-list${focused ? '' : '-outline'}`;
        } if (routeName === 'Active') {
          iconName = `ios-flash${focused ? '' : '-outline'}`;
        }else if (routeName === 'Checked') {
          iconName = `ios-checkbox${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
   
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: true,
  }
);

