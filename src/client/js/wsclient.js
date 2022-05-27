export default class WSClient {

    constructor() {
        this._init();
    }
    _init() {
        fetch('/swport').then((res) =>res.json()).then((res)=>{
            console.log(res.port);
            this.wsc = new WebSocket(`ws://${window.location.hostname}:${res.port}`);
            this.wsc.addEventListener('message', (event) => {
                console.log('message from backend', event);
            });
        });
    }
}