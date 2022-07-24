const express = require("express");
const path = require("path");

const t1hm = express();

t1hm.get("/",(req, res) => {
    //res.send("Hola Lic.!!! ✌(>‿◠)");
    res.sendfile(path.join(__dirname+'/Tabla.html'))
});

t1hm.listen(3001, ()=> {
    console.log("server running on port", 3001);
});
