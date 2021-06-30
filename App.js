
import React, { useState } from "react";
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TextInput, Button, StyleSheet, Text, View,FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ysc from './components/Ysc';
import VaccineDemo from './components/VaccineDemo';

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}
           options={{ title: <Text style={{fontSize:40,color:'blue'}}>Welcome !</Text> }}/>
        <Stack.Screen name="record" component={Ysc}
            options={{ title: 'Go back to Home' }}/>
        <Stack.Screen name="Vacc" component={VaccineDemo}
        options={{ title: 'Go back to Home' }}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Here is a homescreen with some navigation ...
const HomeScreen = ({ navigation }) => {
  return (
   <View>
    <View >
      <Button
        title=<Text style={{fontSize:20,color:'white'}}>See vaccine data in USA</Text>
        color="red"
        onPress={() =>
          navigation.navigate('Vacc')
        }
      />
      <Button
        title=<Text style={{fontSize:20,color:'white'}}>see your personal vaccine record</Text>
        color="red"
        onPress={() =>
          navigation.navigate('record')
        }
      />
      <Image
        style= {{ justifyContent: 'center',alignItems: 'center',width: 1000, height: 600}}
        source=  {require('./assets/l.jpg')}
      />
    </View>
    </View>
  );
};

export default MyStack;
