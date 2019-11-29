import AsyncStorage from '@react-native-community/async-storage';
import KEY from '../private/keys'

export default userSignIn = async ({ userName, password }) =>{
    // (!) Here you should set your local storage key (!)
    key = userName + KEY.STORAGE;

    return await new Promise((resolve,reject) => {
      console.log(key)
      isOnSystem({key,password})
        .then(res => resolve(res))
        .catch(err => reject(err))
    });

};

const isOnSystem = async ({key,password}) => {
  return await new Promise((resolve, reject) => {
    
    AsyncStorage.getItem(key)
      .then(res => {
        console.log(res)
        if (res !== null) {
          var realPass = getPasswordFromValue(res)
          if(isSamePassword(realPass,password)){resolve(true);}
          else{resolve(false)}
        } else {  
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

function getPasswordFromValue(value){
  var pwd = value.split('-')[1];
  console.log(pwd)
  return pwd;
};

function isSamePassword(realPassword,testPassword){
  return (realPassword==testPassword);
};
