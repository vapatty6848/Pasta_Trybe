var pieceChess = "rei";


switch (pieceChess.toLowerCase()) {
    case  "rei":
        console.log('Rei-> Uma casa apenas para qualquer direção.');
        break;
    case "rainha":
        console.log("Rainha-> Quantas casas estiverem livres ou até tomar a posição de uma peça em qualquer direção");
        break;
    case "bispo":
        console.log("Bispo-> Quantas casa estiverem livres ou até tomar a posição de outra peça somente em diagonal");
        break;
    case "torre":
        console.log("Torre-> Quantas casas estiverem livres ou até tomar a posição de outra peça sempre na vertical ou horizontal");
        break;
    case "piao":
        console.log("Pião-> Segue apenas uma casa e apenas para frente, para tomar a posição de outra só em diagonal");
        break;
    case "cavalo":
        console.log("Cavalo-> O movimento se assemelha a um L");
        break;
    default:
        console.log("Erro !! Peça inválida");
        break;
}