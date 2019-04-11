import React,{Component} from 'react';
import {Text,View,Modal,TouchableHighlight,StyleSheet} from 'react-native';
import {Icon} from 'native-base';

export default class  About extends Component{
constructor(){
  super();

}
static navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
      <Icon
          name="md-information"
          color={tintColor}
          size={24}
      />
  )
}
  render(){
    return(

<View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
<Text>under devlopment</Text>

</View>

    );
  }
}

 
