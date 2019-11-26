import React, {Component} from 'react';
import { 
    StyleSheet,
    Text,
    Button,
    View,
    TouchableOpacity,
    TouchableHighlight
    
} from 'react-native';


export default function TabRender( props ){
    return(
        <View
            style={styles.tabContainer}>
            <TouchableHighlight
            style={styles.screenButton}
            onPress={() => props.navigation.navigate('Home')}
            >
                <View
                >
                    <Text>Home</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
            style={styles.screenButton}
            onPress={() => props.navigation.navigate('Explorer')}
            >
                <View
                >
                    <Text>Explorer</Text>
                </View>
            </TouchableHighlight>
        </View>
        
    );
}; 
/*
<Button
title="Home"
onPress={() => props.navigation.navigate('Home')}
/>
<Button
title="Explorer"
onPress={() => props.navigation.navigate('Explorer')}
/>
*/

const styles = StyleSheet.create({
    tabContainer:{
        width: '100%',
        flexDirection:"row",
    },
    screenButton:{
        backgroundColor: 'red',
        height: 45,
        width: '50%',
        justifyContent: 'center',
        textAlignVertical: 'center',
        borderWidth:3,
        borderColor: 'black'
    },
});

