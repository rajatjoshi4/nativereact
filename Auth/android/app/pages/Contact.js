import React, { Component } from 'react';
import { Text, View, Animated, Image, Easing,StyleSheet } from 'react-native';
import { Icon, Container, Content, Badge, Header, Right, Left } from 'native-base';
export default class Contact extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="md-contact"
                color={tintColor}
                size={24}
            />
        )
    }
    constructor() {
        super();
      this.state={
        spinValue:new Animated.Value(0),
      }
   
      
   
    }

  
    
   
    spin =()=> {
      
        Animated.timing(
          this.state.spinValue,
          {
            toValue: 100,
            duration: 1000,
            easing: Easing.linear
          }
        ).start(()=>{
          Animated.timing(
            this.state.spinValue,{
toValue:0,
duration:0

          }).start()
        })
      }

    render () {
        const spin = this.state.spinValue.interpolate({
          inputRange: [0, 100],
          outputRange: ['0deg', '360deg']
        })
        return (
          <View >
            <Animated.Image
        
              style ={{
                width: 227,
                height: 200,
                transform: [{rotate: spin}] }}
                source={require('../img/1.jpg')}
            />

            <Text onPress={this.spin} style={{backgroundColor:'blue',fontSize:20}}>Animate</Text>
          </View>
        )

    }
}