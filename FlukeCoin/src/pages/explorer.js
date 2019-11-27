/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useEffect, Component} from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    Button,
    FlatList,
    View,
    Text,
} from 'react-native';

import BottomTab from './components/tabs'
import currenciesPriceQuery from '../services/cryptocompare/currency'
import CryptoApi from '../services/cryptocompare/connect'

const DATA = [
    {id: '5', name: 'Flukeco'},
    {id: '0', name: 'Bitcoin'},
    {id: '1', name: 'Ethereum'}, 
    {id: '2', name: 'Litecoin'}, 
    {id: '3', name: 'Zcash'}, 
    {id: '4', name: 'Dash'},

];


function Item({item}){
    return(
        <View 
            style={styles.dualContainer}>
            <View style={styles.coinContainer}>
                <Text>{item}</Text>
            </View>
            <View style={styles.coinContainer}><Text>{item}</Text></View>         
        </View>

    );
};

//const App: () => React$Node = () => {
export default class ExplorerScreen extends Component {

    state = {
        data: [],
    };

    componentDidMount(){
        this.loadData();
    };

    dataPreprocessing = (data) => {
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

    loadData =  () => {
        const cur = ['BTC','ETH'];
        const conv = ['USD','EUR','BRL']

        data = null

        // api prices loading
        query = currenciesPriceQuery(cur,conv);
        console.log(query)
        //console.log(CryptoApi.baseURL);
        console.log('get started')
        CryptoApi.get(query)
            .then(response => {
                data = response.data;
                console.log({'data':data});
                data = this.dataPreprocessing(data);
                console.log({'data_preprocessed':data});
                this.setState({ data: data }); 
                //console.log({'response':response,'data':data});
            })
            .catch(error => { console.log(error.message)});
        console.log('get finished')
               
    };
    

    render() {
        return (
            <SafeAreaView 
                contentInsetAdjustmentBehavior="automatic"
                style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <Item data={item.name} />}
                    keyExtractor={item => item.id}
                />
                <View>
                    {BottomTab(this.props)}
                </View>
                
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // make the container fill the screen
        backgroundColor: 'darkgreen',
        //marginTop: Constants.statusBarHeight,
    },
    dualContainer: {
        //shape
        height: 100,
        //position
        marginHorizontal: 0,
        marginVertical: 15,
        //content
        padding: 20,
        flexDirection:"row",
    },
    coinContainer: {
        // shape
        height: 75,
        width: 140,
        borderWidth: 2, 
        borderRadius: 5,
        // position
        marginHorizontal: 10,
        marginVertical: 0,
        // color
        backgroundColor: '#FFFF', 
        borderColor: 'green',
        // content
        padding: 0,
        alignItems: 'center',
    },
});

