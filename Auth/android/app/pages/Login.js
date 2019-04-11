import React, { Component } from 'react';
import { Icon } from 'native-base';
import { Text, View, StyleSheet, Button, TextInput, ToastAndroid, Image, ActivityIndicator, TouchableOpacity, Keyboard, Alert, AsyncStorage } from 'react-native';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            secureTextEntry: true,
            iconname:"eye"
        }
    }
    _onpress=()=> {
      iconname=(this.state.secureTextEntry)?"eye-off":"eye";
        this.setState({secureTextEntry:!this.state.secureTextEntry,
        iconname:iconname
        })
    }

    login = () => {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const { email, password } = this.state;
        if (email == '' || password == "") {
            this.setState({ Error: "Fill all field" })
        }
        else if (!reg.test(String(email).toLowerCase())) {
            this.setState({ Error: "invalid email" });
        }
        else {
            const url = 'http://searchkero.com/rajat/testapi/index.php/Home/login?email=' + email + '&password=' + password;
            fetch(url)
                .then((res) => res.json())
                .then(res => {

                    if ((res.status) == "200") {
                        this.setState({ Error: "Successs" });
                        AsyncStorage.setItem('user_id', res.id);
                        this.props.navigation.navigate('Home');
                    }
                    else {
                        this.setState({ Error: "wroung details" });
                    }
                })
                .catch((error) => {
                    Alert.alert("Fail");
                })
                .done()
        }


    }



    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#9d48b5' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, color: '#ffffff', marginBottom: 10 }}>Login</Text>

                    <Text style={{ fontWeight: '900', color: 'red' }}>{this.state.Error}</Text>
                    <View style={styles.Inputbox} >
                        <TextInput
                            placeholderTextColor="#ffffff"
                            placeholder="Enter Email"
                            onChangeText={email => this.setState({ email })} >

                        </TextInput>
                    </View>


                    <View style={styles.Inputbox1}>
                        <TextInput
                     
                            secureTextEntry={this.state.secureTextEntry}
                            placeholderTextColor="#ffffff"
                            onChangeText={password => this.setState({ password })}
                            placeholder="Enter password" />
                        <TouchableOpacity onPress={this._onpress}>
                            <Icon name={this.state.iconname} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.login} style={styles.button}>
                        <Text style={styles.btntext}>Login</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row' }}>

                        <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 8 }}>Don't Have An Account?</Text>
                        <TouchableOpacity>

                            <Text style={{ color: '#4653b5', fontSize: 20, fontWeight: 'bold' }} onPress={() => navigate('Sigin')}>Sigin In</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#4653b5', fontSize: 20, fontWeight: 'bold' }} onPress={() => navigate('List')}>User</Text>

                </View>
                {/* <Text style={{ color: '#4653b5', fontSize: 20, fontWeight: 'bold' }} onPress={() =>navigate('Home')}>Home</Text> */}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    Inputbox: {
        width: 300,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingHorizontal: 16,
        marginVertical: 10,
        borderRadius: 25,
        marginVertical: 10

    },
    Inputbox1: {
        width: 300,
        flexDirection: 'row',
       
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingHorizontal: 16,
        marginVertical: 10,
        borderRadius: 25,
        marginVertical: 10

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
        borderRadius: 25,
        paddingVertical: 12,
        marginVertical: 10

    }
})