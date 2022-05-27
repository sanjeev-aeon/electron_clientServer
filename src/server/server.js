const http = require('http');
const app = require('./app');
//init Http
http.createServer(app).listen(appConfig.httpServer.port, () => {
    console.log('up and running');
}).addListener('error', (err) => {
    console.error(err);
})

//init websocket
const { WebSocketServer } = require('ws');
const changeObserver = require('./changeObserver');
const wss = new WebSocketServer({ port: appConfig.websocket.port });
wss.on('connection', (ws) => {
    changeObserver.addWSConnection(ws);
    ws.on('close', () => {
        changeObserver.removeWSConnection(ws);
    
    });
});