import { View, Text } from 'react-native'
import React from 'react'
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Chats from './Chats';
import { colors } from '../Helper/Constants';

const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={colors.GREEN}
            barStyle={{ backgroundColor: colors.WHITE, }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chats"
                component={Chats}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="chat-processing" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Intro2"
                component={Intro2}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}
export default BottomTab;