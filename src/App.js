import { Container, Typography } from '@material-ui/core';
import './App.css';
// import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
// import ValidacoesCadastro from './contexts/validacoesCadastro';
// import { validarCPF, validarSenha } from './models/cadastro';
import ListagemVeiculos from './pages/ListagemVeiculos';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <ListagemVeiculos></ListagemVeiculos>
    </Container>
  );
}

// <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
//   <FormularioCadastro aoEnviar={aoEnviarForm} />
// </ValidacoesCadastro.Provider>

// function aoEnviarForm(dados) {
//   console.log(dados);
// }

export default App;
