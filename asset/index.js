
const creazioneCelle = function (cell) {
    const cellaContenuto =document.getElementById("tombolaInCelle")

    for (let i = 1; i <=76 ; i++) {
        const divCella=document.createElement("div");  // creo i div cellaa dell tombola
        divCella.className= "cellette";
        const numeroCelle=document.createElement("h4"); // creo variabile contenente h4 con i numeri
        numeroCelle.innerText=i;                     // metto h4 interno alle celle 
        divCella.appendChild(numeroCelle);    
        cellaContenuto.appendChild(divCella);


    };
    
    
}

const button=document.querySelector("#button") 



button.onclick = ()=> {
    
    
    const numRandom=Math.floor(Math.random()*76) //genero un variabile che contiene il numero random
    const arrayCelle=document.querySelectorAll(".cellette") // creo un erray delee cellette della tombola 
     const numEstratto=arrayCelle[numRandom-1]   // nem estratto è il nodo elemento ,-1 perchè il con delerray parte da 1  e li confronto
     console.log(numRandom, arrayCelle[numRandom-1]);
     numEstratto.style="background-color: green"; // ora che ho il nodo posso modificare lo style 
    
    
    
    
}
    
    

 window.onload=function (){
    creazioneCelle ();
 }