function makeRequest(method, url, headers = undefined, body = undefined) {
	document.getElementById("main").classList.add("over");
	if (document.firstElementChild.getAttribute("pag") === "board") {
		document.getElementById("Leaderboard").classList.add("over");
		document.getElementById("bestScores").classList.add("over");
		document.getElementById("loadGame").classList.add("over");
		document.getElementById("showBoard").classList.add("over");
		document.getElementById("userInfo").classList.add("over");
		document.getElementById("modalEdit").classList.add("over");
		document.getElementById("modalSave").classList.add("over");
		document.getElementById("modalWarning").classList.add("over");
	} else {
		document.getElementById("modalCreate").classList.add("over");
	}
	document.getElementById("lottie").style.display = "block";
	return new Promise(function (resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, Url + url);
		if (headers != undefined) {
			headers.forEach((item) => {
				xhr.setRequestHeader(item.name, item.value);
			});
		}
		xhr.onload = function () {
			document.getElementById("main").classList.remove("over");
			if (document.firstElementChild.getAttribute("pag") === "board") {
				document.getElementById("Leaderboard").classList.remove("over");
				document.getElementById("bestScores").classList.remove("over");
				document.getElementById("loadGame").classList.remove("over");
				document.getElementById("showBoard").classList.remove("over");
				document.getElementById("userInfo").classList.remove("over");
				document.getElementById("modalEdit").classList.remove("over");
				document.getElementById("modalSave").classList.remove("over");
				document.getElementById("modalWarning").classList.remove("over");
			} else {
				document.getElementById("modalCreate").classList.remove("over");
			}
			document.getElementById("lottie").style.display = "none";
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
			xhr.send(JSON.stringify(body));
		}
	});
}

function CalcularManzana(){

}