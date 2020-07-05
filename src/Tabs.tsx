import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { MainScreen } from './contsiners/MainScreen';
import { ProposalsScreen } from './contsiners/ProposalsScreen';
import { ProtocolsScreen } from './contsiners/ProtocolsScreen';
import { VotingScreen } from './contsiners/VotingScreen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      tabBarOptions={{
        activeTintColor: '#0076e4',
      }}
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarLabel: 'О приложении',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProposalsScreen"
        component={ProposalsScreen}
        options={{
          tabBarLabel: 'Предложения',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hand-left" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProtocolsScreen"
        component={ProtocolsScreen}
        options={{
          tabBarLabel: 'Протоколы',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-document-box" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="VotingScreen"
        component={VotingScreen}
        options={{
          tabBarLabel: 'Голосовать',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="ballot-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}