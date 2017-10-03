import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TextInput,
} from 'react-native';

import firebase from 'firebase';


export default class Register extends React.Component {


	static navigationOptions = {
		title: "Register"
	}

 	constructor(props) {
 		super(props);
 		this.state = {
		email: "",
		password:"",
		};
 		
 	};

 	register(){
			firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(user => {
				user.sendEmailVerification();
				alert("works")

			}).catch(function(e){
				alert(e.message);
			})
		};

 	linker(where){
 		this.props.navigation.navigate(where);
 	};
	

  render() {
    return (
      	<View style={styles.container}>
		    <Text style={styles.welcome}>
		      	Register
		    </Text>

		    <View style={styles.loginInfo}>
			    <Text style={styles.emailTag}>Email</Text>
			    <TextInput style={styles.inputEmail}
			    	onChangeText= {(email) => this.setState({email})}
			    	keyboardType= {"email-address"}
					placeholder= {"email"}
			    />

			    <Text style={styles.passwordTag}>Password</Text>
			    <TextInput style= {styles.inputPassword}
			    	onChangeText= {(password) => this.setState({password})}
			    	secureTextEntry= {true}
					placeholder= {"password"}
			    />

			    <TouchableHighlight onPress={this.register.bind(this)}>
			    	<View style={styles.registerButton}>
				    	<Text style={styles.registerButtonText}>
				    		Register
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

	welcome: {
		alignSelf: 'center',
		marginTop: 200,
		fontSize: 25,
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

	passwordTag: {
		marginTop: 10,
		fontSize: 18,
	},

	inputPassword: {
		marginTop: 10,
		fontSize: 18,
		width: 250,
		backgroundColor: "skyblue",
		color: "black",

	},

	registerButton: {
		marginTop: 20,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
	},

	registerButtonText: {
		fontSize: 18,
		backgroundColor: 'rgb(255,69,0)',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
	},

});


