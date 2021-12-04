import * as React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import { Card, Icon, Image } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    console.log("Profile state:",state);
    //console.log(state.profile.profile.age);
    return {
      profile: state.profile
    }
  }


export const ProfileHeader = () => {

    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "row",
            marginTop: 60
          }]}>
            <Text>My Pets</Text>
            <View style={styles.rightIcons}>
                <Icon
                    name='info-circle'
                    type='font-awesome'
                />
                <Text>  </Text>
                <Icon
                    name='home'
                    type='font-awesome'
                />
            </View>
        </View>
    );
}

export const ProfileIcons = () => {
    return (
        <View style={[styles.stackIcon, {
            // Try setting `flexDirection` to `"row"`.
            marginLeft:75
          }]}> 
          <Card containerStyle={{borderRadius:50}}>
              <Image
                style={{width:200, height:300}}
                source={{uri: 'https://th.bing.com/th/id/OIP.ZQAQ-wPMInzFAJ68zM1uNwAAAA?pid=ImgDet&rs=1/'}}
              />
          </Card>
        </View>
    );
}

class Profile extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log("props",this.props.profile.profile);
        
    return(
        <View style={styles.background}>
        <ProfileHeader />
        <ProfileIcons />
        <View>
            <Text style={{alignSelf:'center',color:'white',fontSize:24}}>Pet Info</Text>
            <Card
            containerStyle={{backgroundColor:'darkorange',height:300,borderRadius:20,width:415,margin:0,padding:0}}
            >
            <View style={{flexDirection:'row',alignSelf:'center'}}>
                    <Card containerStyle={{borderRadius:20, width:80,height:75,alignItems:'center',margin:5}}>
                        <Text>Age</Text>
                        <Text style={styles.text}>{this.props.profile.profile.age}</Text>
                    </Card>
                    <Card containerStyle={{borderRadius:20, width:80,height:75,alignItems:'center',margin:5}}>
                        <Text>Weight</Text>
                        <Text style={styles.text}>{this.props.profile.profile.weight}</Text>
                    </Card>
                    <Card containerStyle={{borderRadius:20, width:80,height:75,alignItems:'center',margin:5}}>
                        <Text>Color</Text>
                        <Text style={styles.text}>{this.props.profile.profile.petColor}</Text>
                    </Card>
                    <Card containerStyle={{borderRadius:20, width:100,height:75,alignItems:'center',margin:5}}>
                        <Text style={{marginLeft:-17}}>Medical Card</Text>
                        <Text style={styles.text}>{this.props.profile.profile.medicalCardId}</Text>
                    </Card>
            </View>

            <View>
                <Text style={{alignSelf:'center',color:'white',fontSize:24}}>Appointments</Text>
                <Card
                containerStyle={{borderRadius:50}}
                >
                    <Text>Veterinary</Text>
                </Card>
                <Card
                containerStyle={{borderRadius:50}}
                >
                    <Text>Grooming</Text>
                </Card>
            </View>
            </Card>

        </View>
        </View>
    );
    }
}



const styles = StyleSheet.create({
    background: {
        backgroundColor: 'orange',
        flex: 1
    },
    text: {
        marginTop: 60,
        marginLeft: 20,
        color: 'white',
        fontSize: 20
    },
    container: {
        flex: 1,
        padding: 20,
    },
    headerTop: {
        marginTop: 40
    },
    rightIcons: {
        marginLeft: 250,
        flexDirection: 'row'
    },
    stackIcon: {
        flexDirection: 'row'
    },
    cardRow: {
        flexDirection:'row'
    },
    text: {
        backgroundColor:'lightgrey'
    }
})
export default connect(mapStateToProps)(Profile);