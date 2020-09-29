//Leer un txt
var fs = require('fs');//Modulo que nos permite leer archivos

var Frase = fs.readFileSync("Frase.txt").toString();//Obtenemos la frase escrita en el txt y lo convertimos en cadena
console.log("Texto del archivo: ", Frase); //Mostramos en pantalla el contenido del txt

//Separar la cadena y almacenarla
var separador = ",";    //Delimitador para separar las palabras
var Correcto = ['Que', 'onda', 'primo', 'como', 'estamos', '?'];  //Frase correcta
var aux = "";   //Auxiliar 

var FraseDesordenada = Frase.split(separador); //Frase del txt separada por palabras
var FraseDesordenadaaux = Frase.split(separador);   //Frase del txt separada en un auxiliar para evitar que desaparezcan las palabras

//Ordenar arreglo
for (var i = 0; i < FraseDesordenada.length; i++){
    for (var j = 0; j < FraseDesordenada.length; j++){
        if(FraseDesordenada[i] === Correcto[j]){    //El arreglo en la posición i se compara con la posición j del arreglo "correcto", si son iguales...
            FraseDesordenadaaux[j] = Correcto[j];   //El arreglo auxiliar en la posicion j, guarda la palabra del arreglo "correcto" que se está evaluando en ese momento 
        }
    }
}

//Imprimimos el arreglo
for (var i = 0; i < FraseDesordenada.length; i++){
    aux = aux + FraseDesordenadaaux[i]; //Utilizando un auxiliar, guardamos cada palabra ordenada previamente por los ciclos for anteriores
    aux = aux + " ";    //Colocamos entre cada palabra un espacio en blanco, para que no se junten las palabras
}

console.log("Texto ordenado", aux); //Imprimimos a pantalla cada palabra de la oración ya ordenada
