const express = require('express');
const http = require('http');
const path= require('path');

const app =  express();

const staticRes=path.join(__dirname,'..','client');
app.use(express.static(staticRes));


http.createServer(app).listen(appConfig.server.port,()=>{
    console.log('up and running');
}).addListener('error',(err)=>{
    console.error(err);
})