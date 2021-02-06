function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(Error("Não pode ser feito uma divisão por zero"));
    
    const resultado = num1 / num2;
    resolve(resultado)
  });
  
  return promise;
}
const dividendo = 10;
const divisores = [1, 2, 3, 4, 5, 0];

async function calcula() {
  const promises = divisores.map(async (divisor) => {
    return await dividirNumeros(dividendo, divisor)
      .catch((err) => { return err.message });
  });
  
  const resultados = await Promise.all(promises);
  
  resultados.map((resultado) => {
    console.log(resultado);
  })
}

calcula();