/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';


const DATA = [
    'Bitcoin', 'Ethereum', 'Litecoin', 'Zcash', 'Dash',
];


const App: () => React$Node = () => {
    return (

        <SafeAreaView 
            contentInsetAdjustmentBehavior="automatic"
            style={styles.container}>
        <ScrollView 
            contentInsetAdjustmentBehavior="automatic"
            style={styles.container}>
            <View 
            style={styles.coinContainer}>
                <Text>Oi Fabiano!!</Text>
            </View>
	    <View 
            style={styles.coinContainer}>
                <Text>Oi Fabiano!!</Text>
            </View>
	    <View 
            style={styles.coinContainer}>
                <Text>Hello Fluke Coin!!</Text>
            </View>
	    <View 
            style={styles.coinContainer}>
                <Text>Hello Fluke Coin!!</Text>
            </View>
	    <View 
            style={styles.coinContainer}>
                <Text>Hello Fluke Coin!!</Text>
            </View>
	</ScrollView> 
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // make the container fill the screen
        backgroundColor: 'darkgreen',
        //marginTop: Constants.statusBarHeight,
    },
    coinContainer: {
        height: 100,
        padding: 40,
        marginHorizontal: 30,
        marginVertical: 50,
        backgroundColor: '#FFFF', 
        borderWidth: 0, 
        borderColor: 'lightgreen',
        borderRadius: 5,
    },

});

export default App;
