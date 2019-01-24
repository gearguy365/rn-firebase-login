import React, { Component } from 'react'
import { Text, View } from 'react-native'
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
            if (user) {
                debugger;
                this.setState({
                    userName: user._user.displayName
                })
            }
        });
    }
    render() {
        return (
            <View>
                <Text> profile of {this.state.userName} </Text>
            </View>
        )
    }
}
