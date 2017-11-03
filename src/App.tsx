import * as React from "react";
import {AppRegistry, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {GlobalModal} from "./components/GlobalModal";

export interface AppProps {
}

export interface AppState {
}

export class App extends React.Component<AppProps, AppState> {
    private static modal1Render() {
        return (
            <View style={styles.modal1Container}>
                <Text style={styles.modalText}>Modal 1</Text>
                <TouchableOpacity style={styles.closeButton} onPress={GlobalModal.close}>
                    <Text style={styles.modalText}>✕</Text>
                </TouchableOpacity>
            </View>
        );
    }

    private static modal2Render() {
        return (
            <View style={styles.modal2Container}>
                <Text style={styles.modalText}>Modal 2</Text>
                <TouchableOpacity style={styles.closeButton} onPress={GlobalModal.close}>
                    <Text style={styles.modalText}>✕</Text>
                </TouchableOpacity>
            </View>
        );
    }

    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native Global Modal!
                </Text>
                <View>
                    <TouchableOpacity onPress={GlobalModal.open.bind(null, App.modal1Render)}>
                        <Text>open Modal 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={GlobalModal.open.bind(null, App.modal2Render)}>
                        <Text>open Modal 2</Text>
                    </TouchableOpacity>
                </View>
                <GlobalModal />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
    modal1Container: {
        width: 250,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
        borderRadius: 10,
    },
    modal2Container: {
        width: 250,
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        borderRadius: 10,
    },
    modalText: {
        color: "#EEEEEE",
    },
    closeButton: {
        position: "absolute",
        top: 5,
        right: 7,
    },
});

AppRegistry.registerComponent("ReactNativeGlobalModal", () => App);
