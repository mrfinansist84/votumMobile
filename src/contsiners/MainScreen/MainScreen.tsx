import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Platform } from 'react-native';

const MainScreen = (props: any) => {
    return (
        <View style={style.center}>
            <ImageBackground source={require('../../../assets/logo.png')} style={style.image}>
            <Text style={style.header}>VOTUM</Text>
            <Text style={style.paragraph}>Программа для управления процессом голосования</Text>
            <Text style={style.paragraph}>Свобода, доступность и комфорт для жильцов</Text>
            <Text style={style.paragraph}>Контроль и скорость принятий решений для ОСМД</Text>
            </ImageBackground>
        </View>
    )
};

const style = StyleSheet.create({
    center: {
        flex: 1,
  backgroundColor: 'black',
  
    },
    header: {
        paddingTop: 200,
        fontWeight: 'bold',
        fontSize: 40,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        color: 'white'
    },
    image: {
       flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        margin: 40,
        
    },
    paragraph: {
        fontSize: 20,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        margin: 20,
        textAlign: 'center',
        color: 'white'
    }
});

export default MainScreen