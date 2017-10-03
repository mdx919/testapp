import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TextInput,
} from 'react-native';

import firebase from 'firebase';



export default class Forgot extends React.Component {

	static navigationOptions = {
		title: "Forgot"
	}

	constructor(props) {
		super(props);
		this.state ={
			email: "",
		};
	};

	reset(){
	firebase.auth().sendPasswordResetEmail(this.state.email).then(function(suc){
		alert("success")
	}).catch(function(e){
		alert(e.message);
	})
};

	render() {
    return (
      	<View style={styles.container}>
		    
      		<View style={styles.loginInfo}>
			    <Text style={styles.emailTag}>Email</Text>
			    <TextInput style={styles.inputEmail}
			    	onChangeText= {(email) => this.setState({email})}
			    	keyboardType= {"email-address"}
					placeholder= {"email"}
			    />

			    <TouchableHighlight onPress={this.reset.bind(this)}>
			    	<View style={styles.loginButton}>
				    	<Text style={styles.loginButtonText}>
				    		Send Email
				    	</Text>
			    	</View>
			    </TouchableHighlight>
			</View>    
      	</View>
    );
  }
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		// backgroundColor: 'rgb(255,69,0)',
	},

	loginInfo: {
		alignItems: "center",
		marginTop: 20,
	},

	emailTag: {
		fontSize: 18,
		
	},

	inputEmail: {
		marginTop: 10,
		fontSize: 18,
		width: 250,
		backgroundColor: "skyblue",
		color: "black",
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


