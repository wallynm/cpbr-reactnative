import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'
import AuthLoadingScreen from 'app/src/modules/user/AuthLoadingScreen'

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthNavigator,
  App: AppNavigator,
},{
  initialRouteName: 'AuthLoading',
});