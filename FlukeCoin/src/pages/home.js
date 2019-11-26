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
    Button,
    FlatList,
    View,
    Text,
} from 'react-native';




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

//const App: () => React$Node = () => {
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
                <Button
                    title="Explorer"
                    onPress={() => this.props.navigation.navigate('Explorer')}
                />
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
        height: 100,
        padding: 20,
        alignItems: 'center',
        marginHorizontal: 30,
        marginVertical: 20,
        backgroundColor: '#FFFF', 
        borderWidth: 2, 
        borderColor: 'lightgreen',
        borderRadius: 5,
    },
});

//export default App;
