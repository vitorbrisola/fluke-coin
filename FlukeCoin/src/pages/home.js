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
    View,
    Text,
} from 'react-native';

import CoinsList from './components/coin'
import CurrencyManager from '../services/cryptocompare/manager'
import UserManager from '../user/manager'


export default class HomeScreen extends Component {


    constructor(props){
        super(props);

        console.log('Home: '+this.props)
    }

    state = {
        data: [],
        currencyManager: null,
        prices: [],
        coins: null
    };

    componentDidMount = async () => {
        console.log('Home');
        // manager setup

        if(this.state.currencyManager == null){
            var newUser = new UserManager();
            newUser.get()
            await this.setState({coins:newUser.getCoins()})
        };

        if (this.state.currencyManager == null){
            //console.log('New manager loading...');
            const cur = this.state.coins
            const conv = ['USD','EUR','BRL'];
            var newManager = new CurrencyManager(cur,conv);
            await this.setState({currencyManager: newManager})};

        this.loadData();
    };

    loadData = async () => {
        if(this.state.data.length == 0){
            console.log('Novos dados');
            data = await this.state.currencyManager.loadPrices();
            //console.log(data);
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
                <CoinsList coins={this.state.data} />
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
