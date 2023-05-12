"use strict";

const url = require("url");
const path = require("path");
const cors = require("cors");
const express = require("express");
const operations = require('./operations');

const app = express();
const port = 3000;


app.use(
	cors({
		methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
	})
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "FRONTEND")));

app.listen(port, () => {
	console.log(`API running on port ${port}`);
});

app.get('/', (req, res) => {
	operations.putPrice(50,20,100);
	console.log(operations.inputAzucar(100));
	console.log("hola")

    res.sendFile(path.join(__dirname, "./FRONTEND/home.html"));
});

app.get('/Manzanas',(req, res)=>{
});