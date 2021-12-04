import React, {Component, useState} from 'react';
import { Text, Button, View , StyleSheet,ScrollView, ImageBackground,Image, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Input, CheckBox} from 'react-native-elements';
import {postProfile} from '../redux/ActionCreators';
import {connect} from 'react-redux';

const image = {uri: "https://i.ibb.co/mX5Z6WY/register-bg.png"};

const mapStateToProps = state => {
  console.log("Entry state", state.profile);
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = {
  postProfile
};

const showAlert = () =>
  Alert.alert(
    "Info Notification",
    "Pet Information Submitted",
    [
      {
        text: "Okay",
        onPress: () => Alert.alert("You may proceed to the Home Page"),
        style: "default",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

class Entry extends Component {
    constructor(props){
      super(props);
      this.state = {
        profileId : '1',
        age : '',
        weight: '',
        medicalCardId: '',
        petColor: '',
        checked : false,
      }
    }

    postPetInfo(){
      console.log("postpetinfo",this.state.profileId,this.state.age,this.state.weight,this.state.medicalCardId,this.state.petColor);
      this.props.postProfile(this.state.profileId,this.state.age,this.state.weight,this.state.medicalCardId,this.state.petColor)
      showAlert();
    }
    
      render(){
        const { navigation } = this.props;
        return (
            <View style={{flex: 1}}>
              <ImageBackground source={image} style={{flex: 1, resizeMode: 'cover'}}>
            <View style={{marginTop:200}}>
             <Text
             style={styles.text}
             >PetLifestyle</Text>
             

             <Input
                placeholder='Enter pet age'
                onChangeText = {age => this.setState({age: age})}
                value= {this.state.age}
                style={styles.InputText}
              />
            <Input
              placeholder="Enter the weight of your pet"
              onChangeText = {weight => this.setState({weight: weight})}
              value = {this.state.weight}
              style={styles.InputText}

            />
            <Input 
              placeholder="Enter the medical id card #"
              onChangeText = {medicalCardId => this.setState({medicalCardId: medicalCardId})}
              value={this.state.medicalCardId}
              style={styles.InputText}

            />
            <Input
              placeholder="enter pet color"
              onChangeText = {petColor => this.setState({petColor:petColor})}
              value={this.state.petColor}
              style={styles.InputText}
            />
            <Button
              title="Submit Information"
              type="outline"
              onPress={() => this.postPetInfo(1,this.state.age,this.state.weight,this.state.medicalCardId,this.state.petColor)}
            />

             <Button
                    title="Go to Home Page"
                  onPress={() => navigation.navigate("Main")}
                  color="#841584"
                >
                </Button>
              </View>
              </ImageBackground>
            </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent : 'center'
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  InputText: {
    color: 'white'
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Entry);