import { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="listaDeNotas">
        {/* Abrindo um array para percorrer. JSX não permite for
        Passando o argumento nota na arrow function
        Para utilizar variáveis no JSX usar chaves */}
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index} className="listaDeNotas__item">
              <CardNota titulo={nota.titulo} texto={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;