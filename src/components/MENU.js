import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TextInput,
} from 'react-native';

import firebase from 'firebase';


export default class ADD extends React.Component {

	static navigationOptions = {
		//title: "Login",
		header: null
	}


 	constructor(props) {
 		super(props);
 		this.state = {
		email: "thanvirdx919@gmail.com",
		password: "Atlantis919"
		};
 		
 	};

 	login(){
			firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(user => {
				this.props.navigation.navigate("Profile");
				

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
		      	Welcome to the App 2
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

			    <TouchableHighlight onPress={this.login.bind(this)}>
			    	<View style={styles.loginButton}>
				    	<Text style={styles.loginButtonText}>
				    		Login
				    	</Text>
			    	</View>
			    </TouchableHighlight>

			    <TouchableHighlight onPress={this.linker.bind(this, "Register")}>
			    	<View style={styles.loginButton}>
				    	<Text style={styles.loginButtonText}>
				    		Register
				    	</Text>
			    	</View>
			    </TouchableHighlight>

			    <TouchableHighlight onPress={this.linker.bind(this, "Forgot")}>
			    	<View style={styles.loginButton}>
				    	<Text style={styles.loginButtonText}>
				    		Forgot
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


