import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class signup extends Component {
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
                </View>
            </View>
        )
    }
}
