import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetailsScreen from './src/presentation/screens/UserDetailScreen';
import UserListScreen from './src/presentation/screens/UserListScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen
          name="UserList"
          component={UserListScreen}  // Correct component usage
          options={{ title: 'User List' }}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetailsScreen}  // Correct component usage
          options={{ title: 'User Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
