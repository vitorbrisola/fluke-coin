/**
 * Abstraction for user credential verification and authorization
 * for login and registering
 * 
 * @format
 * @flow
 */

import AsyncStorage from '@react-native-community/async-storage';
import {Credentials} from './dataManager'
import UserManager from './manager'

export const USER_KEY = "auth-demo-key";

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, "true");

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {  
          resolve(false);
        }
      })
      .catch(err => removeItem(err));
  });
};

export const Login = async ({name,password}) => {
  return await new Promise((resolve,reject) => {
    Credentials.get({name})
      .then(res => {
        if(res !== null && checkPassword(res.password,password)){
          var message = 'User successfully found!'
          console.log('User successfully found!: '+name)

          // current user setting
          var currentUser = new UserManager()
          currentUser.set({name:name})

          res = {validation:true,message:message}
          resolve(res)
        }else{
          res = {validation:false,message:'Invalid Credentials'}
          resolve(res)
        }
      })
      .catch(err => reject(err))
  });    
};

function checkPassword(real,entry){
  return (real == entry);
}

export const Register = ({name,password,aditionalUserData}) => {

};