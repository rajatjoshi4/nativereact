import React, { Component } from 'react';
import { Text, View, AsyncStorage, TextInput, Alert, StyleSheet, TouchableOpacity,Keyboard } from 'react-native';
import { Icon, Container, Content, Badge, Header, Right, Left, Button } from 'native-base';
export default class Update extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            name: '',
            email: '',
            password: ''
        }
    }

    user = async () => {
        let value = await AsyncStorage.getItem('user_id')
        if (value == null) {
            Alert.alert("id not set")
        }
        else {
            this.update(value);
        }
    }

    update = (value) => {
        const { name, email, password } = this.state;
        if (name == '' || email == '' || password == '') {

            Alert.alert("fill fields");
        }
        else {
            const url = 'http://searchkero.com/rajat/testapi/index.php/Home/update?id=' + value + '&name=' + name + '&email=' + email + '&password=' + password;
            fetch(url)
                .then((res) => res.json())
                .then(res => {
                    this.setState({ data: res.data });
                    Alert.alert(res.message);
                })
                .catch((error) => {
                    Alert.alert(error);
                })

        }
Keyboard.dismiss();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: 'skyblue' }}>

                <View style={{height: 60, width: '100%', backgroundColor: "gray", padding: 16 }}>
                   <Icon name="md-arrow-back" size={24} onPress={() => navigate('Userprofile')} />
                 
                </View>

                <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                        style={styles.inputbox}
                        placeholder="Enter name"
                        placeholderTextColor="#ffffff"
                        onChangeText={name => this.setState({ name })} />

                    <TextInput
                        style={styles.inputbox}
                        placeholder="Enter email"
                        placeholderTextColor="#ffffff"
                        onChangeText={email => this.setState({ email })}
                    />

                    <TextInput
                        style={styles.inputbox}
                        placeholder="Enter password"
                        placeholderTextColor="#ffffff"
                        onChangeText={password => this.setState({ password })}
                    />
                    <TouchableOpacity
                        onPress={this.user}
                        style={{
                            width: 300, backgroundColor: 'lightgreen', borderRadius: 35,
                            paddingVertical: 12,
                            marginVertical: 10,
                        }}>
                        <Text style={{ fontWeight: '900', textAlign: 'center' }}>update</Text>
                    </TouchableOpacity>
                </View>




            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputbox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 15,
        paddingHorizontal: 16,
        marginVertical: 10,
    }


})