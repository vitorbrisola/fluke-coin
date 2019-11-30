import React, {Component} from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../user/auth";
import UserManager from '../user/manager'

export default class ProfileScreen extends Component{

  constructor(props){
    super(props);
    console.log('Profile..')

    this.state = {
      userName: 'Carregando...',
      userInitials: 'VB',
      manager: null,
    }
    this.setManager()
  }

  setManager = async () => {
    userManager = new UserManager()
    await userManager.get()
      .then(name => {
        console.log('Profile name:'+name)
        initials = getInitials(name)
        this.setState({userName:name,userInitials:initials,manager:userManager})
      })
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
          onPress={() => onSignOut().then(() => this.props.navigation.navigate("SignedOut"))}
        />
      </Card>
  </View>
    );
  }

};


function getInitials(name){
  var names = name.split()
  initials = ''
  for (var word of names){
    initials += word[0]
  }
  return initials;
}