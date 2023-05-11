"use strict";

const url = require("url");
const path = require("path");
const cors = require("cors");
const express = require("express");

const app = express();
const port = 3000;


app.use(
	cors({
		methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
	})
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "app", "views")));

app.listen(port, () => {
	console.log(`API running on port ${port}`);
});
