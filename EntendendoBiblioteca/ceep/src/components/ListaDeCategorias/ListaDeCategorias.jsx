import { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleEventoInput(evento) {
    console.log(evento.key);
    if (evento.key === "Enter") {
      let valorCategoria = evento.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="listaDeCategorias">
        <input
          onKeyUp={this._handleEventoInput.bind(this)}
          className="listaDeCategorias__input"
          type="text"
          placeholder="Adicionar Categoria"
        />
        <ul className="listaDeCategorias__ul">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="listaDeCategorias__li">
                {categoria}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
export default ListaDeCategorias;
