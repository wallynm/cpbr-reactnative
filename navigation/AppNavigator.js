import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HomeScreen from 'app/screens/HomeScreen'
import ChatScreen from 'app/screens/ChatScreen'
import ProfileScreen from 'app/screens/ProfileScreen'
import PetListScreen from 'app/screens/PetListScreen'

import { PetIcon, ProfileIcon, ChatIcon } from 'app/src/components/TabBarIcon'
import Constants from 'app/constants/Colors'

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
})
ProfileStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => <ProfileIcon focused={focused}/>
}

const ChatStack = createStackNavigator({
  Chat: ChatScreen,
})
ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => <ChatIcon focused={focused} />
}

PetStack =  createStackNavigator({
  Pets: PetListScreen,
})
PetStack.navigationOptions = {
  tabBarLabel: 'Pets',
  tabBarIcon: ({ focused }) => <PetIcon focused={focused} />
}

export default createBottomTabNavigator({
  PetStack,
  ChatStack,
  ProfileStack,
}, {
  tabBarOptions: {
    activeTintColor: Constants.tabTextSelected
  }
})