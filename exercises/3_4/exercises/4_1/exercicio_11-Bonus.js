var aliqInss = 0;
var salariobruto = 6200.00;
var aliqImpRenda = 0;
if (salariobruto <= 1556.94) {
    aliqInss = salariobruto * 0.08;
} else if (salariobruto <= 2594.92) {
    aliqInss = salariobruto * 0.09;
} else if (salariobruto <= 5189.82) {
    aliqInss = salariobruto * 0.11;
} else if (salariobruto > 5189.82) {
    aliqInss = 570.88;
}
 var salariobruto2 = salariobruto - aliqInss;
if(salariobruto2 <= 1903.98){
    aliqImpRenda = 0;
} else if (salariobruto2 <= 2826.65) {
    aliqImpRenda =salariobruto * 0.075 - 142.80;
} else if (salariobruto <=  3751.05 ) {
    aliqImpRenda = salariobruto2 * 0.15 - 354.80;
} else if (salariobruto <= 4664.68) {
    aliqImpRenda = salariobruto2 * 0.225 - 636.13;
} else if (salariobruto > 4664.68) {
    aliqImpRenda = salariobruto2 * 0.275 - 869.36;
}
console.log("seu salario é  $ " + salariobruto);
console.log("seu desconto de INSS é de  $ " + aliqInss);
console.log("seu salario Bruto é $ " + salariobruto2);
console.log("seu desconto de Imposto de renda é $ " + aliqImpRenda);
console.log("Você receberá descontando o Imposto $ " + (salariobruto2 - aliqImpRenda));
