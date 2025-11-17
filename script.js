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

// Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable
let miNumeroFavToString=miNumeroFav.toString();
console.log(`Ahora la variable miNumeroFavToString es de tipo ${typeof(miNumeroFavToString)}`);
console.log("------------------GERE------------------Se necesita crear si o si una nueva variable? Al ser const?");
let numeroFavo=5;
console.log(`Mi numero FAV es ${numeroFavo} y es de tipo ${typeof(numeroFavo)}`)
numeroFavo="Hola";
console.log(`Ahora Mi numero FAV es ${numeroFavo} y es de tipo ${typeof(numeroFavo)} usando let`)

// Crea una variable, concaténala utilizando template literal, guarda el template literal en otra variable y sacala por consola.
let concatenaEjercicio="HOLA";
let concatenaEjercicioYLiteral=`${concatenaEjercicio} esto es una prueba de concatenar`;
console.log(concatenaEjercicioYLiteral);

// Muestra por consola la variable PI hasta los 2 primeros decimales
let valorDePI=Math.PI;
console.log("PI es :",valorDePI);
console.log(`Solo los dos primeros decimales de PI son: ${Math.trunc(valorDePI*100)/100}`);
console.log("------toFixed() redondea y pasa a tipo string, por lo que habria que usar parseFloat()-----");

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

// Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
let arrayNumerosNeg=[0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
console.log(`La variable arrayNumerosNeg es de tipo ${typeof(arrayNumerosNeg)} y su valor es ${arrayNumerosNeg}`);

// Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
let holaMundo=["Hola","Mundo"];
console.log(`La variable holaMundo es de tipo ${typeof(holaMundo)} y su valor es ${holaMundo}`);

// Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo=["hola","que",23,42.33,"tal"];
console.log(`La variable loGuardoTodo es de tipo ${typeof(loGuardoTodo)} y su valor es ${loGuardoTodo}`);

// Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays=[[756,"nombre"],[225,"apellido"],[298,"direccion"]];
console.log(`La variable arrayDeArrays es de tipo ${typeof(arrayDeArrays)} y su valor es ${arrayDeArrays}`);

// Muestra por consola la longitud del array “loGuardoTodo”
console.log(`La longitud del array loGuardoTodo es ${loGuardoTodo.length}`);

// Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola
let valorNuevoArray="valor nuevo";
loGuardoTodo.push(valorNuevoArray);
console.log(`El valor de loGuardoTodo usando 'push' es ${loGuardoTodo}`);
console.log(`La longitud del array loGuardoTodo es ${loGuardoTodo.length}`);
loGuardoTodo.unshift(valorNuevoArray);
console.log(`El valor de loGuardoTodo usando 'unshift' es ${loGuardoTodo}`);
console.log(`La longitud del array loGuardoTodo es ${loGuardoTodo.length}`);

// Ordena de mayor a menor la variable arrayNumeros y muestrala por consola


// Ordena de menor a mayor la variable arrayNumeros2 y muestrala por consola

// Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo

// Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola

// Documentación que puedes buscar para resolverlos: Variables, Tipos de datos, Metodos para strings, numeros y arrays, Arrays


// -------------------------------------- Próximos ejercicios --------------------------------------

// Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores

// Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores

// Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)

// Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores

// Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores

// Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores

// Muestra por consola el nombre de la variable Persona

// Muestra por consola el lenguaje javascript de la variable FullStackDeveloper

// Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola

// Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola

// Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola

// Crea un objeto de nombre Led, con las propiedades: rojo, verde y azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola

// Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola

// Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes

// Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola

// Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola

// Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado

// Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado

// Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy), consolea el resultado

// Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)

// Documentación que puedes buscar para resolverlos: Objetos, como acceder a objetos, como modificar objetos 



