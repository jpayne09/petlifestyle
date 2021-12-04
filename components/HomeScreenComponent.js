import React, {Component, useState} from 'react';
import {Dimensions, StyleSheet, Image, Text, View,SafeAreaView,ScrollView} from 'react-native';
import {SearchBar, Card, Avatar, ListItem, Button, Icon, Tile,FlatList,Input} from 'react-native-elements';
import {postProfile} from '../redux/ActionCreators';
import {connect} from 'react-redux';
import * as rssParser from 'react-native-rss-parser';

const mapStateToProps = state => {
  console.log("Homescreen state", state.profile);
  console.log("Check", this.state.checked);

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
        <Text style={{marginTop:20,fontSize:24, alignSelf:'center'}}>Pet Care Specials</Text>
        <Tile
          featured
          imageSrc={{uri: 'https://i.ibb.co/wJnp6ZK/petimg1.jpg'}}
          imageContainerStyle={{width:350, height:200,borderRadius:30}}
          containerStyle={{marginLeft:25,marginTop:5}}
          />
        </>
  );
}

const AvatarScreen = () => {
  return (
    <>
      <Text style={{fontSize:24,alignSelf:'center'}}>Welcome to PetLifestyle</Text>
      <Avatar
      containerStyle={{marginLeft:130,marginTop:50}}
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



class Petfeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      feed: [],
      title: [],
    }
  }

    componentDidMount(){
      this.RSS();
    }
    RSS() {
      return fetch('https://www.rover.com/blog/feed/?x=1')
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) =>  { 
          this.setState(prevState => ({
              ...prevState,
              feed: rss.items
          }));
      })
    }


  
    render(){
    
      console.log("Feed", this.state.feed.length);
      let title1 = [];
      let description1 = [];
      let items = [];

      function Feed(title,description){
        this.title = title;
        this.description = description;
      }


     for(var i=0; i < this.state.feed.length; i++){
       //console.log(this.state.feed[i].title);
       //title1.push(this.state.feed[i].title);
       let test = this.state.feed[i].description;
      let result = test.replace(/(<([^>]+)>)/ig, "");
       //description1.push(result);
      //console.log(JSON.parse(JSON.stringify(result)));
      items[i] = new Feed(this.state.feed[i].title, result)      
    
    }
     
      return(
        <View style={styles.container}>
        <Text style={{marginTop:20,fontSize:24, alignSelf:'center'}}>Pet Articles</Text>
          {items.map((item,index) => 
            <View>
              <Card>
                <Card.Title>{item.title}</Card.Title>
                <Text>{item.description}</Text>
              </Card>
            </View>
          
          )}
      </View>
      )
    }
}
export default function Home() {
  return (
    <>
    <ScrollView>
    <AvatarScreen />
    <HomeScreenTopDisplay />
    <Petfeed />
    </ScrollView>
    </>
  )
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
