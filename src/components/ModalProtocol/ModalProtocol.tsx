import React from 'react';
import { Modal, TouchableHighlight, Text, View } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';

export const ModalProtocol = (props: any) => {
    const { isDisplay, link, controls } = props;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isDisplay}
        >
                {link.includes('https://', 0) && <>
                        <PDFReader source={{ uri: link  }} />
                        <TouchableHighlight style={{ backgroundColor: 'white' }} onPress={() => controls(false)}>
                            <Text style={{ textAlign: 'center', paddingBottom: 20 }}>Вернуться</Text>
                        </TouchableHighlight>
                   </>}
                {!link.includes('https://', 0) &&
                    <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>ERROR</Text>
                        <TouchableHighlight onPress={() => controls(false)}>
                            <Text style={{ textAlign: 'center', paddingBottom: 20 }}>Вернуться</Text>
                        </TouchableHighlight>
                    </View>

                }
        </Modal>
    )
};