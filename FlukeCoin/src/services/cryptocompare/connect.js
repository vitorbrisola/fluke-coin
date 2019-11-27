import axios from 'axios'
import KEY from '../../private/keys'

console.log('Connecting to server...')
export default CryptoApi = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data/',
});


console.log(KEY.API);
// (!) HERE IS WERE YOU SHOULD SET YOU API KEY (!)
//CryptoApi.defaults.headers.common['Authorization'] = KEY.API;

