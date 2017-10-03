import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TextInput,
} from 'react-native';

import firebase from 'firebase';


export default class AddMenu extends React.Component {

	static navigationOptions = {
		title: "Add Menu",
	}


 	constructor(props) {
 		super(props);
 		this.state = {
		itemName: "",
		description: "",
		price: "",
		loading: true,
		};
 		
 	};

 	componentWillMount() {
		let currentUid = firebase.auth().currentUser.uid;
		let x = firebase.database().ref('menu/' + currentUid);
		
		let that = this;

		x.on('value', snapshot2 => {
			that.setState({
			menu: snapshot2.val(),
			loading: false
			})
		})
	}

 	addItem(){
 		let currentUid = firebase.auth().currentUser.uid;
		var x = firebase.database().ref('menu');

		x.child(currentUid).set({
			itemName: this.state.val().itemName,
			description: this.state.val().description,
			price: this.state.val().price
		}).then(function(suc){
			alert("worked");

		}).catch(function(err){
			alert(err.message);
		});
 	}
	

  render() {
    return (
      	<View style={styles.container}>
		    <View>
		    	<Text> 
			 		{this.state.loading ?
			 			null
			 			:
			 			<View style={{marginTop: 10, alignItems:"center", width: 300, height: 100,}}>
						 	<Text>
							{this.state.menu.itemName}
							--
							{this.state.menu.description}
							--
							{this.state.menu.price}

							</Text>		
						</View>
			 		}
			 	</Text>
		    </View>

		    <View style={styles.loginInfo}>
			    <Text style={styles.emailTag}>Item Name</Text>
			    <TextInput style={styles.inputEmail}
			    	onChangeText= {(itemName) => this.setState({itemName})}
					placeholder= {"item name"}
			    />

			    <Text style={styles.passwordTag}>Description</Text>
			    <TextInput style= {styles.inputPassword}
			    	onChangeText= {(description) => this.setState({description})}
					placeholder= {"description of the item"}
			    />

			    <Text style={styles.passwordTag}>Price</Text>
			    <TextInput style= {styles.inputPassword}
			    	onChangeText= {(price) => this.setState({price})}
					placeholder= {"Price in Taka"}
			    />

			    <TouchableHighlight onPress={this.addItem.bind(this)}>
			    	<View style={styles.loginButton}>
				    	<Text style={styles.loginButtonText}>
				    		Add item
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


