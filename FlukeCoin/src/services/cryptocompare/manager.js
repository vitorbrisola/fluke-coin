import KEY from '../../private/keys'
import {cryptoConnect} from './connect'

export default class CurrencyManager {
    prices = [];

    constructor(currencies=[],exchanges=[]){
        this.api = cryptoConnect();
        this.currencies = currencies;
        this.exchanges = exchanges;
        this.prices = []
        this.setQuery();
    };

    setQuery(){
        this.query = currenciesPricesQuery(this.currencies,this.exchanges);
        //this.query = topListQuery();
        console.log(this.query)
    };

    loadPrices = () => {
        prices = this.updatePrices();
        //prices = this.mockPricesData();
        return prices
    };

    updatePrices = async () => {
        //console.log('Updating Prices Data from server...');

        await this.api.get(this.query)
            .then(response => {
                data = response.data;
                console.log(data)
                data = dataPreprocessing(data);
                this.prices = data;
            })
            .catch(error => { console.log(error.message)});

        return this.prices;
    };


    mockPricesData = () => {
        console.log('Loading Mock Data...');
        var rawPrices = {}
        for (var currency of this.currencies){
            rawPrices[currency] = mockPrices[currency]
        }
        newPrices = dataPreprocessing(rawPrices);
        this.prices = newPrices;

        return newPrices;
    };


};

const mockPrices = {
    "BTC":  {"BRL": 32104.5, "EUR": 6801.66, "USD": 7479.99}, 
    "ETH":  {"BRL": 648.51,  "EUR": 137.54,  "USD": 151.2},
    "MOCK": {"BRL": 1.0,     "EUR": 1.0,     "USD": 1.0},
};

function topListQuery(number = 10,exchange = 'USD'){
    var query = `/top/totalvolfull?limit=${number}&tsym=${exchange}`
    query += `&api_key=${KEY.API}`

    return query
}

function currenciesPricesQuery(currencies_names,converted_currencies_names){
    var currencies_list = '';
    var converted_currencies_list = '';

    currencies_list = listToString(currencies_names)

    converted_currencies_list = listToString(converted_currencies_names)

    var query = `pricemulti?fsyms=${currencies_list}&tsyms=${converted_currencies_list}`;

    //query += `&api_key=${KEY.API}`

    return query;
};

function listToString(names){
    var string = '';
    for (var name of names){
        string += name + ',';
    };
    // remove last coma
    string = string.substring(0,string.length - 1);
    return string;
};


function dataPreprocessing(data){
    newData = new Array;
    counter = 0;

    for (var crypto in data){
        newData.push({
            id: String(counter++),
            name: String(crypto),
            price: Number(data[crypto]["USD"])
        });
    };

    return (newData);
};
