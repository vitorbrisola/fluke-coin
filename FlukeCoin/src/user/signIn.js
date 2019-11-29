import AsyncStorage from '@react-native-community/async-storage';
import KEY from '../private/keys'

export default ({ userName, password }) =>{
    // (!) Here you should set your local storage key (!)
    key = str(userName) + KEY.STORAGE;
    
    try {
        const value = AsyncStorage.getItem(key)
        if(value == null) {return false;};
        realPassword = getPasswordFromValue(value);
        if(!isSamePassword(realPassword,password)){return false;};
        return true;
      } catch(error) {
        console.log(error.message);
    }
};

function getPasswordFromValue(value){
  password = value.split('-')[1];
  return password;
};

function isSamePassword(realPassword,testPassword){
  return (realPassword==testPassword);
};
