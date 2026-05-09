import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import AlphabetScreen from './screens/AlphabetScreen';
import NumberScreen from './screens/NumberScreen';
import ProgressScreen from './screens/ProgressScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Alphabets') {
              iconName = focused ? 'alphabetical' : 'alphabetical';
            } else if (route.name === 'Numbers') {
              iconName = focused ? 'numeric' : 'numeric';
            } else if (route.name === 'Progress') {
              iconName = focused ? 'chart-box' : 'chart-box-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF6B6B',
          tabBarInactiveTintColor: '#888',
          headerShown: true,
          headerStyle: { backgroundColor: '#667EEA' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Kids Learning' }} />
        <Tab.Screen name="Alphabets" component={AlphabetScreen} options={{ title: 'Learn Alphabets' }} />
        <Tab.Screen name="Numbers" component={NumberScreen} options={{ title: 'Learn Numbers' }} />
        <Tab.Screen name="Progress" component={ProgressScreen} options={{ title: 'My Progress' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
