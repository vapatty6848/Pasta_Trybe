var costProduct = 150;
var saleValue = 350;
var diffProductValue = 0;
if(costProduct <= 0 || saleValue <= 0) {
    console.log("ERRO!! valores não aceitos");
} else {
    diffProductValue = (saleValue - costProduct) * 1000 * 0.20;
}
console.log(diffProductValue);