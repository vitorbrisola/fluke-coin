import React, {Component} from 'react';

import { 
    StyleSheet,
    View,  
    Text,  
    FlatList,
} from 'react-native';

export default function CoinsList(coins){
    return(
        <FlatList
            data={coins}
            keyExtractor={(item, key) => key.toString()}
            //renderItem={CoinDisplay}
            renderItem={({item}) =>
                <View style={styles.coinsListContainer}>
                    <CoinDisplay name={item.name} price={item.price}/>
                </View>
            }
        />
    );
};


function CoinDisplay({name,price}){
    console.log(`Coin Loading ${name}`);
    return(
        <View 
            style={styles.container}>
            <Text>{name}</Text>
            <Text>{price}</Text>        
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        //shape
        height: '100%', 
        borderWidth: 2, 
        borderRadius: 5,
        // color
        borderColor: 'lightgreen', 
        backgroundColor: '#FFFF',
        // content
        padding: 20,    
        alignItems: 'center',
    },
    coinsListContainer: {
        //shape
        height: 100, 
        // position 
        marginHorizontal: 30,
        marginVertical: 20,
    },
});