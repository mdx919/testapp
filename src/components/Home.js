import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TextInput,
} from 'react-native';

import firebase from 'firebase';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoder';

export default class Home extends React.Component {

	static navigationOptions = {
		title: "Home",
	}

	// componentWillMount() {
 //    var that = this;
 //    navigator.geolocation.getCurrentPosition(
 //      (position) => {
 //        var initialPosition = JSON.stringify(position);
 //        this.setState({
 //          pinLat:  position.coords.latitude, 
 //          pinLong: position.coords.longitude
 //        });
 //      },
 //      (error) => alert(JSON.stringify(error)),
 //      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
 //    );
 //  }

  

           

	componentWillMount() {
		let x = firebase.database().ref('profiles');
		let that = this;

		x.on('value', snapshot2 => {
			that.setState({
			profile: snapshot2.val(),
			loading: false
			})
		})
	}


	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			searchBox: "",
			location: ""
		};
	}

	linker(where, who, key){
 		this.props.navigation.navigate(where, {user: who, key: key});
 		// console.log("Navigation::::::::: ",this.props.navigation)
 	};


	render() {
    return (
      	<View style={styles.container}>
		    
		    <View style={styles.loginInfo}>
			    <Text style={styles.emailTag}>Search</Text>
			    <TextInput style={styles.inputEmail}
			    	onChangeText= {(searchBox) => this.setState({searchBox})}
					placeholder= {"search for anything"}
			    />
			</View>
			<View style={styles.loginInfo}>
			    <Text style={styles.emailTag}>Where</Text>
			    <TextInput style={styles.inputEmail}
			    	onChangeText= {(location) => this.setState({location})}
					placeholder= {"location"}
			    />
			</View>



			{this.state.loading ?
				null
				:
			<View>
			{Object.keys(this.state.profile).map(function (key){
				var val = this.state.profile[key];
				if(val.firstName.toLowerCase().startsWith(this.state.searchBox.toLowerCase())){
					return(
						<TouchableHighlight key={key} onPress={this.linker.bind(this, "UserProfile", val, key)}>
						 	<View style={{borderBottomWidth:1,}}>
							<Text> {val.firstName} </Text>
							</View>
						</TouchableHighlight>
					)
				}
				else {
					return null;
				}
				
				
					
				}, this)
			}
			</View>
			}

			<TouchableHighlight onPress={this.linker.bind(this, "Map")}>
			    	<View style={styles.loginButton}>
				    	<Text style={styles.loginButtonText}>
				    		Google Map
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
		height: 50,
		backgroundColor: "skyblue",
		color: "black",
	},

});