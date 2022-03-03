'use strict'

/* P U N T O  1
Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";
function wordCutter(word) {

    const wordLength = word.length;
    const indexes = [];
        for(let index = 0; index < wordLength; index++){
            let isIndex = true;
    
            while (isIndex){
                let random = Math.random()*(wordLength-1);
                let randomIndex = Math.round(random);  
    
                if(indexes.includes(randomIndex)){
                    random = Math.random()*(wordLength-1);
                    randomIndex = Math.round(random);
    
                }else{
                    indexes.push(randomIndex)
                    isIndex = false;
    
                }
            }
            
            console.log(word[indexes[index]])
    
        }
    }
    
    

wordCutter("esternocleidomastoideo");


/* P U N T O  2
Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];



// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(baseWord, listOne) {

    let listTwo = listOne.map(element => element.toLowerCase());
    baseWord= baseWord.toLowerCase();
    baseWord= normalizeString(baseWord);

    console.log(listTwo)
    console.log(listTwo.some(element => baseWord.toLowerCase() === element ))
    
}


function normalizeString (baseWord) {

    return baseWord = baseWord.normalize ("NFD").replace(/[\u0300-\u036f]/g,"");

}

wordSearcherIgnoreCase(testTargetWordA,testWordsList);
wordSearcherIgnoreCase(testTargetWordB,testWordsList);
wordSearcherIgnoreCase(testTargetWordC,testWordsList);



/* P U N T O  3
Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    // :)
}


/* P U N T O  4
Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
   // :)
}


/* P U N T O  5
Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}
function lettersCounter(objectContainer) {
   // :)
}


/* P U N T O  6
Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
 // :)
}


/* P U N T O  7
Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
   // :)
}

/* P U N T O  8
Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    // :)
}

console.log(vocalsRemoverFromObject(testObjMultiContainer));

/* P U N T O  9
Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];


function lastVocalReplacer(word) {
    
}

lastVocalReplacer()


/* P U N T O  10
Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    // :)
}