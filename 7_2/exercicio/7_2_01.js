
/* Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
 function addTurno  ( ) {
   lesson2.turno="manhã";
 }

 console.log(Object.entries(lesson2));
/* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */

function listKeys (lesson) {
  console.log(Object.keys(lesson));
}

/* Crie uma função para mostrar o tamanho de um objeto. */ 
function lengthObj (lesson ) {
  const lenObj = Object.keys(lesson).length;
  return lenObj;
}

 addTurno();
 let lesson = listKeys(lesson2);
 let retsult = lengthObj(lesson3);
 console.log(retsult);