import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TextInput,
	Image,
} from 'react-native';

import firebase from 'firebase';
import ImagePicker from 'react-native-image-crop-picker';

export default class UserProfile extends React.Component {

	static navigationOptions = {
		title: "PhotoUpload",
	}



	render() {
    return (
      	<View style={{margin: 0,}}>
		
		
      	</View>
    );
  }
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},


	loginButton: {
		marginTop: 20,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},

	loginButtonText: {
		fontSize: 18,
		backgroundColor: 'rgb(255,69,0)',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
	},
	
	
});