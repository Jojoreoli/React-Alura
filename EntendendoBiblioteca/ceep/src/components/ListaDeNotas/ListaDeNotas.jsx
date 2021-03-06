import { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {

  constructor() {
    super();
    this.state = {notas:[]};
    this._novasNotas = this._novasNotas.bind(this);
  }


  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this._novasNotas)
  }
  
  _novasNotas(notas) {
    this.setState({...this.state,notas})
  }

  render() {
    return (
      <ul className="listaDeNotas">
        {/* Abrindo um array para percorrer. JSX não permite for
        Passando o argumento nota na arrow function
        Para utilizar variáveis no JSX usar chaves */}
        {this.state.notas.map((nota, index) => {
          return (
            <li key={index} className="listaDeNotas__item">
              <CardNota
                indice={index}
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
