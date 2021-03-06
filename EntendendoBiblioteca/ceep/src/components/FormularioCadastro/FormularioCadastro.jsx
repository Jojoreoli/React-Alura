import { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  // props é o que está vindo da propriedade (criarNota la do app js)
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Nota";
    this.state = {categorias: []};
    // Colocar no constructor igualiza a referencia para ambas as funcs
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }
  
  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias})
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
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  render() {
    return (
      <form className="formulario" onSubmit={this._criarNota.bind(this)}>
        {/* Necessario usar o bind por conta do this dinamico */}
        <select
          onChange={this._handleMudancaCategoria.bind(this)}
          className="formulario__input"
        >
          <option>Nota</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="formulario__input"
          onChange={this._handleMudancaDeTitulo.bind(this)}
        />
        <textarea
          rows={5}
          placeholder="Escreva sua nota"
          className="formulario__textarea"
          onChange={this._handleMudancaDeTexto.bind(this)}
        />
        <button className="formulario__button">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
