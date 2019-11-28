import React, {Component} from 'react';

import { 
    StyleSheet,
    View,  
    Text,  
} from 'react-native';



export default function CoinDisplay({coinInfo}){
    return(
        <View 
            style={styles.container}>
            <Text>{coinInfo}</Text>        
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
});