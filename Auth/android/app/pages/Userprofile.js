import React, { Component } from 'react';
import { Text, View, Button, FlatList, ActivityIndicator,Platform, AsyncStorage, Alert,Image, ListItem, List,Animated, TextInput, Content, Card, CardItem, TouchableOpacity } from 'react-native';
import { Icon,Right } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
const options = {
    title: 'My App',
    takePhotoButtonTitle: "take photo from camera",
    chooseFromLibraryButtonTitle: "Choose photo from library"
}


const createFormData=(photo,body)=>{
   
    const data = new FormData();
  

    data.append("photo", {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    
    });
  

    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });
  

    return data;
  };


export default class Userprofile extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            loading: true,
            value: '',
            avatarSource: null,
            pic: null
        }
    }


    componentWillMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000)
    }

    componentDidMount = () => {
        this.show();
    }
    show = async () => {
        const value = await AsyncStorage.getItem('user_id')
        if (value == null) {
            Alert.alert('id not set');
        }
        else {

            this.load_data(value);
        }
    }

    show1 = async () => {
        const value = await AsyncStorage.getItem('user_id')
        if (value == null) {
            Alert.alert('id not set');
        }
        else {

            this.upload_image(value);
        
        }
    }

    load_data = (value) => {

        const url = 'http://searchkero.com/rajat/testapi/index.php/Home/profile?id='+value;
        fetch(url)
        
            .then((res) => res.json())
            .then(res => {
                this.setState({ data: res.data });

            })
            .catch((error) => {
                Alert.alert(error);
            })

    }


    Myfun = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                    pic: response
                });
            }
        })

    }

    upload_image = (value) => {


        fetch("http://searchkero.com/rajat/testapi/index.php/Home/image_insert", {
            method: "POST",
            body: createFormData(this.state.pic, {id: value})
        })
        .then(response => response.json())
        .then(response => {

            console.log("upload succes", response);
            alert("Upload success!");
            
        })
        .catch(error => {
        
            console.log("upload error", error);
            alert(error);
        });

            
        this.setState({pic:null})
       
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={{ height: 60, width: '100%', backgroundColor: "gray", padding: 16 }}>
     
                    <Icon name="md-arrow-back"  onPress={() => navigate('Home')} />
              
                </View>
                {this.state.loading ?
                    <ActivityIndicator size='large' color="red" />
                    :

                    <FlatList
                        data={this.state.data}

                        renderItem={({ item }) =>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                style={{height:80,width:80}}
                                 source={{uri:item.image}}/>
                                 <Text>{item.name}</Text>
                            </View>


                        }
                        keyExtractor={item => item.name}
                    />


                }
                <View style={{
                    width: 150,
                    borderRadius: 20,
                    backgroundColor: '#969696',
                    paddingVertical: 12,
                    marginVertical: 10
                }}>
                    <Text style={{ fontSize: 14, fontWeight: "500", textAlign: 'center' }} onPress={() => navigate('Update')}>Edit </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={this.Myfun}>
                    <View style={{ width: 150, borderRadius: 10, backgroundColor: 'white', paddingVertical: 12, marginHorizontal: 10,marginTop:10}}>
                        <Text style={{ fontSize: 20, fontWeight: '500', textAlign: 'center' }}>Add Photo</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={this.show1}>
                    <View style={{ width: 150, borderRadius: 10, backgroundColor: 'white', paddingVertical: 12, marginHorizontal: 10,marginTop:10 }}>
                        <Text style={{ fontSize: 20, fontWeight: '500', textAlign: 'center' }}>Upload</Text>
                    </View>
                </TouchableOpacity>
                </View>



            </View>
        );
    }
}