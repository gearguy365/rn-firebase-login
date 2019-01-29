/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import signup from './signup.js';
import profile from './profile.js';
import login from './login.js';
import forgotpassword from './forgotpassword.js';
import resetpassword from './resetpassword.js';
import changeemail from './changeemail.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = createAppContainer(createSwitchNavigator({
  login: createStackNavigator({ login: login }),
  profile: createStackNavigator({ profile: profile }),
  signup: createStackNavigator({ signup: signup }),
  forgotpassword: createStackNavigator({ forgotpassword: forgotpassword }),
  resetpassword: createStackNavigator({ resetpassword: resetpassword }),
  changeemail: createStackNavigator({ changeemail: changeemail })
}, {
    initialRouteName: 'login',
  }));


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    console.log("initialized========");
  }
  render() {
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
