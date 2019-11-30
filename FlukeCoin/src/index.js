/**
 * @format
 */

import React, {Component} from 'react';
//import {AppRegistry} from 'react-native';
import { isSignedIn } from "./user/auth";
import rootNavigator from './router';
import userManager from './user/manager'

export default class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          signedIn: false,
          checkedSignIn: false
        };
    };


    componentDidMount() {
      console.log(`APP Started`);
      isSignedIn()
        .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
        .catch(err => alert("An error occurred"));
    }

    render() {
        const { checkedSignIn, signedIn } = this.state;
        
        console.log(`APP Login, userSignIn = ${signedIn}`);
        // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
        if (!checkedSignIn) {
          return null;
        }
    
        //const Layout = rootNavigator
        const Layout = rootNavigator(signedIn);
        return <Layout />;
    }

};


//export default rootNavigator;
