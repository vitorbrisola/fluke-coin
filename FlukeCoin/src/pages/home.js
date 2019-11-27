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

import BottomTab from './tabs'


const DATA = [
    {id: '5', name: 'Flukeco'},
    {id: '0', name: 'Bitcoin'},
    {id: '1', name: 'Ethereum'}, 
    {id: '2', name: 'Litecoin'}, 
    {id: '3', name: 'Zcash'}, 
    {id: '4', name: 'Dash'},

];


function Item({ data }){
    return(
        <View 
            style={styles.coinContainer}>
            <Text>{data}</Text>        
        </View>
    );
};


export default class HomeScreen extends Component {

    state = {
        data: [],
    };

    componentDidMount(){
        this.loadData();
    };

    //loadData = async ( startDate = new Date()) => {};
    loadData = () => {
        this.setState({data:DATA})
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
    coinContainer: {
        //shape
        height: 100, 
        borderWidth: 2, 
        borderRadius: 5,
        // color
        borderColor: 'lightgreen', 
        backgroundColor: '#FFFF',
        // position 
        marginHorizontal: 30,
        marginVertical: 20,
        // content
        padding: 20,    
        alignItems: 'center',
    },
});

//export default App;
