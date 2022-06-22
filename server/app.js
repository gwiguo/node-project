const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname,'../client/assets')));
app.use(express.static(path.resolve(__dirname,'../dist/static')));
app.use(cors());

app.get("/",(req,res)=>{    
    res.send(fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),"utf-8"));
});

app.listen(8080,()=>{
    console.log("服务器已启动并监听8080端口");
});