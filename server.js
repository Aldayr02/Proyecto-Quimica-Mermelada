"use strict";

const url = require("url");
const path = require("path");
const cors = require("cors");
const express = require("express");
const operations = require('./Operations');

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
	console.log(operations.InputAzucar(100));
	console.log(operations.InputManzanas(500));
	console.log(operations.InputMermelada(500));

    res.sendFile(path.join(__dirname, "./FRONTEND/Home.html"));
});

app.get('/Manzanas',(req, res)=>{
	
});