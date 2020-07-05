import React, { useState } from "react";
import {
    Alert,
    Modal,
    Text,
    TouchableHighlight,
    View,
    TextInput,
    Platform
} from "react-native";
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './styles';

export const initialState = {
    createDate: new Date(),
    basicFilterName: '',
    advancedFilterName: '',
    title: '',
    serialNumber: '',
    showDatePicker: false
  };

export const Filter = (props: any) => {
    const { settings, filterAction, userId } = props;
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = React.useState(initialState);
    const { title, serialNumber, createDate, basicFilterName, advancedFilterName, showDatePicker } = value;

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || createDate;
        setValue({ ...value, createDate: currentDate, showDatePicker: Platform.OS === 'ios'  });
      };

      const filteredData = () => {
        setModalVisible(!modalVisible);
        
        const displayedItems: any = {
          title,
          serialNumber,
          createDate,
        };
        filterAction(basicFilterName, advancedFilterName, displayedItems[advancedFilterName], userId);
      };

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <View style={styles.borderGroup}>
                            <Text style={styles.textGrop}>Поиск по статусу:</Text>
                            <RadioButton.Group 
                            onValueChange={filter => setValue({ ...value, basicFilterName: filter })}
                            value={basicFilterName}>
                                {settings.basic.map((item: {value: string, label: string}, i: number) => (
                                <RadioButton.Item 
                                key={i}
                                value={item.value}
                                label={item.label} 
                                color="#0076e4" />
                                ))}
                            </RadioButton.Group>
                        </View>

                        <View style={styles.borderGroup}>
                            <Text style={styles.textGrop}>Поиск по атрибуту:</Text>
                            <RadioButton.Group 
                            onValueChange={filter => setValue({ ...value, advancedFilterName: filter, showDatePicker: filter === 'createDate' })}
                             value={advancedFilterName}>
                                {settings.advanced.map((item: {value: string, label: string}, i: number) => (
                                <RadioButton.Item 
                                key={i}
                                value={item.value}
                                label={item.label} 
                                color="#0076e4" />
                                ))}
                            </RadioButton.Group>
                            {advancedFilterName === "title" && <TextInput
                                style={styles.textInput}
                                onChangeText={text => setValue({ ...value, title: text })}
                                value={title}
                                placeholder="Введите название документа"
                            />}
                            {advancedFilterName === "serialNumber" && <TextInput
                                style={styles.textInput}
                                onChangeText={text => setValue({ ...value, serialNumber: text })}
                                value={serialNumber}
                                placeholder="Введите номер документа"
                            />}
                            {showDatePicker && <DateTimePicker
                                testID="dateTimePicker"
                                value={createDate}
                                mode="date"
                                display="default"
                                onChange={onChangeDate}
                            />}
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                        <TouchableHighlight
                            disabled={(!advancedFilterName && !basicFilterName)}
                            style={(!advancedFilterName && !basicFilterName)
                                ? {...styles.findButton, backgroundColor: "grey"}
                                : styles.findButton }
                            onPress={filteredData}
                        >
                            <Text style={styles.textStyle}>Найти</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={[styles.openButton, styles.findButton]}
                            onPress={() => setValue(initialState)}
                        >
                            <Text style={styles.textStyle}>Сбросить фильтр</Text>
                        </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={styles.textStyle}>Найти по параметрам</Text>
            </TouchableHighlight>
        </View>
    );
};