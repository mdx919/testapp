/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { StackNavigator} from 'react-navigation';

import Main from './src/components/Main';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Forgot from './src/components/Forgot';
import Profile from './src/components/Profile';
import Home from './src/components/Home';
import AddMenu from './src/components/AddMenu.js';
import UserProfile from './src/components/UserProfile.js';
import Map from './src/components/Map.js';


const testapp = StackNavigator({

	Login: { screen: Login },
	Home: { screen: Home },
	Map: { screen: Map},
	Register: { screen: Register },
	Forgot: { screen: Forgot },
  
});


AppRegistry.registerComponent('testapp', () => testapp);
