const http = require('http');
const app = require('./app');

http.createServer(app).listen(appConfig.server.port, () => {
    console.log('up and running');
}).addListener('error', (err) => {
    console.error(err);
})