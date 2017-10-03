import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';
import firebase from 'firebase';
import { StackNavigator} from 'react-navigation';



firebase.initializeApp({
			apiKey: "AIzaSyDa5jTw7ySbsPLCYJDgHh5pIBkCwFjwlXs",
		    authDomain: "footpath-f976a.firebaseapp.com",
		    databaseURL: "https://footpath-f976a.firebaseio.com",
		    projectId: "footpath-f976a",
		    storageBucket: "footpath-f976a.appspot.com",
		    messagingSenderId: "39007593753"
		});


export default class Main extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
      	<Login />
      </View>
    );
  }
}


