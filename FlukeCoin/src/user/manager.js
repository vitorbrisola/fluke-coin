import AsyncStorage from '@react-native-community/async-storage';

const currentUserKey = 'currentUserKey'

export default class UserManager {
    
    constructor(){
        this.name = null
    }

    get = async () => {
        if(this.name == null){
            console.log('Loading from data base...')
            await this.getFromDataBase()
                .then(res => {
                    console.log('db res:'+res)
                    this.name=res});
        }
        console.log('[GET]Current User: '+this.name)
        console.log(this.name)
        return this.name;
    }

    getFromDataBase = async () => {
        return await new Promise((resolve, reject) => {
            AsyncStorage.getItem(currentUserKey)
              .then(res => {
                console.log(res);
                resolve(res);
              })
              .catch(err => reject(err));
          });
    }

    set = async ({name}) => {
        await this.setOnDataBase({name:name});
        this.name = name;
    };

    setOnDataBase = async ({name}) =>{
        console.log('[SET DB]Current User: '+name)
        return await new Promise((resolve,reject) => {
            AsyncStorage.setItem(currentUserKey,name)
              .then(res => resolve(true))
              .catch(err => reject(err))
        });
    }


};


