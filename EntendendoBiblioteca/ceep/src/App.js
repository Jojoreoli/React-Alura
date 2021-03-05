import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";
import { Component } from "react";
import "./Assets/App.css";

class App extends Component {
  constructor() {
    super();
    // declarando o estado inicial
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    // Colocando o array de notas em uma variavel para facilidade de manipulação
    let arrayNotas = this.state.notas;
    // Deletando com o splice
    arrayNotas.splice(index, 1);
    // Substituindo o array pelo array deletado
    this.setState({ notas: arrayNotas });
  }

  adicionarCategoria(nomeCategoria) {
    // O spread operator adiciona no array o que vem depois da virgula
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = { ...this.state, categorias: novoArrayCategorias };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        {/* criarNota é uma propriedade customizada, passada para poder chamar um método da classe pai dentro da filha */}
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeCategorias
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias}
        />
        <ListaDeNotas
          apagarNota={this.deletarNota.bind(this)}
          notas={this.state.notas}
        />
      </section>
    );
  }
}

export default App;
