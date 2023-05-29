ramdomnun = Math.floor(Math.random() * (10 - 1 + 1) + 1)
console.log(ramdomnun)

var contador;

for (contador = 0; contador < 3; contador++){
escolhido = prompt("Adivinhe um numero de 1 a 10")
if (ramdomnun == escolhido){
    contador += 4;
    alert("Parabens! Voce acertou o numero aleatorio!")
}
else{
    alert("Voce errou, tente novamente.")
}
}

if (contador == 3){
    alert(`O numero aleatorio era ${ramdomnun}!`)
}

