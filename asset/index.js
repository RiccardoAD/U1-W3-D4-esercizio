
const creazioneCelle = function (cell) {
    const cellaContenuto =document.getElementById("tombolaInCelle")

    for (let i = 1; i <=76 ; i++) {
        const divCella=document.createElement("div");  // creo i div cellaa dell tombola
        divCella.className= "cellette";
        const numeroCelle=document.createElement("h4"); // metto in ogni cella i numeri 
        numeroCelle.innerText=i;
        divCella.appendChild(numeroCelle);
        cellaContenuto.appendChild(divCella);


    };
    
    
}

const button=document.getElementById("button")  

button.onclick=function () {
    
    
    const celle=document.querySelectorAll("cellette") 
    const num=Math.floor(Math.random()*76)
    const celleRandom=celle[num]
    console.log(celleRandom);
    celleRandom.style.backgroundColor= "green"
    
    
}
    
    

 window.onload=function (){
    creazioneCelle ();
 }