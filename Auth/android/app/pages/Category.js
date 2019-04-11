import React,{Component} from 'react';
import {Text,View,Image} from 'react-native'


export default class Category extends Component
{
    render(){
        return(

            <View style={{ height: 130, width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd' }}>
                                    <View style={{flex:2}}>
                                      <Image source={this.props.imageUri}
                                      style={{flex:1,height:null,width:null,resizeMode:'cover'}}/>
                                    </View>
                                    <View style={{flex:1}}>
                                    <Text style={{textAlign:'center'}}>{this.props.name}</Text>
                                    </View>
                                   

                                </View>
        )
    }
}