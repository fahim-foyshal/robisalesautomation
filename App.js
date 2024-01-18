/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from './screens/Dashboard';
import Attendance from './screens/Attendance';
import TodaysTask from './screens/TodaysTask';




const Stack = createNativeStackNavigator()

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
   
 
       
    <NavigationContainer  style={{ backgroundColor: 'white' }}>
     
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="Home" component={Dashboard}   />
          <Stack.Screen
          name="SelfieAttendance"
          component={Attendance}
          options={{       headerStyle: {
            backgroundColor: "rgba(2,132, 199,255)",
          },
           headerShown: true, title: 'Selfie Attendance' }}
        ></Stack.Screen>
          <Stack.Screen
          name="tasks"
          component={TodaysTask}
          options={{       headerStyle: {
            backgroundColor: "rgba(2,132, 199,255)",
          },
           headerShown: true, title: "Today's Tasks"}}
        ></Stack.Screen>
        </Stack.Navigator>

    </NavigationContainer>

    
  
   
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
