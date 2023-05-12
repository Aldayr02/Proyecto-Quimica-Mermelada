var PrecioManzana = 50;
var PrecioAzucar = 20;
var PrecioMermelada = 100;

function CallPrice(PrecioMan, PrecioAz, PrecioMer) {
    PrecioManzana = PrecioMan;
    PrecioAzucar = PrecioAz;
    PrecioMermelada = PrecioMer;
}

function InputManzanas(Manzanas) {
    //Proceso 1
    let Residuos1 = Manzanas * (((47*100)/436)/100);
    let ManzanasPeladas = Manzanas - Residuos1;

    //Proceso 2
    let Residuos2 = ManzanasPeladas * (((24*100)/389)/100);
    let ManzanasPicadas = ManzanasPeladas - Residuos2;

    //Proceso 3
    let Residuos3 = ManzanasPicadas * (((14*100)/365)/100)
    let ManzanaMachacada = ManzanasPicadas - Residuos3;

    //Proceso 4
    let Azucar = ManzanaMachacada / 2;
    let Mermelada = Manzanas * (325/436);

    let Egreso = (Azucar * PrecioAzucar) + (Manzanas * PrecioManzana);
    let Ingreso = Mermelada * PrecioMermelada;

    return {"Azucar":{"Kg":Azucar, "Precio":Azucar * PrecioAzucar}, "Mermelada":{"Kg":Mermelada, "Precio": Mermelada * PrecioMermelada}, "Balance":{"Egresos": Egreso, "Ingreso":Ingreso, "Utilidad": Ingreso - Egreso}};
}

function InputMermelada(Mermelada) {

    //Proceso 1
    let Manzanas = Mermelada * (436/325)
    let Residuos1 = Manzanas * (((47*100)/436)/100);
    let ManzanasPeladas = Manzanas - Residuos1;

    //Proceso 2
    let Residuos2 = ManzanasPeladas * (((24*100)/389)/100);
    let ManzanasPicadas = ManzanasPeladas - Residuos2;

    //Proceso 3
    let Residuos3 = ManzanasPicadas * (((14*100)/365)/100)
    let ManzanaMachacada = ManzanasPicadas - Residuos3;

    //Proceso 4
    let Azucar = ManzanaMachacada / 2;
    
    let Egreso = (Azucar * PrecioAzucar) + (Manzanas * PrecioManzana);
    let Ingreso = Mermelada * PrecioMermelada;

    return {"Manzanas":{"Kg":Manzanas, "Precio":Manzanas * PrecioManzana}, "Azucar":{"Kg":Azucar, "Precio": Azucar * PrecioAzucar}, "Balance":{"Egresos": Egreso, "Ingreso":Ingreso, "Utilidad": Ingreso - Egreso}};
    
}

function InputAzucar(Azucar) {
    //Proceso 1
    let ManzanasConstante = 436
    let Residuos1 = ManzanasConstante * (((47*100)/436)/100);
    let ManzanasPeladas = ManzanasConstante - Residuos1;

    //Proceso 2
    let Residuos2 = ManzanasPeladas * (((24*100)/389)/100);
    let ManzanasPicadas = ManzanasPeladas - Residuos2;

    //Proceso 3
    let Residuos3 = ManzanasPicadas * (((14*100)/365)/100)
    let ManzanaMachacada = ManzanasPicadas - Residuos3;

    //Proceso 4
    let AzucarConstante = ManzanaMachacada / 2;

    let Manzanas = (Azucar * 436) / AzucarConstante;

    let Mermelada = Manzanas * (325/436);

    let Egreso = (Azucar * PrecioAzucar) + (Manzanas * PrecioManzana);
    let Ingreso = Mermelada * PrecioMermelada;

    return {"Manzanas":{"Kg":Manzanas, "Precio":Manzanas * PrecioManzana}, "Mermelada":{"Kg":Mermelada, "Precio": Mermelada * PrecioMermelada}, "Balance":{"Egresos": Egreso, "Ingreso":Ingreso, "Utilidad": Ingreso - Egreso}};
}


console.log(InputAzucar(100));
console.log(InputManzanas(500));
console.log(InputMermelada(500));


