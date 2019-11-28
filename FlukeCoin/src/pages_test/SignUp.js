import React from "react";
import { View,Text } from "react-native";
import { Card, Button, Input } from "react-native-elements";
import { onSignIn } from "../user/auth";

const SignUp = ({navigation}) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <Input
        label='User'
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
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }}
      />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="Sign In"
        onPress={() => navigation.navigate("SignIn")}
      />
    </Card>
  </View>
);

export default SignUp;