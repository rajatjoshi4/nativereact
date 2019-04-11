import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';
export default class Sigin extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''

        }
    }
    register = () => {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { name, email, password } = this.state;


        if (name == '' || email == '' || password == '') {
            this.setState({ Error: "Fill All field" })
        }
        else if (!reg.test(String(email).toLowerCase())) {
            this.setState({ Error: "Email is not correct" });
        }
        else {

            const url = 'http://searchkero.com/rajat/testapi/index.php/Home/insert?name=' + name + '&email=' + email + '&password=' + password;
            fetch(url)
                .then((res) => res.json())
                .then(res => {
                    this.setState({ Error: res.message })
                })
                .catch((error) => {
                   this.setState({Error:error});
                })
        }
        Keyboard.dismiss();
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>

                <View style={styles.sigincontainer}>
                    <Text style={{ fontSize: 24, color: '#ffffff', marginBottom: 10 }}>Register</Text>
                    <Text style={{ fontWeight: '700', color: 'red' }}>{this.state.Error}</Text>
                    <TextInput
                        style={styles.inputbox}
                        placeholderTextColor='#ffffff'
                        placeholder="Enter Name" onChangeText={name => this.setState({ name })} />

                    <TextInput
                        style={styles.inputbox}
                        placeholderTextColor='#ffffff'
                        placeholder="Enter Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onChangeText={email => this.setState({ email })} />

                    <TextInput
                        style={styles.inputbox}
                        placeholderTextColor='#ffffff'
                        placeholder="Enter password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}>

                    </TextInput>


                    <TouchableOpacity onPress={this.register} style={styles.button}>
                        <Text style={styles.btntext}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('Login')} style={styles.button}>
                        <Text style={styles.btntext}>Login</Text>
                    </TouchableOpacity>


                </View>

            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6478c9',
        alignItems: 'center',
        justifyContent: 'center',


    },
    sigincontainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputbox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingHorizontal: 16,
        marginVertical: 10,
        borderRadius: 15,
        marginVertical: 10,

    },
    btntext: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'

    },
    button: {
        width: 300,
        backgroundColor: '#8e086a',
        borderRadius: 35,
        paddingVertical: 12,
        marginVertical: 10

    }
});