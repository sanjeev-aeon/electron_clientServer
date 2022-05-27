class ChangeObserver {
    constructor() {
        this.ws = null;
    }
    addWSConnection(ws) {
        this.ws = ws;
    }
    removeWSConnection(ws) {
        this.ws = null;
    }
}

module.exports = new ChangeObserver();
