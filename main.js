const { app, BrowserWindow } = require('electron');
global.appConfig = require('./app.config.json');

// start server
require('./src/server/server');

const appPage = `http://127.0.0.1:${appConfig.httpServer.port}/`;
app.whenReady().then(() => {
    const win = new BrowserWindow({
       
    });
    win.loadURL(appPage);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})