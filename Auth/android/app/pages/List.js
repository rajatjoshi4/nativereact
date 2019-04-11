import React,{Component} from 'react';
import {View,Text,FlatList,Alert,RefreshControl,Image,ToastAndroid} from 'react-native';
import {Icon} from'native-base';
import * as Animatable from 'react-native-animatable';
export default class List extends Component{
constructor(props){
    super(props)
    this.state={
        data:[],
        refreshing:false
    }
}

componentDidMount(){
    this.load();
}


load=()=>{
  
    const url='http://searchkero.com/rajat/testapi/index.php/Home/show';
    fetch(url)
    .then((res)=>res.json())
    .then(res=>{
        this.setState({data:res.data})
    })
    .catch((error)=>{
        Alert.alert("some problem")
    })
    

}
_onRefresh(){
    this.setState({refreshing:true})
    this.load();
    // .then(()=>{
      this.setState({refreshing:false})
    // })

}

itemSpreator=()=>{
    return(
<View style={{height:10,borderBottomWidth:1,borderBottomColor:"gray"}}></View>


    )
}


    render(){
        const {navigate}=this.props.navigation;
        return(

<View style={{flex:1}}>

                <View style={{ height: 60, width: '100%', backgroundColor: "gray", padding: 16 }}>
     
                    <Icon name="md-arrow-back"  onPress={() => navigate('Home')} />
              
                </View>
<FlatList
data={this.state.data}
keyExtractor={i=>i.name}
renderItem={({item})=>
<Animatable.View
animation="slideInLeft"
style={{height:40,width:'94%',backgroundColor:'lightskyblue',borderBottomWidth:4,borderRadius:5,marginHorizontal:20,marginTop:10}}>
<Text onPress={()=>ToastAndroid.show(item.name,ToastAndroid.SHORT)} style={{fontSize:24,fontWeight:'600',textAlign:'center'}}>{item.name}</Text>
</Animatable.View>
}
refreshControl={
    <RefreshControl
    refreshing={this.state.refreshing}
    onRefresh={this._onRefresh.bind(this)}
    
    />
}
renderItemSpreator={this.renderItem}
/>
</View>

        );
    }
}

