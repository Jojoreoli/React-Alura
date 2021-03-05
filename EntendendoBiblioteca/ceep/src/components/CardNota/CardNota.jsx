import { Component } from "react";
import "./estilo.css";
import { ReactComponent as Deleteicon } from "../../Assets/deleteicon.svg";
// Ao importar o svg como um comonente importante usar letra maiuscula no começo

class CardNota extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota__cabecalho">
          <h3 className="card-nota__titulo">{this.props.titulo}</h3>
          <Deleteicon onClick={this.apagar.bind(this)}/>
        </header>
        <p className="card-nota__texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
