// import { useFonts } from 'expo-font';
import React, { useContext, useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AuthContext, AuthProvider } from './app/authentication/AuthProvider';
// import SplashScreen from './app/screens/SplashScreen';
//-----------------------------authContext and storage---------------------
// import { AuthContext } from './app/components/context';
// import AsyncStorageLib from '@react-native-async-storage/async-storage';
//-----------------------------Navigation-----------------------------------
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//------------------------------screens--------------------------------------
import Intro1 from './app/screens/Intro1';
import Intro2 from './app/screens/Intro2';
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
// import UploadImage from './app/screens/UploadImage';
// import ConfirmImage from './app/screens/ConfirmImage';
// import LocationScreen from './app/screens/LocationScreen';
import Congrats from './app/screens/Congrats';
import OtpScreen from './app/screens/OtpScreen';
import ForgotPassword from './app/screens/ForgotPassword';
import SignupDetails from './app/screens/SignupDetails';
import Home from './app/screens/Home';
// import CameraScreen from './app/screens/CameraScreen';
import ExploreRestaurant from './app/screens/ExploreRestaurant';
import Chats from './app/screens/Chats';
import ExploreMenu from './app/screens/ExploreMenu';
import BottomTab from './app/screens/BottomTab';
import CartScreen from './app/screens/CartScreen';
import ViewMoreScreen from './app/screens/ViewMoreScreen';

const stack = createStackNavigator();



// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Chats" component={Chats} />
//       <Tab.Screen name="Intro1" component={Intro1} />
//       <Tab.Screen name="Intro2" component={Intro2} />
//     </Tab.Navigator>
//   );
// }
export default function App() {
  // const { user, setUser } = useContext(AuthContext);


  return (
    <AuthProvider>
      <NavigationContainer>
        <stack.Navigator>
          {/* <AuthContext.Provider value={authContext}></AuthContext.Provider> */}
          {/* <stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
          <stack.Screen name="Intro1" component={Intro1} options={{ headerShown: false }} />
          <stack.Screen name="Intro2" component={Intro2} options={{ headerShown: false }} />
          <stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />

          <stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
          <stack.Screen name="ViewMoreScreen" component={ViewMoreScreen} options={{ headerShown: false }} />
          <stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
          <stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
          <stack.Screen name="SignupDetails" component={SignupDetails} options={{ headerShown: false }} />
          <stack.Screen name="Chats" component={Chats} options={{ headerShown: false }} />
          <stack.Screen name="ExploreRestaurant" component={ExploreRestaurant} options={{ headerShown: false }} />
          <stack.Screen name="ExploreMenu" component={ExploreMenu} options={{ headerShown: false }} />
          <stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
          <stack.Screen name="Congrats" component={Congrats} options={{ headerShown: false }} />
          <stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />

          {/* <stack.Screen name="UploadImage" component={UploadImage} options={{ headerShown: false }} />
        <stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }} />
        <stack.Screen name="ConfirmImage" component={ConfirmImage} options={{ headerShown: false }} />
        <stack.Screen name="LocationScreen" component={LocationScreen} options={{ headerShown: false }} /> */}
        </stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
    //<SplashScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
