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

// render components
import BottomTab from './components/tabs'
import CoinDisplay from './components/coin'
// services
import CurrencyManager from '../services/cryptocompare/manager'


export default class ExplorerScreen extends Component {

    state = {
        data: [],
        manager: null,
        prices: [],
    };

    componentDidMount = async () => {
        console.log('Explorer');

        // manager setup
        if (this.state.manager == null){
            console.log('New manager loading...');
            const cur = ['BTC','ETH'];
            const conv = ['USD','EUR','BRL'];
            newManager = new CurrencyManager(cur,conv);
            await this.setState({manager:newManager});
        };
        
        console.log('Loading data...')
        this.loadData();
    };

    loadData =  () => {
        if(this.state.prices.length == 0){
            console.log('Novos dados');
            data = this.state.manager.loadPrices();
            console.log(data);
        }else{
            console.log('Dados ja carregados');
            data = this.state.prices;
        };
        this.setState({data:data});
    };
    

    render() {
        return (
            <SafeAreaView 
                contentInsetAdjustmentBehavior="automatic"
                style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => 
                    <View style={styles.coinContainer}><CoinDisplay coinInfo={item.name} /></View>}
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
        height: 90,
        width: 140,
        // position
        marginHorizontal: 30,
        marginVertical: 15,
    },
});

