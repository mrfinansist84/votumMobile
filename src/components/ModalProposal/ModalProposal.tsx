import React from 'react';
import { Modal, TouchableHighlight, Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
export const ModalProposal = (props: any) => {
    const { isDisplay, controls, text, title } = props;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isDisplay}
        >
                <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', paddingTop: 40, paddingBottom: 20}}>
                    <Text style={style.header}>{title}</Text>
                    <ScrollView
                    automaticallyAdjustContentInsets={true}
                    contentContainerStyle={{ flex: 1}}
                    >
                    <Text style={style.mainText}>{text}</Text>
                    </ScrollView>
                    
                    <TouchableHighlight onPress={() => controls(false)}>
                        <Text style={{ textAlign: 'center', paddingBottom: 20 }}>Вернуться</Text>
                    </TouchableHighlight>
                </View>
            
        </Modal>
    )
};

const style = StyleSheet.create({
   
    header: {
      fontWeight: 'bold',
      fontSize: 40,
      paddingBottom: 40
    },
    mainText: {
      fontSize: 20,
      padding: 10
    }
})