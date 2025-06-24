// Mostrar campos según método de pago

document.addEventListener('DOMContentLoaded', function() {
    // Se crean las variables para los elementos del formulario
    const metodo = document.getElementById('metodo-pago');
    const tarjeta = document.getElementById('pago-tarjeta');
    const mp = document.getElementById('pago-mercadopago');
    const efectivo = document.getElementById('pago-efectivo');
    
    metodo.addEventListener('change', function() {
        // Asigna display: block si el value de metodo equivale a tarjeta, mercadopago o efectivo
        // Caso contrario, asigna display: none
        tarjeta.style.display = this.value === 'tarjeta' ? 'block' : 'none';
        mp.style.display = this.value === 'mercadopago' ? 'block' : 'none';
        efectivo.style.display = this.value === 'efectivo' ? 'block' : 'none';
    });
});

// Calculo de precio de entradas

const precioEntrada = 6500
const precioEntradaBonificada = 5000

document.getElementById('form-entradas').addEventListener('submit', function (e) {
    e.preventDefault();

    const cantidadEntradas = parseInt(document.getElementById("cantidad-entradas").value)

    let precioCompra = 0 // Inicializa variable

    if (cantidadEntradas < 4) {
        precioCompra = cantidadEntradas * precioEntrada
    } else {
        precioCompra = 4 * precioEntradaBonificada // Suma el precio de 4 entradas bonificadas
        precioCompra += (cantidadEntradas-4) * precioEntrada // Suma el precio del resto de entradas en el caso de existir (si no hay mas multiplica por cero)
    }

    const confirmaCompra = prompt(
        "El valor de su compra es: $" + precioCompra +
        "\n(Cantidad de entradas: " + cantidadEntradas + ")." +
        "\n\n¿Desea realizar la compra? Ingrese SI"
    );

    if (confirmaCompra && confirmaCompra.toLowerCase() === "si") {
        alert("¡Compra realizada con éxito!\n\nSi seleccionó pago en efectivo, se le enviará un email con su código de compra para abonar en boletería.")
    } else {
        alert("No se realizó la compra.")
    }
});