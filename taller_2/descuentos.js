
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function precioDescuento() {
    const inputPrecio = document.getElementById("precio");
    const precioValue = inputPrecio.value;
    const inputDescuento = document.getElementById("descuento");
    const descuentoValue = inputDescuento.value;
    const precioConDescuento = calcularPrecioConDescuento(precioValue, descuentoValue);
    
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}