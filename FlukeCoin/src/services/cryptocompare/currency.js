import KEY from '../../private/keys'
import {CryptoApi,cryptoConnect} from './connect'




function listToString(names){
    string = '';
    for (var name of names){
        console.log(name)
        string += name + ',';
    };
    // remove last coma
    string = string.substring(0,string.length - 1);
    return string;
};

export default function currenciesPricesQuery(currencies_names,converted_currencies_names){
    var currencies_list = '';
    var converted_currencies_list = '';

    currencies_list = listToString(currencies_names)

    converted_currencies_list = listToString(converted_currencies_names)

    query = `pricemulti?fsyms=${currencies_list}&tsyms=${converted_currencies_list}`;
    // authentication
    query += `&api_key=${KEY.API}`

    return query;
};

function dataPreprocessing(data){
    newData = new Array;
    counter = 0;
    console.log({"NewData": newData,"data":data});

    for (var crypto in data){

        newData.push({
            id: String(counter++),
            name: String(crypto),
            price: String(data[crypto]["USD"])
        });
    };
    console.log({"NewData": newData})

    return (newData);
};



