import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {Icon, Container,Content,Badge} from 'native-base';
export default class Feed extends Component{
    static navigationOptions={
        drawerIcon:({tintColor})=>(
            <Icon name="md-settings" style={{fontSize:24,color:tintColor}}/>
        )
    }
    render(){
        return(

<View>
    <Text>Feed</Text>
</View>
        );
    }
}