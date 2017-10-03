import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TextInput,
} from 'react-native';

import firebase from 'firebase';


export default class Profile extends React.Component {

	static navigationOptions = {
		title: "Profile",
	}

	constructor(props) {
		super(props);
		this.state= {
			loading: true,
		}
	};

	linker(where){
 		this.props.navigation.navigate(where);
 	};

	componentWillMount() {
		let currentUid = firebase.auth().currentUser.uid;
		let x = firebase.database().ref('profiles/' + currentUid);
		
		let that = this;

		x.once('value', snapshot2 => {
			that.setState({
			profile: snapshot2.val(),
			loading: false
			})
		})
		.then(function(){
		})
			.catch(function(err){
				alert("err.message");
			})
	}

	userInput(){
		let currentUid = firebase.auth().currentUser.uid;
		var x = firebase.database().ref('profiles');

		x.child(currentUid).set({
			firstName: "md",
			lastName: "uddin"
		}).then(function(suc){
			alert("worked");

		}).catch(function(err){
			alert(err.message);
		});
	};


	render() {
    return (
      	<View style={styles.container}>
			<Text style={styles.greeting}>
				Welcome
			</Text> 

			
			 {this.state.loading ?
			 	null
			 	:
			 	<View>
				 	<Text>
					{this.state.profile.firstName}
					{this.state.profile.lastName}
					</Text>		
				</View>
			 }
			
			

			<TouchableHighlight onPress={this.userInput.bind(this)}>
			    <View style={styles.loginButton}>
				    <Text style={styles.loginButtonText}>
				    	Submit
				    </Text>
				</View>
			</TouchableHighlight> 
			<TouchableHighlight onPress={this.linker.bind(this, "AddMenu")}>
			    	<View style={styles.loginButton}>
				    	<Text style={styles.loginButtonText}>
				    		add menu
				    	</Text>
			    	</View>
			</TouchableHighlight>  

      	</View>
    );
  }
}

const styles = StyleSheet.create({

	container: {
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