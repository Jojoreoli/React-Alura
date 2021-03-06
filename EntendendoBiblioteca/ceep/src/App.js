import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";
import { Component } from "react";
import "./Assets/App.css";
import Categorias from "./Dados/Categorias";
import ArrayDeNotas from "./Dados/Notas";
import "./Assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        {/* criarNota é uma propriedade customizada, passada para poder chamar um método da classe pai dentro da filha */}
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <ListaDeCategorias
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          categorias={this.categorias}
        />
        <ListaDeNotas
          apagarNota={this.notas.apagarNota.bind(this.notas)}
          notas={this.notas}
        />
      </section>
    );
  }
}

export default App;
