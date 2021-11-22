import React, {useState} from 'react';
import {Dimensions, StyleSheet, Image, Text, View,SafeAreaView,ScrollView} from 'react-native';
import {SearchBar, Card, Avatar, ListItem, Button, Icon, Tile,FlatList,Input} from 'react-native-elements';
import {postProfile} from '../redux/ActionCreators';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  console.log("Homescreen state", state.profile);
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = {
  postProfile
};


const HomeScreenTopDisplay = () => {
  return (
        <>
        <Tile
          featured
          imageSrc={{uri: 'https://i.ibb.co/wJnp6ZK/petimg1.jpg'}}
          imageContainerStyle={{width:350, height:200,borderRadius:30}}
          containerStyle={{marginLeft:25,marginTop:5}}
          />
          <Tile
          featured
          imageSrc={{uri: 'https://i.ibb.co/wJnp6ZK/petimg1.jpg'}}
          imageContainerStyle={{width:350, height:200,borderRadius:30}}
          containerStyle={{marginLeft:25}}
          />

        </>
  );
}

const AvatarScreen = () => {
  return (
    <>
      <Avatar
      containerStyle={{marginLeft:125}}
      rounded
      size="xlarge"
      source={{
        uri:
          'https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes.png',
      }}
    />
  </>
  )
}


class AddPetInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profileId: '1',
      age: ' '
    };
  }

  postPetInfo(){
    console.log("postpetinfo",1,this.state.age);
    this.props.postProfile('1',this.state.age)
  }
  
  render(){
    return (
      <>  
      <ScrollView>
              <View>
              <AvatarScreen />
              <HomeScreenTopDisplay />

              <Input
                placeholder='Enter pet age'
                onChangeText = {age => this.setState({age: age})}
                value= {this.state.age}
              />
            <Button
              title="Outline button"
              type="outline"
              onPress={() => this.postPetInfo(1,this.state.age)}
            />
          
              </View>
            </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
    resizeMode: 'contain',
  },
  textCenter: {
    textAlign: 'center',
  },
  left: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 15,
  },
  right: {
    backgroundColor: '#fff',
  },
  middle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    height: 170,
    width: 100
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPetInfo);