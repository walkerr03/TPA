function calcularImc() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const nome = document.getElementById("nome");
    
    
    
    const calculoImc = (peso/(altura**2)).toFixed(2);
  
    if (calculoImc < 17) {
      document.getElementById("imc").innerHTML = `Olá ${nome.value}, seu IMC é ${calculoImc}. `; 
      document.getElementById("res").innerHTML = "Muito abaixo do peso";
  
    } else if (calculoImc >= 17 && calculoImc <= 18.49) {
      document.getElementById("imc").innerHTML = `Olá ${nome.value}, seu IMC é ${calculoImc}. `;
      document.getElementById("res").innerHTML = "Abaixo do peso";
    } else if (calculoImc >= 18.5 && calculoImc <= 24.99) {
      document.getElementById("imc").innerHTML = `Olá ${nome.value}, seu IMC é ${calculoImc}. `;
      document.getElementById("res").innerHTML = "Peso Normal";
    } else if (calculoImc >= 25 && calculoImc <= 29.99) {
      document.getElementById("imc").innerHTML = `Olá ${nome.value}, seu IMC é ${calculoImc}. `;
      document.getElementById("res").innerHTML = "Acima do peso";
    } else if (calculoImc >= 30 && calculoImc < +34.99) {
      document.getElementById("imc").innerHTML = `Olá ${nome.value}, seu IMC é ${calculoImc}. `;
      document.getElementById("res").innerHTML = "Obsidade grau 1";
    } else if (calculoImc >= 35 && calculoImc <= 39.99) {
      document.getElementById("imc").innerHTML = `Olá ${nome.value}, seu IMC é ${calculoImc}. `;
      document.getElementById("res").innerHTML = "Obsidade grau 2 (servera)";
    } else if (calculoImc > 40) {
      document.getElementById("imc").innerHTML = `Olá ${nome.value}, seu IMC é ${calculoImc}.`;
      document.getElementById("res").innerHTML = "Obsidade grau 3 (morbida)";
    }
  
    
  }