import { Backdrop, CircularProgress, Container, CssBaseline, makeStyles } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import { ptBR } from '@material-ui/core/locale';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Message from './components/Message';
import Menu from './components/Menu';
import Topbar from './components/Topbar';
import MensagemContext from './contexts/MensagemContext';
import CadastroMarca from './pages/CadastroMarca';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroVeiculo from './pages/CadastroVeiculo';
import Dashboard from './pages/Dashboard';
import ListagemVeiculos from './pages/ListagemVeiculos';
import Login from './pages/Login';
import Pagina404 from './pages/Pagina404';
import ListagemUsuarios from './pages/ListagemUsuarios';
import ListagemMarcas from './pages/ListagemMarcas';
import CarregandoContext from './contexts/CarregandoContext';
import UsuarioLogadoContext from './contexts/UsuarioLogadoContext';

const muiTheme = createMuiTheme({
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function Spinner() {
  const classes = useStyles();

  const { carregando } = useContext(CarregandoContext);

  return (
    <Backdrop className={classes.backdrop} open={carregando} >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

function App() {

  const [usuarioLogado, setUsuarioLogado] = useState();
  const [mensagem, setMensagem] = useState();
  const [carregando, setCarregando] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const usuario = localStorage.getItem('usuario');
    const jwt = localStorage.getItem('jwt');

    if (usuario && jwt) {
      setUsuarioLogado(usuario);
    }
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <UsuarioLogadoContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
        <MensagemContext.Provider value={{ mensagem, setMensagem }}>
          <CarregandoContext.Provider value={{ carregando, setCarregando }}>
            <Router>
              <div className={classes.root}>
                <CssBaseline />
                <Spinner />
                <Topbar></Topbar>
                <Menu></Menu>
                <main className={classes.content}>
                  <div className={classes.toolbar} />
                  <Container component="article" maxWidth="md">

                    <Switch>
                      <Route path="/login">
                        <Login></Login>
                      </Route>
                      <Route path="/dashboard">
                        <Dashboard></Dashboard>
                      </Route>
                      <Route path="/usuarios">
                        <ListagemUsuarios></ListagemUsuarios>
                      </Route>
                      <Route path="/cadastro-usuario">
                        <CadastroUsuario></CadastroUsuario>
                      </Route>
                      <Route exact path="/">
                        <ListagemVeiculos></ListagemVeiculos>
                      </Route>
                      <Route path="/cadastro-veiculo">
                        <CadastroVeiculo></CadastroVeiculo>
                      </Route>
                      <Route path="/alteracao-veiculo/:id">
                        <CadastroVeiculo></CadastroVeiculo>
                      </Route>
                      <Route path="/marcas">
                        <ListagemMarcas></ListagemMarcas>
                      </Route>
                      <Route path="/cadastro-marca">
                        <CadastroMarca></CadastroMarca>
                      </Route>
                      <Route path="/alteracao-marca/:id">
                        <CadastroMarca></CadastroMarca>
                      </Route>
                      <Route>
                        <Pagina404></Pagina404>
                      </Route>
                    </Switch>
                    <Message></Message>
                  </Container>
                </main>
              </div>
            </Router>
          </CarregandoContext.Provider>
        </MensagemContext.Provider>
      </UsuarioLogadoContext.Provider>
    </ThemeProvider>
  );
}

export default App;
