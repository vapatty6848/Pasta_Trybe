var note = 100;

if(note > 100 || note < 0 ) {
    console.log("ERRO!!! Nota fora do padrão");
} else if ( note >= 90) {
    console.log("seu conceito foi A");
} else if ( note >= 80) {
    console.log("seu conceito foi B");
} else if ( note >= 70) {
    console.log("seu conceito foi C");
} else if ( note >= 60) {
    console.log("seu conceito foi D");
} else if ( note >= 50) {
    console.log("seu conceito foi E");
} else if ( note < 50){
    console.log("seu conceito foi F");
}