// -------------------------------------EJERCICIOS PRACTICAR JAVASCRIPT---------------------------------------------------

console.log("Javascript is running!");
// alert("Javascript is running!");

// Comentarios line 
/* Comentarios bloque */

// Crear variable tipo let de nombre variableSinValor declarada sin valor
let variableSinValor=5;

console.log("Esto es el valor de la variable: ",variableSinValor);
console.log(`Esto es el valor de la variable: ${variableSinValor+2}`);


// Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos
let booleano1=false;
let booleano2=true;

console.log(`Esto es el valor del booleano1: ${booleano1}`);
console.log(`Esto es el valor del booleano2: ${booleano2}`);

// Crear variable tipo const de nombre PI declarada con valor 3.14
const PI=3.14;
console.log(`Esto es el valor del PI: ${PI}`);

// Crear variable tipo const de nombre TAU declarada con valor 2 veces PI
const TAU=2*PI;
console.log(`Esto es el valor de TAU: ${TAU}`);

// Crear variable tipo const de nombre miNombre declarada con valor tu nombre
const miNombre="Luis";
console.log("Mi nombre es: ",miNombre);

// Crear variable tipo const de nombre miNumeroFav declarada con valor numérico
const miNumeroFav=7;
console.log("Mi numero favorito es: ",miNumeroFav);

// Crea una variable de tipo booleano
let varBooleana=true;
console.log("La variable varBooleana es de tipo: ",typeof(varBooleana));

// Muestra por consola la longitud de la variable miNombre
console.log("La longitud de la variable miNombre es: ",miNombre.length);

// Muestra por consola el tipo de dato de la variable miNumeroFav
console.log("Mi numero favorito es de tipo: ",typeof(miNumeroFav));

// Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`);
console.log("Mi nombre es ",miNombre," y mi numero favorito es ",miNumeroFav);

// Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.
console.log("Seré un crack en JavaScript al terminar el bootcamp".toUpperCase());

let miTexto="Seré un crack en JavaScript al terminar el bootcamp";
let miTextoEnMayus=miTexto.toUpperCase();
console.log("Otra opcion es: ",miTextoEnMayus);

// Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”
let solo5Caracteres="Hola soy un crack";
console.log("Solo muestro los 5 primeros caracteres: ",solo5Caracteres.slice(0,5));
console.log("Solo muestro los 5 primeros caracteres: ",solo5Caracteres.slice(0));
console.log("Solo muestro los 5 primeros caracteres: ",solo5Caracteres.slice(5));
console.log("Solo muestro los 5 primeros caracteres: ",solo5Caracteres.substring(0,5));

// Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
let miNumeroFavToString=miNumeroFav.toString();
console.log(`Ahora la variable miNumeroFavToString es de tipo ${typeof(miNumeroFavToString)}`);
console.log("------------------GERE------------------Se necesita crear si o si una nueva variable? Al ser const?");
let numeroFavo=5;
console.log(`Mi numero FAV es ${numeroFavo} y es de tipo ${typeof(numeroFavo)}`)
numeroFavo="Hola";
console.log(`Ahora Mi numero FAV es ${numeroFavo} y es de tipo ${typeof(numeroFavo)} usando let`)

let miNumeroFavToString2=+"55555";
console.log(`Ahora la variable miNumeroFavToString es de tipo ${typeof(miNumeroFavToString2)} ${miNumeroFavToString2}`);

// Crea una variable, concaténala utilizando template literal, guarda el template literal en otra variable y sacala por consola.
let concatenaEjercicio="HOLA";
let concatenaEjercicioYLiteral=`${concatenaEjercicio} esto es una prueba de concatenar`;
console.log(concatenaEjercicioYLiteral);

// Muestra por consola la variable PI hasta los 2 primeros decimales
let valorDePI=Math.PI;
console.log("PI es :",valorDePI);
console.log(`Solo los dos primeros decimales de PI son: ${Math.trunc(valorDePI*100)/100}`);
console.log("------toFixed() redondea y pasa a tipo string, por lo que habria que usar parseFloat()-----");
console.log(`${typeof(+valorDePI.toFixed(2))}`)

const num1="24"
const num2="45"
console.log(num1+num2)

console.log(typeof(NaN))

// Crear variable de nombre arrayVacio cuyo valor sea un array vacío
let arrayVacio=[];
console.log(`La variable arrayVacio es de tipo ${typeof(arrayVacio)} y su valor es ${arrayVacio}`);

// Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
let arrayNumeros=[0,1,2,3,4,5,6,7,8,9];
console.log(`La variable arrayNumeros es de tipo ${typeof(arrayNumeros)} y su valor es ${arrayNumeros}`);

// Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)
let arrayNumeros2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(`La variable arrayNumeros2 es de tipo ${typeof(arrayNumeros2)} y su valor es ${arrayNumeros2}`);

// Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
let arrayNumerosPares=[0,2,4,6,8];
console.log(`La variable arrayNumerosPares es de tipo ${typeof(arrayNumerosPares)} y su valor es ${arrayNumerosPares}`);
console.log("-----------Asi o haciendo calculos??---------------");



console.log(arrayNumeros.length)
let arrayParNuevo=[]
for(let i=0;i<arrayNumeros.length;i++){
    if(i%2===0){
       console.log("Estoy en el IF",i) 
       arrayParNuevo.push(i)
    }
}
console.log(arrayParNuevo)






// Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
let arrayNumerosNeg=[0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
console.log(`La variable arrayNumerosNeg es de tipo ${typeof(arrayNumerosNeg)} y su valor es ${arrayNumerosNeg}`);

// Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
let holaMundo=["Hola","Mundo"];
console.log(`La variable holaMundo es de tipo ${typeof(holaMundo)} y su valor es ${holaMundo}`);

// Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo=["hola","que",23,42.33,"tal"];
console.log(`La variable loGuardoTodo es de tipo ${typeof(loGuardoTodo)} y su valor es ${loGuardoTodo}`);



console.log(`La variable loGuardoTodo es de tipo ${typeof(loGuardoTodo[2])} y su valor es ${loGuardoTodo[2]}`);

// Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays=[[756,"nombre"],[225,"apellido"],[298,"direccion"]];
console.log(`La variable arrayDeArrays es de tipo ${typeof(arrayDeArrays)} y su valor es ${arrayDeArrays}`);
console.log("!!!!!!!!")
console.log(`${arrayDeArrays[2][0]}`)

// Muestra por consola la longitud del array “arrayDeArrays”
console.log(`La longitud del array arrayDeArrays es ${typeof(arrayDeArrays[1][0].toString().length)}`);

// Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola
let valorNuevoArray="valor nuevo";
loGuardoTodo.push(valorNuevoArray);
console.log(`El valor de loGuardoTodo usando 'push' es ${loGuardoTodo}`);
console.log(`La longitud del array loGuardoTodo es ${loGuardoTodo.length}`);
loGuardoTodo.unshift(valorNuevoArray);
console.log(`El valor de loGuardoTodo usando 'unshift' es ${loGuardoTodo}`);
console.log(`La longitud del array loGuardoTodo es ${loGuardoTodo.length}`);

// Ordena de mayor a menor la variable arrayNumeros y muestrala por consola
const arrayAleatorio=[5,3,6,3,9,8,6,1,10]
console.log(`Mi array es: ${arrayAleatorio}`)
const arrayOrdenado=arrayAleatorio.sort(function (a, b) {
  return a - b;
});
console.log(`El array ordenado de mayor a menor queda: ${arrayOrdenado}`)


// Ordena de menor a mayor la variable arrayNumeros2 y muestrala por consola
/* Igual pero Usando b-a */

// Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo
console.log(`${loGuardoTodo[2]}`)

// Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola
console.log(`${loGuardoTodo}`)
const resultado=loGuardoTodo.push("Euralio")
console.log(`Voy a añadir Euralio al array loGuardoTodo asin : ${loGuardoTodo}`)
console.log(resultado)

// Documentación que puedes buscar para resolverlos: Variables, Tipos de datos, Metodos para strings, numeros y arrays, Arrays


// -------------------------------------- Próximos ejercicios --------------------------------------

// Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores
const coche={
    marca:"BYD",
    modelo:"EldelGer",
    matricula:"8954TXS",
    color:"azul"
}
console.log(coche,typeof(coche))


// Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores
const casa={
    codPostal:46300,
    calle:"las casas",
    portal:12,
    piso:3
}
console.log(casa,typeof(casa))


// Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)
const fullStackDeveloper={
    lenguajes:["javascript","php"],
    proyectos:["Mi primera chamba","Hola Mundo"]
}
console.log(fullStackDeveloper,typeof(fullStackDeveloper))


// Muestra por consola el lenguaje javascript de la variable FullStackDeveloper
console.log(fullStackDeveloper.lenguajes[0])
console.log(fullStackDeveloper["lenguajes"][0])


// Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola
const concierto={
    grupos:["Ska-p","ItacaBand"]
}
console.log(concierto.grupos)

// Crea un objeto de nombre Led, con las propiedades: rojo, verde y azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola
const led={
    rojo:"rojo",
    verde:"verde",
    azul:"azul"
}
const RGB=[led.rojo,led.verde,led.azul]
console.log(RGB)


// Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola
const impresora={
    tinta:{rojo:"rojo",verde:"verde",azul:"azul"}
}
console.log(impresora)

/* const impresora2={
    tinta:{rojo,verde,azul}
}
console.log(impresora2)
 */
const nivelesTinta={
    rojo:impresora.tinta.rojo,
    verde:impresora.tinta.verde,
    azul:impresora.tinta.azul
}
console.log(nivelesTinta)

// Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola
const movil={
    especificaciones:"realme 19"
}
const especificaciones=movil["especificaciones"]
console.log(especificaciones)


// Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado
const portatil={
    marca:"hp"
}
console.log(portatil)
portatil.marca="MSI"
console.log(portatil)

// Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado
console.log(concierto)
concierto.grupos.push("Guns N' Roses")
console.log(concierto)
console.log("OJOOOO esta usando el mismo espacio de memoria, por lo que chafa el objeto concierto")

// Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy), consolea el resultado
concierto.fecha=20102024
console.log(concierto)
let newDate=Date()
console.log(newDate)
concierto.fecha=newDate
console.log(concierto)

// Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)
const grupo={
    integrantes:["guitarra","bateria","voz","trompeta"]
}
console.log(grupo)
grupo.integrantes.shift()
console.log(grupo.integrantes.length)


// Documentación que puedes buscar para resolverlos: Objetos, como acceder a objetos, como modificar objetos 


/* ------ Lógica booleana ------ */
// Dados 2 variables booleanas:
const bool1=true;
const bool2=true
console.log(bool1,bool2)

// Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 and booleano2
const booleanoAnd=bool1 && bool2
console.log(booleanoAnd)

const booleanoAnd2=bool1 && bool2 && "Hola"
console.log("!!!!!!!",booleanoAnd2)

// Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1 or booleano2
const booleanoOr=bool1 || bool2
console.log(booleanoOr)

// Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1
const booleanoNot=!bool1
console.log(booleanoNot)

// Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
const booleanoMix0=(bool1||bool2)&&(bool1||(!bool1&&!bool2))
console.log(booleanoMix0)

console.log("Valor de Boolean",Boolean(!!"Hola"),Boolean(undefined),Boolean([]),Boolean({}))

// -----------------------------------
// Crear variable valorDivisión cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado
const valorDivision=Math.trunc((17/3)*100)/100
console.log(valorDivision)

// Crear variable valorResto cuyo valor sea el resto de 17 entre 7
const valorResto=17%7
console.log(valorResto)


// ----------------PRUEBA DE BUCLES-------------------
const listaCompra=["manzana","macarrones",45,true,"patata"]

for(let i=0;i<listaCompra.length;i++){
    console.log(listaCompra[i])
}

for (const key in listaCompra) {    
    console.log(listaCompra[key],key)
}

for (const element of listaCompra) {
    console.log(element)
}

listaCompra.forEach((element,index) => {
    console.log("ForEach",element,index)
});


// Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?
const A=9;
const B="9";
if(A===B){
    console.log("Son iguales")
} else {
    console.log("No son iguales o no es el mismo tipo de dato")
}


// Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”
const mochila=[1,2]
if(mochila.length > 10){
    console.log("No puedo cargar con tantas cosas")
} else if (mochila.length >= 2 && mochila.length<=10){
    console.log("Que bien voy con mi mochila")
} else {
    console.log("Creo q no necesito una mochila")
}

// Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10
let contarHasta10=0;
for(let i=0;i<10;i++){
    // console.log(i)
    contarHasta10+=1
    // contadorHasta10 = contadorHasta10 + 1
    // console.log(valorNuevo)
    if(contarHasta10===10){
        console.log("contarHasta10 vale: ",contarHasta10)
    }
}
console.log(contarHasta10)


const array=["Hola","como","estas"]
let string=""
for(let i=0;i<array.length;i++){
  console.log(i)
  console.log(array[i])
  string = string  + array[i] + " "
}

// Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’


// Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle


// Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado


// Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos


// Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3


// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.


// Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.


// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’



