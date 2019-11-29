import React,{Component} from "react";
import { View } from "react-native";
import { Card, Button, Input} from "react-native-elements";
import { onSignIn } from "../user/auth";

export default class LoginScreen extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <Input
            label='User'
            placeholder='User name...'
          />
          <Input
            secureTextEntry
            label='Password'
            placeholder='Password...'
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN IN"
            onPress={() => {
              onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
            }}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={() => this.props.navigation.navigate("SignUp")}
          />
        </Card>
      </View>
    );
  }
};
