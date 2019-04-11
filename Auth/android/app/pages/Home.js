import React, { Component } from 'react';
import { Text, View,Alert,AsyncStorage,Image,TouchableHighlight} from 'react-native';
import { Header, Left, Right, Icon,Badge, Content } from 'native-base';
import Carousel from'react-native-snap-carousel';
export default class Home extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    constructor(){
        super()
  this.state={
      
    activeindex:0,
    carouselitems:[
{
    title:"item1"

},
{
    title:"item2"

},
{
    title:"item3"

},
  ]}        
    }

_renderItem({item,index})
{
    return(

<View>
    <Image source={require('../img/1.jpg')}/>
    <Text>{item.title}</Text>
</View>

    )
}

    render() {
        return (

            <View style={{flex:1,backgroundColor:"blue  "}}>

            <View  style={{height:60,width:'100%',backgroundColor:"gray",padding:10,flexDirection:"row"}}>
               <Icon  style={{marginTop:8}} name="md-menu" size={24} onPress={()=>this.props.navigation.openDrawer()}/>

               <Right>
                   <Icon style={{marginRight:5}} name="md-person" onPress={()=>this.props.navigation.navigate('Userprofile')}/>
               </Right>
            </View>
    <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>

<TouchableHighlight
    onPress={()=>
    this.carousel._snapToItem(this.state.activeindex-1)
    
    }>
    <Icon name="md-arrow-back"/>
</TouchableHighlight>
                      <Carousel
              
              ref={ref=>this.carousel=ref}
              data={this.state.carouselitems}
              sliderWidth={250}
              itemWidth={250}
              renderItem={this._renderItem}
              onSnapToItem={index=>this.setState({activeindex:index})}
              
              />

<TouchableHighlight
    onPress={()=>
    this.carousel._snapToItem(this.state.activeindex+1)
    
    }>
    <Icon name="md-arrow-forward"/>
</TouchableHighlight>
</View>

                </View>       
        );
    }
}