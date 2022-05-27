export default class WSClient {

    constructor() {
        this._init();
    }
    _init() {
        fetch('/swport').then((port) => {
            this.wsc = new WebSocket(`ws://${window.location.origin}:port`);
            this.wsc.addEventListener('message', (event) => {
                console.log('message from backend', event);
            });
        });
    }
}