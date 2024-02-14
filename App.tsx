import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateProvider } from './src/ContextNew/context';
import Login from './src/screens/Login';
import SignupForm from './src/screens/SignupForm';
// import Home from './src/screens/Home'; // Example authenticated screen
import PhotosFile from './src/PhotosFile'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <CreateProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="PhotosFile" component={ PhotosFile} />
          <Stack.Screen name="Signup" component={SignupForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </CreateProvider>
  );
};

export default App;
