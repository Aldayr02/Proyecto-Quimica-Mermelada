var precioManzana = 50;
var precioAzucar = 20;
var precioMermelada= 100;

function putPrice(precioMan, precioAzu, precioMer) {
	precioManzana = precioMan;
	precioAzucar = precioAzu;
	precioMermelada = precioMer;
}

function inputManzanas(manzanas) {
	//Proceso 1
	manzanas = manzanas *1000;
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
	let mermelada = manzanas * (325 / 436);

	let egreso = azucar * precioAzucar + manzanas * precioManzana;
	let ingreso = mermelada * precioMermelada;

	return {manzanas:{kg: manzanas/1000 , precio: manzanas * precioManzana}, azucar: { kg: azucar/1000 , precio: azucar * precioAzucar }, mermelada: { kg: mermelada/1000 , precio: mermelada * precioMermelada }, balance: { egresos: egreso, ingresos: ingreso, utilidad: ingreso - egreso } };
}

function inputMermelada(mermelada) {
	//Proceso 1
	mermelada *= 1000;
	let manzanas = mermelada * (436 / 325);
	let residuos1 = manzanas * ((47 * 100) / 436 / 100);
	let manzanasPeladas = manzanas - residuos1;

	//Proceso 2
	let residuos2 = manzanasPeladas * ((24 * 100) / 389 / 100);
	let manzanasPicadas = manzanasPeladas - residuos2;

	//Proceso 3
	let residuos3 = manzanasPicadas * ((14 * 100) / 365 / 100);
	let manzanaMachacada = manzanasPicadas - residuos3;

	//Proceso 4
	let azucar = (manzanaMachacada / 2) ;

	let egreso = azucar * precioAzucar + manzanas * precioManzana;
	let ingreso = mermelada * precioMermelada;

	return {manzanas:{kg: manzanas/1000 , precio: manzanas * precioManzana}, azucar: { kg: azucar/1000 , precio: azucar * precioAzucar }, mermelada: { kg: mermelada/1000 , precio: mermelada * precioMermelada }, balance: { egresos: egreso, ingresos: ingreso, utilidad: ingreso - egreso } };
}

function inputAzucar(azucar) {
	//Proceso 1
	azucar *= 1000
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

	let manzanas = (azucar * 436) / azucarConstante;

	let mermelada = manzanas * (325 / 436);

	let egreso = azucar * precioAzucar + manzanas * precioManzana;
	let ingreso = mermelada * precioMermelada;

	return {manzanas:{kg: manzanas/1000 , precio: manzanas * precioManzana}, azucar: { kg: azucar/1000 , precio: azucar * precioAzucar }, mermelada: { kg: mermelada/1000 , precio: mermelada * precioMermelada }, balance: { egresos: egreso, ingresos: ingreso, utilidad: ingreso - egreso } };
}
 
exports.inputManzanas = inputManzanas;
exports.inputMermelada = inputMermelada;
exports.inputAzucar = inputAzucar;
exports.putPrice = putPrice;