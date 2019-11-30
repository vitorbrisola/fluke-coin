/**
 * This class is an abstraction for recovering user data
 * from the data base system. This abstraction makes future
 * changes of data base.
 * 
 * @format
 * @flow
 */

import AsyncStorage from '@react-native-community/async-storage';

export default class userDataManager {}

const credentialsKey = 'fluke-key'

export class Credentials {

    static get = async ({name}) => {
        console.log('On database: ' + name)
        const key = name + credentialsKey
        return await new Promise((resolve, reject) => {
            AsyncStorage.getItem(key)
              .then(res => {
                console.log('db '+key+' response is '+res)
                if(res !== null){res = stringToData(res)}
                resolve(res);
              })
              .catch(err => reject(err));
          });
    }

    static check = async ({name}) => {
        const key = name + credentialsKey
        return await new Promise((resolve, reject) => {
            AsyncStorage.getItem(key)
              .then(res => {
                if( res !== null){resolve(true)}
                else{resolve(false)}
              })
              .catch(err => reject(err));
          });
    }

    static set= async ({name,userData}) => {
        const key = name + credentialsKey
        var value = dataToString(userData)
        return await new Promise((resolve,reject) => {
            AsyncStorage.setItem(key,value)
              .then(res => resolve(true))
              .catch(err => reject(err))
        });
    }

    // future implementation
    // update = async ({name,newData}) => {};

    static remove = async ({name}) => {
        const key = name + credentialsKey
        return await new Promise((resolve,reject) => {
            AsyncStorage.setItem(key)
              .then(res => resolve(true))
              .catch(err => reject(err))
        });
    }
}

function stringToData(string){
    var pwd = string.split('-')[1];
    var eml = string.split('-')[3]
    var data = {
        password: pwd,
        email: eml
    }
    return data;
};

function dataToString(data){
    string = 'pass-'+data.password+'-email-'+data.email;
    return string
};