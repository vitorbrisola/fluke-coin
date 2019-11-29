import AsyncStorage from '@react-native-community/async-storage';
import KEY from '../private/keys'

export default ({userName,password,email}) => {
    // (!) Here you should set your local storage key (!)
    key = str(userName) + KEY.STORAGE;
    value = 'pass-'+str(password)+'-email-'+str(email);
    
    // validation check
    isValid,message = isValidKeys({key,password,email});
    if(!isValid){return message}
    
    // storing data
    try {
      AsyncStorage.setItem(key,value);
      return userName;
    } catch (error) {
        console.log(error.message);
    }
}

const isValidKeys = ({key,password,email}) => {
    // user name duplicate check
    try {
        const value = AsyncStorage.getItem(key);
        if( value != null){return false,'Invalid User Name!'}
    } catch (error) {
        console.log(error.message);
    }
    // email name duplicate check
    try {
        const value = AsyncStorage.getItem(email);
        if( value != null){return false,'This email has already been registered!'}
    } catch (error) {
        console.log(error.message);
    }
       
    return true,'success';
};