/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Main from './src/components/Main';

import { StackNavigator} from 'react-navigation';

import Login from './src/components/Login';
import Register from './src/components/Register';
// import Forgot from './src/components/Forgot';
// import Profile from './src/components/Profile';
import Home from './src/components/Home';


const testapp = StackNavigator({
  	Login: { screen: Login },
  	Register: { screen: Register },
  	Forgot: { screen: Forgot },
  	Profile: { screen: Profile },
  	Home: { screen: Home },
  
});



AppRegistry.registerComponent('testapp', () => testapp);
