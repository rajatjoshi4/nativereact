/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Button,Image, View,SafeAreaView,ScrollView} from 'react-native';
import {Icon} from 'native-base';
import { createSwitchNavigator,createDrawerNavigator,createBottomTabNavigator,createStackNavigator,DrawerItems } from 'react-navigation';
import Home from './android/app/pages/Home';
import Feed from './android/app/pages/Feed';
import Login from './android/app/pages/Login';
import Sigin from './android/app/pages/Sigin';
import Splash from './android/app/pages/Splash';
import Contact from './android/app/pages/Contact';
import Heart from './android/app/pages/Heart';
import About from './android/app/pages/About';
import Userprofile from './android/app/pages/Userprofile';
import Update from './android/app/pages/Update';
import List from './android/app/pages/List';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

 export default class App extends Component{
  
  render(){
    return(


<Appswitchnavigator/>

    );
  }
}


const Setttingtabnavigator=createBottomTabNavigator({
Heart:{screen:Heart},
Contact:{screen:Contact},
About:{screen:About}
},
{
  tabBarOptions:{
    activeTintColor:'red'
    
  }
}
)

const Appdrawer=createDrawerNavigator({ 
Home:Home,
List:List,
Setting:Setttingtabnavigator,

},{
  contentOptions:{
    activeTintColor:'orange',
    activeBackgroundColor:'rgb(247, 223, 91)',
  }
  
});



const Appswitchnavigator=createSwitchNavigator ({
Login:Login,
Sigin:Sigin,
Userprofile:Userprofile,
Update:Update,
List:List,
 Home:{screen:Appdrawer}
});

