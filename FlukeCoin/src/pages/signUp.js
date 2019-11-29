import React,{Component} from "react";
import { View,TextInput } from "react-native";
import { Card, Button, Input } from "react-native-elements";
import { onSignIn } from "../user/auth";
import userSignUp from '../user/signUp'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class RegisterScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: null,
      pass: null,
      email: null
    }
  }

  changeUserInfo = async (infoType,info) => {
    console.log(infoType+':'+info)
    if(infoType == 'name') {await this.setState({name: info})
    }else if(infoType == 'email') {await this.setState({email: info})
    }else if(infoType == 'pass') {await this.setState({pass: info})};
    console.log('name_state:'+this.state.name)
  }

  confirmUserPassword = (passwordCheck) => {
    if(passwordCheck == this.state.pass){
      console.log('correct password')
    }
  }
  


  userRegistration = async () => {
    // data pre validation: check for empty fields
    if(!isUserInfoValid(this.state)){
      console.log('Dados invalidos')
      return false
    }else{console.log('Dados validos')}
   
    await userSignUp({
      userName:this.state.name,
      password:this.state.pass,
      email:this.state.email
    })
      .then((message)=>{console.log(message)})
    
    onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
    
    return true
    
  }

  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>

          <Input
            label='User'
            placeholder='User name...'
            onChangeText={text => this.changeUserInfo('name',text)}
          />
          <Input
            label='Email'
            placeholder='Email address...'
            onChangeText={text => this.changeUserInfo('email',text)}
          />
          <Input
            secureTextEntry
            label='Password'
            placeholder='Password...'
            onChangeText={text => this.changeUserInfo('pass',text)}
          />
          <Input
            secureTextEntry
            label='Confirm Password'
            placeholder='Confirm Password...'
            onChangeText={text => this.confirmUserPassword(text)}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={this.userRegistration}
          />
        </Card>
    </View>
    );
  };
};


function isUserInfoValid({name,email,pass}){
  return (name !== null & email !== null & pass !== null )
};