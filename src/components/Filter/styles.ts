import { StyleSheet } from "react-native";
import { black } from "react-native-paper/lib/typescript/src/styles/colors";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000086",
    },
    modalView: {
        alignSelf: 'stretch',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 6,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#0076e4",
        borderRadius: 20,
        padding: 10,
        margin: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    borderGroup: {
        borderWidth: 1,
        borderColor: "#0076e4",
        borderRadius: 6,
        marginBottom: 10,
        alignSelf: 'stretch'
    },
    textGrop: {
        color: "#0076e4",
        padding: 5
    },
    textInput: {
        height: 40, 
        borderBottomColor: 'gray', 
        borderBottomWidth: 1, 
        margin: 5
    },
    findButton: {
        backgroundColor: "#0076e4",
        alignSelf: "center", 
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 6
    }
});