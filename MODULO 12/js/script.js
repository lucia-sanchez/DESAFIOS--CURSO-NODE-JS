
let edad = Number(prompt('Ingrese su Edad: '));

if(edad >= 18){
    alert('Bienvenido!')
}
else{
alert('Error! No es posible acceder')    
};

let usuario = prompt('Ingrese su Usuario:');
if(usuario != 'admin'){
    alert('Usuario no encontrado')
}
else{
    let clave = prompt('Ingrese su contraseña')
    if(clave ==1234){
       alert ('Bienvenido')
    }
    else{
        alert('Contraseña Incorrecta')
    }
}