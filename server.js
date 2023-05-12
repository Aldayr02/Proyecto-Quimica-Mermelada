// cSpell: disable
"use strict";

const url = require("url");
const path = require("path");
const cors = require("cors");
const express = require("express");
const operations = require("./operations");

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

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "./FRONTEND/home.html"));
});

app.get("/manzanas", (req, res) => {
	let manzanas=req.query.manzanas;
	let precioManzana = req.query.precioManzana;
	let precioAzucar = req.query.precioAzucar;
	let precioMermelada = req.query.precioMermelada;

	if(manzanas==undefined || manzanas==""){
		res.status(401);
		res.send("no se introdujo cantidad de manzanas");
		return;
	}

	if(precioManzana==undefined || precioManzana==""){
		res.status(401);
		res.send("no se introdujo precio del kg de manzana");
		return;
	}

	if(precioAzucar==undefined || precioAzucar==""){
		res.status(401);
		res.send("no se introdujo precio del kg de azucar");
		return;
	}

	if(precioMermelada==undefined || precioMermelada==""){
		res.status(401);
		res.send("no se introdujo precio del kg de mermelada");
		return;
	}

	operations.putPrice(precioManzana,precioAzucar,precioMermelada);
	let calculos=operations.inputManzanas(manzanas);
	res.send(JSON.stringify(calculos));
});

app.get("/mermelada", (req, res) => {
	let mermelada=req.query.mermelada;
	let precioManzana = req.query.precioManzana;
	let precioAzucar = req.query.precioAzucar;
	let precioMermelada = req.query.precioMermelada;

	if(mermelada==undefined || mermelada==""){
		res.status(401);
		res.send("no se introdujo kg de mermelada");
		return;
	}

	if(precioManzana==undefined || precioManzana==""){
		res.status(401);
		res.send("no se introdujo precio del kg de manzanas");
		return;
	}

	if(precioAzucar==undefined || precioAzucar==""){
		res.status(401);
		res.send("no se introdujo precio del kg de azucar");
		return;
	}

	if(precioMermelada==undefined || precioMermelada==""){
		res.status(401);
		res.send("no se introdujo precio del kg de mermelada");
		return;
	}

	operations.putPrice(precioManzana,precioAzucar,precioMermelada);
	let calculos=operations.inputMermelada(mermelada);
	res.send(JSON.stringify(calculos));
});

app.get("/azucar", (req, res) => {
	let azucar=req.query.azucar;
	let precioManzana = req.query.precioManzana;
	let precioAzucar = req.query.precioAzucar;
	let precioMermelada = req.query.precioMermelada;

	if(azucar==undefined || azucar==""){
		res.status(401);
		res.send("no se introdujo kg de azucar");
		return;
	}

	if(precioManzana==undefined || precioManzana==""){
		res.status(401);
		res.send("no se introdujo precio del kg de manzanas");
		return;
	}

	if(precioAzucar==undefined || precioAzucar==""){
		res.status(401);
		res.send("no se introdujo precio del kg de azucar");
		return;
	}

	if(precioMermelada==undefined || precioMermelada==""){
		res.status(401);
		res.send("no se introdujo precio del kg de mermelada");
		return;
	}

	operations.putPrice(precioManzana,precioAzucar,precioMermelada);
	let calculos=operations.inputAzucar(azucar);
	res.send(JSON.stringify(calculos));
});