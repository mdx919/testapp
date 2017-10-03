import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TextInput,
} from 'react-native';

import firebase from 'firebase';


export default class UserProfile extends React.Component {

	static navigationOptions = {
		title: "UserProfile",
	}

	constructor(props) {
		super(props);
		this.state ={
			firstName: this.props.navigation.state.params.user.firstName,
			lastName: this.props.navigation.state.params.user.lastName
		}
	}

 	changeName(){
 		let currentUid = firebase.auth().currentUser.uid; 
		let x = firebase.database().ref('profiles/' + this.props.navigation.state.params.key);

		x.set({
			firstName: this.state.firstName,
			lasttName: this.state.lastName,
		})

		.then(function(success){
			alert("worked")
		}).catch(function(err){
			alert("error")
		})
 	}

 	deleteName(){
 		let currentUid = firebase.auth().currentUser.uid; 
		let x = firebase.database().ref('profiles/' + this.props.navigation.state.params.key);

		x.remove()

		.then(function(success){
			alert("worked")
		}).catch(function(err){
			alert("error")
		})
 	}

 	linker(where){
 		this.props.navigation.navigate(where);
 	}



	render() {
		let thisprops = this.props.navigation.state.params;
    return (
      	<View style={styles.container}>
		    
		    
			<Text style={styles.emailTag}>First Name</Text>
			    <TextInput style={styles.inputEmail}
			    	onChangeText= {(firstName) => this.setState({firstName})}
					placeholder= {"first Name"}
					defaultValue={thisprops.user.firstName}
			/>

			<Text style={styles.passwordTag}>Last Name</Text>
			    <TextInput style= {styles.inputPassword}
			    	onChangeText= {(lastName) => this.setState({lastName})}
					placeholder= {"last Name"}
					defaultValue={thisprops.user.lastName}
			/>

			<TouchableHighlight onPress={this.changeName.bind(this)}>
			    <View style={styles.loginButton}>
				    <Text style={styles.loginButtonText}>
				    	Submit
				    </Text>
			    </View>
			</TouchableHighlight>

			<TouchableHighlight onPress={this.deleteName.bind(this)}>
			    <View style={styles.loginButton}>
				    <Text style={styles.loginButtonText}>
				    	Delete
				    </Text>
			    </View>
			</TouchableHighlight>

			<TouchableHighlight onPress={this.linker.bind(this, "AddPhoto")}>
			    <View style={styles.loginButton}>
				    <Text style={styles.loginButtonText}>
				    	Add Photo
				    </Text>
			    </View>
			</TouchableHighlight>


			 

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