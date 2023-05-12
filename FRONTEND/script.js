// cSpell: disable

// const Url = "http://localhost:3000";
const Url = "https://good-pear-badger-wig.cyclic.app";

function makeRequest(method, url, headers = undefined, body = undefined) {
	return new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, Url + url);
		if (headers != undefined) {
			headers.forEach((item) => {
				xhr.setRequestHeader(item.name, item.value);
			});
		}
		xhr.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				resolve(xhr.response);
			} else {
				reject({
					status: this.status,
					response: xhr.response,
				});
			}
		};
		xhr.onerror = function () {
			reject({
				status: this.status,
				response: xhr.response,
			});
		};
		if (body == undefined) xhr.send();
		else {
			console.log(JSON.stringify(body));
			xhr.send(JSON.stringify(body));
		}
	});
}

async function calcularManzana() {
	let manzanas = document.getElementById("ManIn").value;
	let precioManzana = document.getElementById("PreMan").value;
	let precioAzucar = document.getElementById("PreAz").value;
	let precioMermelada = document.getElementById("PreMer").value;

	try {
		let calculo = JSON.parse(await makeRequest("GET", `/manzanas?manzanas=${manzanas}&precioManzana=${precioManzana}&precioAzucar=${precioAzucar}&precioMermelada=${precioMermelada}`, [{ name: "Content-Type", value: "application/json" }]));
		
		document.getElementById("ManPreMan").innerText=calculo.manzanas.precio;

		document.getElementById("ManKgAz").innerText=calculo.azucar.kg;
		document.getElementById("ManPreAz").innerText=calculo.azucar.precio;

		document.getElementById("ManKgMer").innerText=calculo.mermelada.kg;
		document.getElementById("ManPreMer").innerText=calculo.mermelada.precio;

		document.getElementById("ManEgr").innerText=calculo.balance.egresos;
		document.getElementById("ManIng").innerText=calculo.balance.ingresos;
		document.getElementById("ManUti").innerText=calculo.balance.utilidad;


	} catch (e) {
		console.log(e);
		alert(e.status + ": " + e.response);
	}
}

async function calcularMermelada() {
	let mermelada = document.getElementById("MerIn").value;
	let precioManzana = document.getElementById("PreMan").value;
	let precioAzucar = document.getElementById("PreAz").value;
	let precioMermelada = document.getElementById("PreMer").value;
	try {
		let calculo = JSON.parse(await makeRequest("GET", `/mermelada?mermelada=${mermelada}&precioManzana=${precioManzana}&precioAzucar=${precioAzucar}&precioMermelada=${precioMermelada}`, [{ name: "Content-Type", value: "application/json" }]));
		
		document.getElementById("MerPreMer").innerText=calculo.mermelada.precio;

		document.getElementById("MerKgMan").innerText=calculo.manzanas.kg;
		document.getElementById("MerPreMan").innerText=calculo.manzanas.precio;

		document.getElementById("MerKgAz").innerText=calculo.azucar.kg;
		document.getElementById("MerPreAz").innerText=calculo.azucar.precio;

		document.getElementById("MerEgr").innerText=calculo.balance.egresos;
		document.getElementById("MerIng").innerText=calculo.balance.ingresos;
		document.getElementById("MerUti").innerText=calculo.balance.utilidad;


	} catch (e) {
		console.log(e);
		alert(e.status + ": " + e.response);
	}
}

async function calcularAzucar() {
	let azucar = document.getElementById("AzIn").value;
	let precioManzana = document.getElementById("PreMan").value;
	let precioAzucar = document.getElementById("PreAz").value;
	let precioMermelada = document.getElementById("PreMer").value;

	try {
		let calculo = JSON.parse(await makeRequest("GET", `/azucar?azucar=${azucar}&precioManzana=${precioManzana}&precioAzucar=${precioAzucar}&precioMermelada=${precioMermelada}`, [{ name: "Content-Type", value: "application/json" }]));
		
		document.getElementById("AzPreAz").innerText=calculo.mermelada.precio;

		document.getElementById("AzKgMan").innerText=calculo.manzanas.kg;
		document.getElementById("AzPreMan").innerText=calculo.manzanas.precio;

		document.getElementById("AzKgMer").innerText=calculo.azucar.kg;
		document.getElementById("AzPreMer").innerText=calculo.azucar.precio;

		document.getElementById("AzEgr").innerText=calculo.balance.egresos;
		document.getElementById("AzIng").innerText=calculo.balance.ingresos;
		document.getElementById("AzUti").innerText=calculo.balance.utilidad;


	} catch (e) {
		console.log(e);
		alert(e.status + ": " + e.response);
	}
}