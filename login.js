import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Button } from 'react-native'
import firebase from 'react-native-firebase';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            debugger
        }, err => {
            debugger;
        });
    }

    signInUser() {
        firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then(user => {
            console.log(user);
            this.props.navigation.navigate('profile');
        }, err => {
            console.log(err);
        });
    }

    logoutuser() {
        firebase.auth().signOut().then(res => {
            debugger;
        }, err => {
            debugger;
        });
    }

    render() {
        return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flex: 80 }}>
                    <Text>Email</Text>
                    <TextInput value={this.state.username} style={{ backgroundColor: 'wheat' }} onChangeText={(text) => this.setState({ username: text })}></TextInput>
                    <Text>password</Text>
                    <TextInput value={this.state.password} secureTextEntry={true} style={{ backgroundColor: 'wheat' }} onChangeText={(text) => this.setState({ password: text })}></TextInput>
                    <Button title={"login"} onPress={() => { this.signInUser() }}></Button>
                    <Button title={"logout"} onPress={() => { this.logoutuser() }}></Button>
                </View>
            </View>
        )
    }
}
