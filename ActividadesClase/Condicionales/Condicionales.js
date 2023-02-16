//Ejercicio if

let edadActual = 18;

if(edadActual>=18){
    console.log('La entrada al club es valida');
}else{
    console.log('La entrada al club es invalida');
}

//Ejercicio for

let usuariosCafe = [
    {usuario: 'HectorCG', creacion: '2021', clave: 1223},
    {usuario: 'MiguelLM', creacion: '2022', clave: 1111},
    {usuario: 'JoseRT', creacion: '2020', clave: 1122},
    {usuario: 'OmarGG', creacion: '2023', clave: 3321},
]

for (i=0; i< usuariosCafe.length; i++){
    console.log('El nombre de usuario es: ' + usuariosCafe[i].usuario + ' el año de registro es: ' + usuariosCafe[i].creacion + ' y la clave es: ' + usuariosCafe[i].clave);
}

//Ejercicio Switch

let edad = 25;

switch(edad){
    case 18:
        console.log('Bienvenido a la edad adulta, tienes una entrada gratis');
        break;
    case 25:
        console.log('Un cuarto de siglo, Tienes todas las entradas al 50% de descuento');
        break;
    case 45:
        console.log('Bienveido, Este años tiene 2x1 todos los días');
        break;
    case 95:
        console.log('Bienvenido, Puedes entrar gratis a cualquier función');
        break;
    default:
        console.log('No tenemos descuentos para tu edad');
        break;
}

//const clave = 123;
//Ternario

//IF

//let acceso= (clave == 123 ? console.log(`Aprobado`) : console.log(`Denegado`));

//let clave = prompt('Ingrese clave: ');

//let acceso = (clave == 123 ? true : false);

//let edad = prompt('Ingrese su edad: ');
//if(edad>= 60){
//    alert('Usted tiene un descuento del 50% por ser de la tercera edad');
//}else if(edad >= 18){
//    alert('Usted tiene un descuent del 10% por ser mayor de edad'); 
//}else{
//    alert('Usted necesita un representante para pagar por ser menor de edad');
//}

//FOR


//WHILE


//let contador=1;

//while(contador<6){
//    console.log('Esta es la iteracion numero: ' + contador);
//    contador++;
//}

//DO WHILE

//do{
//    console.log('Esta es la iteracion numero: ' + contador);
//    contador++; 
//}
//while(contador<6);

//SWITCH