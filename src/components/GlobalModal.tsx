import * as React from "react";
import {ModalRender} from "../types/ModalRender";
import {ModalEventHandler} from "../event-handler/ModalEventHandler";
import {Modal, StyleSheet, View} from "react-native";
import {IDisposable} from "rx";

export interface GlobalModalProps {
}

export interface GlobalModalState {
    render: ModalRender;
}

export class GlobalModal extends React.Component<GlobalModalProps, GlobalModalState> {
    public static open(render: ModalRender): void {
        ModalEventHandler.getInstance().updateRender(render);
    }

    public static close(): void {
        ModalEventHandler.getInstance().cleanRender();
    }

    private disposable: IDisposable;

    constructor(props) {
        super(props);
        this.state = {render: null};
    }

    public componentDidMount(): void {
        this.disposable = ModalEventHandler
            .getInstance()
            .getRenderSubject()
            .subscribe((render) => this.onRenderChange(render));
    }

    public componentWillUnmount(): void {
        this.disposable.dispose();
    }

    public render() {
        const render = this.state.render;
        const visible = !!render;
        const view = visible ? render() : null;
        return (
            <Modal visible={visible} animationType="fade" transparent={true} onRequestClose={GlobalModal.close}>
                <View style={styles.container}>
                    {view}
                </View>
            </Modal>
        );
    }

    private onRenderChange(render: ModalRender): void {
        this.setState({render});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});
