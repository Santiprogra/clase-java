//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio* porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const ixxnputPrice = document.getElementById(InputPrice);
    const priceValue = InputPrice.value;

    const inputDiscount = document.getElementById(InputDiscount);
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,  discountValue);
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText="El precio con descuento son: $" + precioConDescuento;
}


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/
