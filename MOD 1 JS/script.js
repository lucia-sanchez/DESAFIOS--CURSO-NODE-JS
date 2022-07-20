
let costosFijos =parseInt(prompt('Ingrese los costos Fijos: '));

let costosVariables = parseInt(prompt('Ingrese los Costos Variables: '));

let precioVenta = parseInt(prompt('Ingrese el precio de venta: '));

let puntoEquilibrio = costosFijos / (precioVenta - costosVariables);

alert(`Debería realizar ${puntoEquilibrio} ventas por mes`)