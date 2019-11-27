import KEY from '../../private/keys'
import {cryptoConnect} from './connect'

export default class CurrencyManager {
    currencies = [];
    exchanges = [];
    prices = [];

    constructor(currencies=[],exchanges=[]){
        this.api = cryptoConnect();
        this.currencies = currencies;
        this.exchanges = exchanges;
        this.setQuery();
    };

    setQuery(){
        this.query = currenciesPricesQuery(this.currencies,this.exchanges);
    };

    loadPrices = () => {
        prices = this.updatePrices();
        return prices
    };

    updatePrices = () => {
        console.log('Prices loading started');

        this.api.get(this.query)
            .then(response => {
                    data = response.data;
                    console.log({'data':data});
                    data = dataPreprocessing(data);
                    console.log({'data_preprocessed':data});
                    this.prices = data;
            })
            .catch(error => { console.log(error.message)});
        console.log('Prices loading finished')

        return this.prices;
    };



};


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

function currenciesPricesQuery(currencies_names,converted_currencies_names){
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

/*
var fs = require('fs');
function jsonWrite(data){
    var json = JSON.stringify(data);
    

    fs.writeFile('data.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
};*/