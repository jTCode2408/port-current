const express = require ('express');

const server = express();
const path = require('path');
const PORT = 8080;

server.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

server.listen(PORT, ()=>{
    console.log('SERVER RUNNING')
})