import React, { Component } from 'react';
import { Platform } from 'react-native'
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

import Constants from 'app/constants/Colors'

class ChatIcon extends Component {
  render() {
    return (
      <Ionicons
        name={Platform.OS === 'ios' ? `ios-chatbubbles` : 'md-chatbubbles'}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Constants.tabIconSelected : Constants.tabIconDefault}
      />
    );
  }
}


class PetIcon extends Component {
  render() {
    return (
      <MaterialIcons
        name={'pets'}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Constants.tabIconSelected : Constants.tabIconDefault}
      />
    );
  }
}

class ProfileIcon extends Component {
  render() {
    return (
      <FontAwesome
        name={Platform.OS === 'ios' ? `user-circle` : 'user'}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Constants.tabIconSelected : Constants.tabIconDefault}
      />
    );
  }
}

export {
  PetIcon,
  ChatIcon,
  ProfileIcon,
}