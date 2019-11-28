import React, {Component} from 'react';

import { 
    StyleSheet,
    View,  
    Text,  
    FlatList,
} from 'react-native';



export default function CoinDisplay({name,price}){
    console.log(`Coin Loading ${name}`);
    return(
        <View 
            style={styles.container}>
            <Text>{name}</Text>
            <Text>{price}</Text>        
        </View>
    );
};

export function CoinsList(coins){
    return(
        <FlatList
            data={coins}
            keyExtractor={(item, key) => key.toString()}
            //renderItem={CoinDisplay}
            renderItem={({item}) =>
                <View style={styles.coinContainer}>
                    <CoinDisplay name={item.name} price={item.price}/>
                </View>
            }
        />
    );
}

const styles = StyleSheet.create({
    container: {
        //shape
        height: 100, 
        borderWidth: 2, 
        borderRadius: 5,
        // color
        borderColor: 'lightgreen', 
        backgroundColor: '#FFFF',
        // content
        padding: 20,    
        alignItems: 'center',
    },
});