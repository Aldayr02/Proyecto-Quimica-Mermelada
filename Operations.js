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

    return {"Azucar":Azucar, "Mermelada":Mermelada};
}

function InputMermelada(Mermelada) {

    //Proceso 1
    let Manzanas = Mermelada * (436/325)
    let Residuos1 = Manzanas * (((44*100)/436)/100);
    let ManzanasPeladas = Manzanas - Residuos1;

    //Proceso 2
    let Residuos2 = ManzanasPeladas * (((22*100)/399)/100);
    let ManzanasPicadas = ManzanasPeladas - Residuos2;

    //Proceso 3
    let Residuos3 = ManzanasPicadas * (((14*100)/365)/100)
    let ManzanaMachacada = ManzanasPicadas - Residuos3;

    //Proceso 4
    let Azucar = ManzanaMachacada / 2;

    return {"Manzanas": Manzanas, "Azucar": Azucar}
    
}

function InputAzucar(Azucar) {
    //Proceso 1
    let ManzanasConstante = 436
    let Residuos1 = ManzanasConstante * (((44*100)/436)/100);
    let ManzanasPeladas = ManzanasConstante - Residuos1;

    //Proceso 2
    let Residuos2 = ManzanasPeladas * (((22*100)/399)/100);
    let ManzanasPicadas = ManzanasPeladas - Residuos2;

    //Proceso 3
    let Residuos3 = ManzanasPicadas * (((14*100)/365)/100)
    let ManzanaMachacada = ManzanasPicadas - Residuos3;

    //Proceso 4
    let AzucarConstante = ManzanaMachacada / 2;

    let Manzanas = (Azucar * 436) / AzucarConstante;

    let Mermelada = Manzanas * (325/436);

    return {"Manzanas": Manzanas, "Mermelada": Mermelada};
}

console.log(InputAzucar(100));
console.log(InputManzanas(500));
console.log(InputMermelada(500));


