import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
export default class Splash extends Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        },2000)
    }


    render() {
          const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {this.state.loading ?

                    <View style={{ backgroundColor: '#455a64', height: '100%', width: '100%', justifyContent: 'center', alignItems: "center" }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                style={{ height: 150, width: 130, marginTop: 40 }}
                                source={require('../img/1.jpg')} />
                        </View>

                    </View>
                    :
                    navigate('Login')

    
                // <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    //     <Text style={{ fontSize: 24, color: '#ffffff', marginBottom: 10 }}>Login</Text>


                    //     <TextInput
                    //         style={styles.Inputbox}
                    //         placeholderTextColor="#ffffff"

                    //         placeholder="Enter Email" />



                    //     <TextInput
                    //         style={styles.Inputbox}
                    //         placeholderTextColor="#ffffff"

                    //         placeholder="Enter password" />


                    //     <TouchableOpacity style={styles.button}>
                    //         <Text style={styles.btntext}>Login</Text>
                    //     </TouchableOpacity>

                    //     <View style={{ flexDirection: 'row' }}>

                    //         <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', paddingHorizontal: 8 }}>Don't Have An Account?</Text>
                    //         <TouchableOpacity>

                    //             <Text style={{ color: '#4653b5', fontSize: 20, fontWeight: 'bold' }} onPress={() => navigate('Sigin')}>Sigin In</Text>
                    //         </TouchableOpacity>
                    //     </View>


                    // </View>

                }
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//     Inputbox: {
//         width: 300,
//         backgroundColor: 'rgba(255,255,255,0.3)',
//         paddingHorizontal: 16,
//         marginVertical: 10,
//         borderRadius: 25,
//         marginVertical: 10

//     },
//     btntext: {
//         fontSize: 16,
//         fontWeight: '500',
//         color: '#ffffff',
//         textAlign: 'center'

//     },
//     button: {
//         width: 300,
//         backgroundColor: '#8e086a',
//         borderRadius: 25,
//         paddingVertical: 12,
//         marginVertical: 10

//     }
// })