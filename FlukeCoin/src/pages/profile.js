import React, {Component} from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../user/auth";


export default class ProfileScreen extends Component{

  constructor(props){
    super(props);
    console.log('Profile..')

    this.state = {
      userName: 'Vitor Brisola',
      userInitials: 'VB'
    }
  }

  render(){
    return(
    <View style={{ paddingVertical: 20 }}>
      <Card title={this.state.userName}>
        <View
          style={{
            backgroundColor: "#bcbec1",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 40,
            alignSelf: "center",
            marginBottom: 20
          }}
        >
          <Text style={{ color: "white", fontSize: 28 }}>{this.state.userInitials}</Text>
        </View>
        <Button
          backgroundColor="#03A9F4"
          title="SIGN OUT"
          onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
        />
      </Card>
  </View>
    );
  }

};


