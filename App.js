import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
          title: '𑣲 CHATinho ˙𐃷˙',
          headerStyle: { backgroundColor: '#F472B6' },
          headerTintColor: '#FFFFFF'
          }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: 'Chat privado viu bb',
            headerStyle: { backgroundColor: '#F472B6' },
            headerTintColor: '#FFFFFF'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}