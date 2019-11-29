import React,{Component} from "react";
import { View } from "react-native";
import { Card, Button, Input } from "react-native-elements";
import { onSignIn } from "../user/auth";
import {userSignUp } from '../user/signUp'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class RegisterScreen extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <Input
            label='Usereeeeee'
            placeholder='User name...'
          />
          <Input
            label='Email'
            placeholder='Email address...'

          />
          <Input
            secureTextEntry
            label='Password'
            placeholder='Password...'
          />
          <Input
            secureTextEntry
            label='Confirm Password'
            placeholder='Confirm Password...'
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={() => {
              onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
            }}
          />
        </Card>
    </View>
    );
  };
};