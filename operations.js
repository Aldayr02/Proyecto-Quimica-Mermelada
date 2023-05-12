var precioManzana; /* = 50 */
var precioAzucar; /* = 20 */
var precioMermelada; /* = 100 */

function putPrice(precioMan, precioAzu, precioMer) {
	precioManzana = precioMan;
	precioAzucar = precioAzu;
	precioMermelada = precioMer;
}

function inputManzanas(Manzanas) {
	//Proceso 1
	let residuos1 = Manzanas * ((47 * 100) / 436 / 100);
	let manzanasPeladas = Manzanas - residuos1;

	//Proceso 2
	let residuos2 = manzanasPeladas * ((24 * 100) / 389 / 100);
	let manzanasPicadas = manzanasPeladas - residuos2;

	//Proceso 3
	let residuos3 = manzanasPicadas * ((14 * 100) / 365 / 100);
	let manzanaMachacada = manzanasPicadas - residuos3;

	//Proceso 4
	let azucar = manzanaMachacada / 2;
	let mermelada = Manzanas * (325 / 436);

	let egreso = azucar * precioAzucar + Manzanas * precioManzana;
	let ingreso = mermelada * precioMermelada;

	return { azucar: { kg: azucar, precio: azucar * precioAzucar }, mermelada: { kg: mermelada, precio: mermelada * precioMermelada }, balance: { egresos: egreso, ingreso: ingreso, utilidad: ingreso - egreso } };
}

function inputMermelada(Mermelada) {
	//Proceso 1
	let manzanas = Mermelada * (436 / 325);
	let residuos1 = manzanas * ((47 * 100) / 436 / 100);
	let manzanasPeladas = manzanas - residuos1;

	//Proceso 2
	let residuos2 = manzanasPeladas * ((24 * 100) / 389 / 100);
	let manzanasPicadas = manzanasPeladas - residuos2;

	//Proceso 3
	let residuos3 = manzanasPicadas * ((14 * 100) / 365 / 100);
	let manzanaMachacada = manzanasPicadas - residuos3;

	//Proceso 4
	let azucar = manzanaMachacada / 2;

	let egreso = azucar * precioAzucar + manzanas * precioManzana;
	let ingreso = Mermelada * precioMermelada;

	return { manzanas: { kg: manzanas, precio: manzanas * precioManzana }, azucar: { kg: azucar, precio: azucar * precioAzucar }, balance: { egresos: egreso, ingreso: ingreso, utilidad: ingreso - egreso } };
}

function inputAzucar(Azucar) {
	//Proceso 1
	let manzanasConstante = 436;
	let residuos1 = manzanasConstante * ((47 * 100) / 436 / 100);
	let manzanasPeladas = manzanasConstante - residuos1;

	//Proceso 2
	let residuos2 = manzanasPeladas * ((24 * 100) / 389 / 100);
	let manzanasPicadas = manzanasPeladas - residuos2;

	//Proceso 3
	let residuos3 = manzanasPicadas * ((14 * 100) / 365 / 100);
	let manzanaMachacada = manzanasPicadas - residuos3;

	//Proceso 4
	let azucarConstante = manzanaMachacada / 2;

	let manzanas = (Azucar * 436) / azucarConstante;

	let mermelada = manzanas * (325 / 436);

	let egreso = Azucar * precioAzucar + manzanas * precioManzana;
	let ingreso = mermelada * precioMermelada;

	return { manzanas: { kg: manzanas, precio: manzanas * precioManzana }, mermelada: { kg: mermelada, precio: mermelada * precioMermelada }, balance: { egresos: egreso, ingreso: ingreso, utilidad: ingreso - egreso } };
}

exports.inputManzanas = inputManzanas;
exports.inputMermelada = inputMermelada;
exports.inputAzucar = inputAzucar;
exports.putPrice = putPrice;
