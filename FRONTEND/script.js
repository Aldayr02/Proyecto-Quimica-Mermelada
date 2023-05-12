// cSpell: disable

const Url = "http://localhost:3000";
// const Url = "https://good-pear-badger-wig.cyclic.app";

function makeRequest(method, url, headers = undefined, body = undefined) {
	return new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, Url + url);
		debugger;
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
			debugger;
			console.log(JSON.stringify(body));
			xhr.send(JSON.stringify(body));
		}
	});
}

async function calcularManzana() {
	let manzanas = document.getElementById("ManIn").value;
	try {
		let calculo = await makeRequest("GET", "/manzanas", [{ name: "Content-Type", value: "application/json" }], manzanas);
		console.log(calculo);
	} catch (e) {
		console.log(e);
		alert(e.status + ": " + e.response);
	}
}
