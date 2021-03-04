import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Component } from "react";
import "./Assets/App.css";

class App extends Component {
  
  constructor() {
    super();
    // declarando o estado inicial 
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo,texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }
  
  render() {
    return (
      <section className="conteudo">
        {/* criarNota é uma propriedade customizada, passada para poder chamar um método da classe pai dentro da filha */}
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
