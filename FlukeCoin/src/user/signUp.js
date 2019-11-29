import AsyncStorage from '@react-native-community/async-storage';
import KEY from '../private/keys'

export default userSignUp = async ({userName,password,email}) => {
    // (!) Here you should set your local storage key (!)
    key = userName + KEY.STORAGE;
    value = 'pass-'+password+'-email-'+email;
    
    //console.log('Validation checking...')
    // validation check
    //var isValid = false;
    //isValid = await isValidKeys({key,password,email})
    //    .then(response => {return response})    
    //if(!isValid){return 'Register Failed!'}
    
    
    console.log('Data Storage..')
    // storing datA
    await AsyncStorage.setItem(key,value)
        .then( response => {
            console.log('User has been registered')
            return userName
        })
        .catch(error => {console.log(error.message)});        
}

const isValidKeys = async ({key,password,email}) => {
    console.log('Name Checking')
    // user name duplicate check
    await AsyncStorage.getItem(key)
          .then(res => {
            console.log('Name Checked:'+res)
            if (res !== null) {
                console.log('Not null')
                return(false)
            } else {  
                return(true);
            }
          })
          .catch(err => console.log(err));
   
};