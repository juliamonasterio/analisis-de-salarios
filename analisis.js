//Funciones Helper


function esPar(numero){
    return numero%2===0
 }
 
 function calcularMediaAritmetica(lista){
 
     let suma=0;
 
     
     //Con reduce recorre el array y hace lo que la funcion indique
     suma= lista.reduce(
         function (valorAcumulado=0, elementoActual){
 
             return valorAcumulado+elementoActual; })
 
             return (suma/lista.length);
 }
 

//Lista solo con los salarios

const listSalarios = colombia.map(function (persona){
    return persona.salary;
})

console.log(listSalarios);

const lisSalariosOrd = listSalarios.sort(function(salario1,salario2){
  return  salario1-salario2;

})


//Calcula de mediana normal

function esCalcularMediana(lista){

    let mitadLista = parseInt(lista.length/2);

    if(esPar(lista.length)){

        let elemento1= lista[mitadLista];
        let elemento2 = lista[mitadLista-1];
        return calcularMediaAritmetica([elemento1,elemento2])

    }else{

        return lista[mitadLista];

    };

}


const medianaGeneralColombia = esCalcularMediana(lisSalariosOrd);

//Mediana de TOP 10%

//Splice realiza el corte de un array quitando los elementos que indicamos
//. El primer parametro indica desde donde queremos hacer el corte. 
//El segundo argumento es cuantas tajadas queremos que saque
//Por ejemplo array[1,2,3,4,5,6] si hacemos splice(2,5) deja el array con array[1,2]

let spliceStart= parseInt((lisSalariosOrd.length*90)/100);
let spliceCount= parseInt(lisSalariosOrd.length-spliceStart);

const salariosTop10Col = lisSalariosOrd.splice(spliceStart,spliceCount);


console.log(esCalcularMediana(salariosTop10Col));
