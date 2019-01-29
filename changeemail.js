import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import firebase from 'react-native-firebase'

export default class changeemail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            newUserEmail: ''
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ currentUser: user });
        });
    }

    render() {
        return (
            this.state.currentUser && <View>
                <Text style={{ fontSize: 20 }}> Change Email Address </Text>
                <Text> Current Email Address </Text>
                <Text> {this.state.currentUser._user.email} </Text>
                <Text> New Email Address </Text>
                <TextInput value={this.state.newUserEmail} onChangeText={(text) => { this.setState({ newUserEmail: text }) }}></TextInput>
                <Button title="Change Email" onPress={() => {
                    debugger;
                    firebase.auth().onAuthStateChanged(user => {
                        debugger;
                        let cred = firebase.auth.EmailAuthProvider.credential(user._user.email, 'zxcvbnm');
                        user.reauthenticateWithCredential(cred).then(res => {
                            debugger;
                            user.updateEmail(this.state.newUserEmail).then(res => {
                                debugger;
                            }, err => {
                                debugger;
                            });
                        })
                    })
                }}></Button>
            </View>
        )
    }
}
