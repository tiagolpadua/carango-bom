import { Button, Container, CssBaseline, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Menu from './components/Menu';
import Topbar from './components/Topbar';
import ErrorMessage from './components/ErrorMessage';
import UsuarioLogado from './contexts/UsuarioLogado';
import CadastroMarca from './pages/CadastroMarca';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroVeiculo from './pages/CadastroVeiculo';
import Dashboard from './pages/Dashboard';
import ListagemVeiculos from './pages/ListagemVeiculos';
import Login from './pages/Login';
import Pagina404 from './pages/Pagina404';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { ptBR } from '@material-ui/core/locale';
import MensagemErro from './contexts/MensagemErro';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[900],
    }
  },
}, ptBR);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function App() {

  const [usuarioLogado, setUsuarioLogado] = useState();
  const [mensagemErro, setMensagemErro] = useState();

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <UsuarioLogado.Provider value={{ usuarioLogado, setUsuarioLogado }}>
        <MensagemErro.Provider value={{ mensagemErro, setMensagemErro }}>
          <Router>
            <div className={classes.root}>
              <CssBaseline />
              <Topbar></Topbar>
              <Menu></Menu>
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Container component="article" maxWidth="md">
                  <Switch>
                    <Route exact path="/">
                      <ListagemVeiculos></ListagemVeiculos>
                    </Route>
                    <Route path="/login">
                      <Login></Login>
                    </Route>
                    <Route path="/dashboard">
                      <Dashboard></Dashboard>
                    </Route>
                    <Route path="/cadastro-usuario">
                      <CadastroUsuario></CadastroUsuario>
                    </Route>
                    <Route path="/cadastro-veiculo">
                      <CadastroVeiculo></CadastroVeiculo>
                    </Route>
                    <Route path="/cadastro-marca">
                      <CadastroMarca></CadastroMarca>
                    </Route>
                    <Route>
                      <Pagina404></Pagina404>
                    </Route>
                  </Switch>
                  <ErrorMessage></ErrorMessage>
                </Container>
              </main>
            </div>
          </Router>
        </MensagemErro.Provider>
      </UsuarioLogado.Provider>
    </ThemeProvider>
  );
}

export default App;
