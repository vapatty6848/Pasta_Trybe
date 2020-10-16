import React from 'react';
import './App.css';


/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
/* function handleClick() {
  console.log('Clicou no botão!')
} */

/* class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` 
  
   render() {
  }
  return <button, onClick={handleClick}>Meu botão1</button> */
  class App extends React.Component {
    constructor() {
      super()
      /* / A função `super()` é chamada para garantir que a lógica interna do
       React rode **antes** da sua. Se não for assim, o código não funcionará */
       /* Se você definir uma função da classe com uma arrow function, com a sintaxe minhaFuncao = () => {...}, você não precisará fazer o bind no constructor, mas sua aplicação será menos performática! Se quiser ler mais a respeito, busque o texto "Binding vs arrow-function (for react onClick event)" nos Recursos Adicionais! */
      console.log('Componente sendo construido')
      this.handleClick = this.handleClick.bind(this)
      //linha acima para o handle enxergar o this eesa função esta ligada ao this
      this.state = {
        numberClick: 0
      }
      // estado
    }
    handleClick() {
      console.log(this)
      console.log('clicou')
     /*  aqui eu atualizo meus clicks
         this.setState não tem = inicio - chave e parentesis
         numberClick: 1
      chave e parenteses - essa é a forma passado por parametro */

      this.setState((stateBefore, _props) => ({
        numberClick: stateBefore.numberClick + 1} ))
    }
    render() {
      console.log(this)

    return<button onClick={this.handleClick}>{this.state.numberClick}</button>
      // aqui posso acessar o estado no state <estava o botao da forma acima fica um contador
    }
  }
  


export default App;


