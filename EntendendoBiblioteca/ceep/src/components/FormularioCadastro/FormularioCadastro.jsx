import { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

  // props é o que está vindo da propriedade (criarNota la do app js)
  constructor(props) {
    super(props);
    this.titulo= "";
    this.texto= "";
  }

  _handleMudancaDeTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaDeTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    console.log("Hello world " + this.titulo + " " + this.texto);
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="formulario" onSubmit={this._criarNota.bind(this)}>
        {/* Necessario usar o bind por conta do this dinamico */}
        <input type="text" placeholder="Título" className="formulario__input" onChange={this._handleMudancaDeTitulo.bind(this)}/>
        <textarea rows={5} placeholder="Escreva sua nota" className="formulario__textarea" onChange={this._handleMudancaDeTexto.bind(this)}/>
        <button className="formulario__button">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;