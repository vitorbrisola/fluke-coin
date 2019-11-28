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
        //prices = this.updatePrices();
        prices = this.mockPricesData();
        return prices
    };

    updatePrices = () => {
        console.log('Updating Prices Data from server...');

        this.api.get(this.query)
            .then(response => {
                    data = response.data;
                    console.log({'data':data});
                    data = dataPreprocessing(data);
                    console.log({'data_preprocessed':data});
                    this.prices = data;
            })
            .catch(error => { console.log(error.message)});

        return this.prices;
    };

    mockPricesData = () => {
        console.log('Loading Mock Data...');
        
        const newPrices_raw = {
            "BTC":  {"BRL": 32104.5, "EUR": 6801.66, "USD": 7479.99}, 
            "ETH":  {"BRL": 648.51,  "EUR": 137.54,  "USD": 151.2},
            "MOCK": {"BRL": 1.0,     "EUR": 1.0,     "USD": 1.0},
        };
        newPrices = dataPreprocessing(newPrices_raw);
        this.prices = newPrices;

        return newPrices;
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

    for (var crypto in data){
        newData.push({
            id: String(counter++),
            name: String(crypto),
            price: String(data[crypto]["USD"])
        });
    };

    return (newData);
};
