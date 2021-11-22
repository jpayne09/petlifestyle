import React, {Component} from 'react';
import { Text, Button, View , StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Entry({ navigation: { navigate } }) {
        return (

            <>
            <View style={{marginTop:200}}>
             <Text>First screen</Text>
             <Button
                    title="Press"
                  onPress={() => navigate("Main")}
                  color="#841584"
                >
                </Button>
            </View>
            </>
        );
}

export default Entry;