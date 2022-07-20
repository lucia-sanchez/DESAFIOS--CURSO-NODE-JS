
const creditos = [
    {   nombre: "Plan 001",
        capital: 150000,
        plazo: 30,
	    tasa: 0.15
    },
    {   nombre: "Plan 002",
        capital: 300000,
        plazo: 180,
	    tasa: 0.1
    },
    {   nombre: "Plan 003",
        capital: 485000,
	    plazo: 60,
        tasa: 0.23
    }
];

let alternativasCredito = [];

for (let i = 0; i < creditos.length; i++) {
    let plan = creditos[i];
    let interes = (plan.capital * plan.plazo * plan.tasa) / 100;
    alternativasCredito.push({
        nombre: plan.nombre,
        capital: plan.capital,
        plazo: plan.plazo,
	    tasa: plan.tasa,
	    interes: interes
    });    
}

console.log(alternativasCredito)
