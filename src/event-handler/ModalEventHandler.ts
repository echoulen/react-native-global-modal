import {BehaviorSubject, Observable} from "rx";
import {ModalRender} from "../types/ModalRender";

let handler: ModalEventHandler;

export class ModalEventHandler {
    public static getInstance(): ModalEventHandler {
        if (!handler) {
            handler = new ModalEventHandler();
        }

        return handler;
    }

    private render: ModalRender = null;
    private renderSubject = new BehaviorSubject<ModalRender>(null);

    public getRenderSubject(): Observable<ModalRender> {
        return this.renderSubject;
    }

    public updateRender(render: ModalRender): void {
        this.render = render;
        this.renderSubject.onNext(this.render);
    }

    public cleanRender(): void {
        this.updateRender(null);
    }
}
