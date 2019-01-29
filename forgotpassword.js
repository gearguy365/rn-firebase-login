import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import firebase from 'react-native-firebase'

export default class forgotpassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oldPass: '',
            newPass: '',
            newPassAgain: ''
        }
    }

    render() {
        return (
            <View>
                <View style={{ borderBottomColor: "blue", borderBottomWidth: 3 }}>
                    <Text style={{ fontSize: 20 }}> reset email address </Text>
                </View>
                <Text> old password </Text>
                <TextInput value={this.state.oldPass} style={{ backgroundColor: 'wheat' }} onChangeText={(text) => this.setState({ oldPass: text })}></TextInput>
                <Text> new password </Text>
                <TextInput value={this.state.newPass} style={{ newPass: 'wheat' }} onChangeText={(text) => this.setState({ newPass: text })}></TextInput>
                <Text> new password again </Text>
                <TextInput value={this.state.newPassAgain} style={{ backgroundColor: 'wheat' }} onChangeText={(text) => this.setState({ newPassAgain: text })}></TextInput>

                <Button title="reset password" onPress={() => {
                    firebase.auth().onAuthStateChanged(user => {
                        debugger;
                        let cred = firebase.auth.EmailAuthProvider.credential(user._user.email, this.state.oldPass);
                        debugger;

                        user.reauthenticateWithCredential(cred).then(res => {
                            debugger;
                            user.updatePassword(this.state.newPass).then(res => {
                                debugger;
                            }, err => {
                                debugger;
                            })
                        }, err => {
                            debugger;
                        })
                        user.updatePassword()
                    });
                }}></Button>
            </View>
        )
    }
}
