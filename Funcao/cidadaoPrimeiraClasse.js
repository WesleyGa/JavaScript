// criar de forma literal

function fun1(){

}

// Armazenar em uma variável

const fun2 = function(){}

// Armazenar em um array

const array =  [function (a,b) {return a + b}, fun1, fun2 ];
console.log(array[0](1,2));
 
// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function () {return console.log('Opa')}

obj.falar();

// Passar função como paramêtro
function run(fun){
     fun() 
}

// Uma função pode retornar/conter uma função

function soma (a,b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma (10,20)(2);



  