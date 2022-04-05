var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i<10; i++){
    console.log(numeros[i])
}

for (let i = 0; i<=4; i++){
    console.log(numeros[i])
}
 
for (let i = numeros.length; i>=5; i--){
    console.log(numeros[i])
}

for (let i = 0; i<10; i++){
    if (i === 3) {
        continue;    
    }
    console.log(numeros[i]);    
}
