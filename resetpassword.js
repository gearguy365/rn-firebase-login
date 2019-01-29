import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import firebase from 'react-native-firebase'

export default class resetpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            newPassword: '',
            confirmationCode: ''
        }
    }
    render() {
        return (
            <View>
                <Text> enter you email to send reset password instructions</Text>
                <TextInput onChangeText={(text) => this.setState({ email: text })} autoCapitalize="none" value={this.state.email} style={{ backgroundColor: 'wheat' }}></TextInput>
                <Button title="send password reset email" onPress={() => {
                    firebase.auth().sendPasswordResetEmail('m1a2alamin@gmail.com').then(res => {
                        debugger;
                    }, err => {
                        debugger;
                    });
                }}></Button>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 3 }}></View>
                <Text> set a new password </Text>
                <TextInput onChangeText={(text) => this.setState({ newPassword: text })} autoCapitalize="none" value={this.state.newPassword} style={{ backgroundColor: 'wheat' }}></TextInput>
                <Text> enter confimation code </Text>
                <TextInput onChangeText={(text) => this.setState({ confirmationCode: text })} autoCapitalize="none" value={this.state.confirmationCode} style={{ backgroundColor: 'wheat' }}></TextInput>
                <Button title="reset password" onPress={() => {
                    firebase.auth().confirmPasswordReset(this.state.confirmationCode, this.state.newPassword).then(res => {
                        debugger;
                    }, err => {
                        debugger;
                    });
                }}></Button>
            </View>
        )
    }
}
