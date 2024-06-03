import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import InformationScreen from './src/screens/InformationScreen';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={HomeScreen} name="Home" />
        <Stack.Screen name="InformationScreen" component={InformationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});