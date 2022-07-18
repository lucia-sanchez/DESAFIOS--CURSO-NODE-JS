
let ingreso = Number(prompt('Ingrese su Ingreso Mensual: '));

let gastosNecesarios = ingreso *0.5;

let gastosOpcionales = ingreso *0.3;

let ahorroInversion = ingreso *0.2;

alert(`Usted debe dedicar $ ${gastosNecesarios} para utilizar en  Gastos Necesarios $ ${gastosOpcionales} para Gastos Opcionales y $ ${ahorroInversion} para Ahorros e Inversión`)