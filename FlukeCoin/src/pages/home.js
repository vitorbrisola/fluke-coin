/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,
    Text,
} from 'react-native';

import BottomTab from './components/tabs'
import CoinsList from './components/coin'
import CurrencyManager from '../services/cryptocompare/manager'


export default class HomeScreen extends Component {

    state = {
        data: [],
        manager: null,
        prices: [],
    };

    componentDidMount = async () => {
        console.log('Home');
        // manager setup
        if (this.state.manager == null){
            console.log('New manager loading...');
            const cur = ['BTC','ETH'];
            const conv = ['USD','EUR','BRL'];
            newManager = new CurrencyManager(cur,conv);
            await this.setState({manager:newManager})};

        console.log('Loading data...')
        this.loadData();
    };

    loadData = () => {
        if(this.state.prices.length == 0){
            console.log('Novos dados');
            data = this.state.manager.loadPrices();
            console.log(data);
        }else{
            console.log('Dados ja carregados');
            data = this.state.data;
        };
        this.setState({data:data});
    };
    

    render() {
        return (
            <SafeAreaView 
                contentInsetAdjustmentBehavior="automatic"
                style={styles.container}>
                {CoinsList(this.state.data)}
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
        backgroundColor: '#3333',
        //marginTop: Constants.statusBarHeight,
    }
});
