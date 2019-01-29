import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import firebase from 'react-native-firebase';

export default class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ""
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            this.setState({ userName: user._user.displayName });
        });
    }

    logoutUser() {
        firebase.auth().signOut().then(res => {
            this.props.navigation.navigate('login')
        })
    }

    forgotPassword() {
        this.props.navigation.navigate('forgotpassword');
    }

    changeEmailAddress() {
        this.props.navigation.navigate('changeemail');
    }

    render() {
        return (
            <View>
                <Text> profile of {this.state.userName} </Text>
                <Button title="LogOut" onPress={() => { this.logoutUser() }}></Button>
                <Button title={"Change Password"} onPress={() => { this.forgotPassword() }}></Button>
                <Button title={"Change Email Address"} onPress={() => { this.changeEmailAddress() }}></Button>

            </View>
        )
    }
}
