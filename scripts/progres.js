let progress = 0;
let botellas=0;

const QUINTO = document.querySelector('.buttons div[data-value="0.2"]');
const TERCIO = document.querySelector('.buttons div[data-value="0.33"]');
const JARRA = document.querySelector('.buttons div[data-value="0.5"]');
const LITRO = document.querySelector('.buttons div[data-value="1"]');



QUINTO.addEventListener('click', function(){
    beber(this);
})

TERCIO.addEventListener('click', function(){
    beber(this);
})

JARRA.addEventListener('click', function(){
    beber(this);
})

LITRO.addEventListener('click', function(){
    beber(this);
})

function beber (boton){
    let cerveza = document.getElementById("progress");
    progress += parseFloat(boton.dataset.value);
    if (progress < 100){
        cerveza.style.height = `${progress}%`;
    }else{
        progress=progress-100;
        cerveza.style.height= `${progress}%`;
        botellas++;
    }
    console.log((progress+botellas*100).toFixed(2)+" Litros");
}

