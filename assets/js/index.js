console.log("********************SIMULADOR DE CAJERO************************");
console.log("* Considerando los billetes de $1, $2, $5, $10, $20, $50 $100 *");
console.log("* Se caculará la mínima cantidad de billetes a entregar       *");
console.log("***************************************************************");
let monto;
let cadena;
let cantidad = 0;
do {
    //solicitamos entrada de cadena
    cadena = prompt("Ingresa monto:");
    //convertimos cadena a numero
    monto = parseInt(cadena);
} while (Number.isNaN(monto) || (cadena.length != monto.toString().length));//mientras no sea un numero o si es un numero combinado con letras rechazamos
//funcion que nos retorna cantidad de billetes
function CantidadBilletes(monto,billete) {
    let cantidad = parseInt(monto / billete);
    if (cantidad>0) {
        console.log(cantidad + " billetes de $" + billete);
    }    
    return cantidad;
}
cantidad = cantidad + CantidadBilletes(monto,100);
monto = monto % 100;
cantidad = cantidad + CantidadBilletes(monto,50);
monto = monto % 50;
cantidad = cantidad + CantidadBilletes(monto,20);
monto = monto % 20;
cantidad = cantidad + CantidadBilletes(monto,10);
monto = monto % 10;
cantidad = cantidad + CantidadBilletes(monto,5);
monto = monto % 5;
cantidad = cantidad + CantidadBilletes(monto,2);
monto = monto % 2;
cantidad = cantidad + CantidadBilletes(monto,1);
monto = monto % 1;
console.log("Cantidad mínimo de billetes: " + cantidad);

console.log("****************SIMULADOR DE CAJERO PERSONALIZADO******************");
console.log("* Debe ingresar la cantidad de billetes a considerar en el cajero *");
console.log("* Debe ingresar el valor de cada billete de mayor a menor         *");
console.log("*******************************************************************");
let nroBilletes = 0;
let montoDinero = 0;
let billetes = [];
let billete;
let cantidad2 = 0;
do {
    //solicitamos entrada de cadena
    cadena = prompt("Ingresa cantidad de billetes:");
    //convertimos cadena a numero
    nroBilletes = parseInt(cadena);
//mientras no sea un numero o si es un numero combinado con letras rechazamos
} while (Number.isNaN(nroBilletes) || (cadena.length != nroBilletes.toString().length));
//Solicitamos y guardamos los billetes
for (let i = 0; i < nroBilletes; i++) {
    do {
        //solicitamos entrada de cadena
        cadena = prompt("Ingrese billete " + (i + 1));
        //convertimos cadena a numero
        billete = parseInt(cadena);
    //mientras no sea un numero o si es un numero combinado con letras rechazamos
    } while (Number.isNaN(billete) || (cadena.length != billete.toString().length));
    billetes[i] = billete;
}
do {
    //solicitamos entrada de cadena
    cadena = prompt("Ingresa monto:");
    //convertimos cadena a numero
    montoDinero = parseInt(cadena);
    //mientras no sea un numero o si es un numero combinado con letras rechazamos
} while (Number.isNaN(montoDinero) || (cadena.length != montoDinero.toString().length));
billetes.forEach(e => {
    cantidad2 = cantidad2 + CantidadBilletes(montoDinero,parseInt(e));
    montoDinero = montoDinero % (montoDinero,parseInt(e));
});
console.log("Cantidad mínimo de billetes: " + cantidad2);