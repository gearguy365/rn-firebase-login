import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, Button } from 'react-native'
import firebase from 'react-native-firebase';

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMessage: "",
            showingLoginView: true,
            showingSignupView: false
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user !== null) {
                console.log('a user already logged in, going to profile page');
                this.props.navigation.navigate('profile');
            }
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
            this.setState({
                errorMessage: err.message
            });
        });
    }

    logoutuser() {
        firebase.auth().signOut().then(res => {
            debugger;
        }, err => {
            debugger;
        });
    }

    resetPassword() {
        this.props.navigation.navigate('resetpassword');
    }

    createNewUser() {
        firebase.auth().createUserWithEmailAndPassword('al.amin@glossom.co.jp', 'abc123').then(res => {
            debugger;
            console.log(res);
        }, err => {
            debugger;
            console.log(err);
        });
    }

    render() {
        return (
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <View style={{ flex: 0.8 }}>
                    <Text style={{}}> Have an account </Text>
                    <Text>Email</Text>
                    <TextInput autoCapitalize="none" value={this.state.username} style={{ backgroundColor: 'wheat' }} onChangeText={(text) => this.setState({ username: text })}></TextInput>
                    <Text>password</Text>
                    <TextInput autoCapitalize="none" value={this.state.password} secureTextEntry={true} style={{ backgroundColor: 'wheat' }} onChangeText={(text) => this.setState({ password: text })}></TextInput>
                    <Text>{this.state.errorMessage}</Text>
                    <TouchableOpacity onPress={() => { this.signInUser() }} style={{ backgroundColor: 'cyan', flexDirection: 'row' }}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <Button title={"login"} onPress={() => { this.signInUser() }}></Button>
                    <Button title={"forgot password"} onPress={() => { this.resetPassword() }}></Button>
                    <Button title={"create new test user"} onPress={() => { this.createNewUser() }}></Button>
                </View>
            </View>
        )
    }
}
