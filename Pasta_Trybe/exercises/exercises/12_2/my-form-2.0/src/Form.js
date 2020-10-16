import React, { Component } from 'react';
//Estado 
class Form extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    }
  }
  //sintaxe que busca todos os campos de forma genérica que manipula o estado
  handleChange({ target}) {
    const { name  } = target
    const value = target.type ==='checkbox' ? target.checkbox : target.value
    this.setState({ [name]: value })
  }
  // input 
  render() {
    return (
      <div>
        <h1>Curriculum</h1>
        <fieldset>
        <form className="form">
          <br />
          <label>
            Email
            <input name="email" maxLength="50" required type="email" 
             value={this.state.email} onChange={this.handle}/>
          </label>
          <br />
          <label>
            Nome
            <input name="nome" 
            type="text" maxLength="40" required 
            value={this.state.name}
            onChange={this.handle}
             />
          </label>
          <br />
          <label>
            CPF
            <input name="CPF" 
            type="number" maxLength="11" required 
            value={this.state.CPF}
            onChange={this.handle}
            />
          </label>
        </form>
        <br />
        <label>
          Endereço
          <input name="Endereço"
          type="text"  maxLength="200" required 
          value={this.state.Endereço}
          onChange={this.handle}
         />
          <select name="complemento">
            <option value="Apart">Apartamento</option>
            <option value="casa">casa</option>
          </select> 
        </label>
        <br />
        <label>
          Cidade
          <input name="Cidade" 
          placeholder="Cidade"
          type="text" maxLength="28" required 
          value={this.state.Cidade}
          onChange={this.handle}
          />
        </label>

        <label> 
          Estado:
          <select name="Estado">
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AM">Amazonas</option>
              <option value="AP">Amapá</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espirito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MG">Minas Gerais</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MT">Mato Grosso</option>
              <option value="PB">Paraíba</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piaui</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RO">Rondônia</option>             
              <option value="RN">Rio Grande do Norte</option>
              <option value="PR">Paraná</option>
              <option value="RR">Roraima</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="SE">Sergipe</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="TO">Tocantins</option>
              <option value="PA">Pará</option>
          </select>
          </label>
        </fieldset>
        <fieldset>
        <label>
            <h3>Curriculum</h3>
            <textarea name="curriculum" maxLength="500" required
            placeholder="Digite um resumo para seu curriculum" 
            value={this.state.estadoFavorito} 
            onchange={this.handleChange} />
            <br />
          </label>
        </fieldset>  
      </div>
    )
  }
}
export default Form;
/* 
Crie um <fieldset> para os dados pessoais a seguir:
Nome - Texto
Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
Email - Texto
CPF - Texto
Endereço - Texto
Remover qualquer caracter especial que seja digitado
Cidade - Texto
Ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.

Estado - ComboBox

Campo obrigatório.
Tipo - Radio Button
Casa, Apartamento
Campo obrigatório.
Crie outro <fieldset> para dados do seu último emprego:
Resumo do currículo - TextArea
Limite de 1000 caracteres
Campo obrigatório.
Cargo - TextArea
Limite de 40 caracteres
Quando o mouse passar por cima deste campo (evento onMouseEnter), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
Campo obrigatório
Descrição do cargo - Texto
Limite de 500 caracteres
Campo obrigatório
Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário.
Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
Por último, vá até o formulário que você criou na aula HTML & CSS - Forms e veja as diferenças no código.
  ref={register({
    required: "Enter your e-mail",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Enter a valid e-mail address",
    },
 <input name="Tipo"
   convertTextToUpperCase = () => {
    var text = this.state.defaultText;
    var uppercasetext = text.toUpperCase();//To convert Upper Case
    this.setState({ defaultText: uppercasetext });
  };
           type="checkbox" />
Bônus */