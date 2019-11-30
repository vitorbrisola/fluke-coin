import AsyncStorage from '@react-native-community/async-storage';

const currentUserKey = 'currentUserKey'

export default class UserManager {
    
    constructor(){
        this.name = null
        this.coins = ['BTC','MOCK']
    }

    getCoins = () => {
        return this.coins;
    }

    get = async () => {
        if(this.name == null){
            console.log('Loading from data base...')
            await CurrentUser.get()
                .then(res => {
                    console.log('db res:'+res)
                    this.name=res});
        }
        console.log('[GET]Current User: '+this.name)
        console.log(this.name)
        return this.name;
    }

    set = async ({name}) => {
        await CurrentUser.set({name:name});
        this.name = name;
    };

};


export class CurrentUser {

    static get = async () => {
        return await new Promise((resolve, reject) => {
            AsyncStorage.getItem(currentUserKey)
              .then(res => {
                console.log(res);
                resolve(res);
              })
              .catch(err => reject(err));
        });
    }

    static set = async ({name}) =>{
        return await new Promise((resolve,reject) => {
            AsyncStorage.setItem(currentUserKey,name)
              .then(res => resolve(true))
              .catch(err => reject(err))
        });
    }

    static remove = () => {
        return new Promise((resolve,reject) => {
            AsyncStorage.setItem(currentUserKey)
              .then(res => resolve(true))
              .catch(err => reject(err))
        });
    }

}


