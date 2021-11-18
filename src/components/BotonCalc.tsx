import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    text: string;
    color?: '#2D2D2D' | '#FF9427' | '#9B9B9B';
    ancho?: boolean;
    action: ( numeroTexto: string ) => void;
}

const BotonCalc = ({ text, color = '#2D2D2D', ancho = false, action }: Props) => {
    return (
        <TouchableOpacity 
            activeOpacity={ 0.6 }
            onPress={() => action( text ) }
        >
            <View  style={{ 
                ...styles.button, 
                backgroundColor: color,
                width: ancho ? 180 : 80  
            }}>
                <Text style={ 
                    { ...styles.buttonText, color: color === '#9B9B9B' ? 'black' : 'white' }
                }>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 8
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    },
});

export default BotonCalc;
