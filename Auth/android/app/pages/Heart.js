import React, { Component } from 'react';
import { Text, View, TextInput, Platform, StatusBar, ScrollView,Image,Keyboard,Alert} from 'react-native';
import { Icon, Container, Content, Badge, Header, Right, Left } from 'native-base';
import * as Animatable from 'react-native-animatable';
import Category from './Category';
export default class Heart extends Component {
constructor(){
    super()
    this.state={
        searchfocused:false,
    }
}
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="md-home"
                color={tintColor}
                size={24}
            />
        )
    }

    componentDidMount(){
        this.KeyboardDidShow=Keyboard.addListener('keyboardDidShow',this.KeyboardDidShow),
        this.keyboardDidHide=Keyboard.addListener('keyboardDidHide',this.keyboardDidHide)
    }
KeyboardDidShow=()=>{
this.setState({searchfocused:true});
}
keyboardDidHide=()=>{
    this.setState({searchfocused:false});

}

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 70, backgroundColor: 'blue', borderBottomWidth: 1, borderBottomColor: '#dddddd', justifyContent: 'center' }}>
                    <Animatable.View animation="slideInRight" duration={500} style={{ height: 40, width: 300, backgroundColor: 'white', marginLeft: 20, elevation: 1, flexDirection: 'row' }}>
                      <Animatable.View animation={this.state.searchfocused?"fadeInLeft":"fadeInRight"}>
                        <Icon name= {this.state.searchfocused?"md-arrow-back":"md-search"}  style={{ marginTop: 4, marginLeft: 8 }} />
                        </Animatable.View>
                        <TextInput placeholder="Enter city" width={200} placeholderTextColor="grey" style={{ marginLeft: 13, fontWeight: '700',flex:1 }} />
                    </Animatable.View>
                </View>
                    <Animatable.View style={{ backgroundColor:this.state.searchfocused?'rgba(0,0,0,0.3)':'white'}}>

                    <ScrollView scrollEventThrottle={16}>
                    <View style={{ flex: 1, padding: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>What can we Help You?</Text>

                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                                
                            <Category imageUri={require('../img/1.jpg')}
                            name="Home"/>
                            <Category imageUri={require('../img/1.jpg')}
                            name="Home"/>
                            <Category imageUri={require('../img/1.jpg')}
                            name="Mkaan"/>
                            <Category imageUri={require('../img/1.jpg')}
                            name="Home"/>
                            <Category imageUri={require('../img/1.jpg')}
                            name="Ghr"/>

                            
                            </ScrollView>
                        </View> 


                    </View>
                </ScrollView>
                    </Animatable.View>
         

            </View>
        );
    }
}