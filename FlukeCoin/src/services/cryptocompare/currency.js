import KEY from '../../private/keys'



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


