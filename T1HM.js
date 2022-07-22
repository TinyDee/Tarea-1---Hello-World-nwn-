const express = require("express");

const t1hm = express();

t1hm.get("/",(req, res) => {
    res.send("Hola Lic.!!! ✌(>‿◠)");
});

t1hm.listen(3001, ()=> {
    console.log("server running on port", 3001);
});