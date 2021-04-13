import { AppBar, Container, CssBaseline, Divider, Drawer, List, ListItem, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import CadastroMarca from './pages/CadastroMarca';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroVeiculo from './pages/CadastroVeiculo';
import Dashboard from './pages/Dashboard';
import ListagemVeiculos from './pages/ListagemVeiculos';
import Login from './pages/Login';
import Pagina404 from './pages/Pagina404';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
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

  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Carango Bom
          </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {[
              ['/login', 'Entrar'],
              ['/dashboard', 'Dashboard'],
              ['/', 'Lista de Veículos'],
              ['/cadastro-veiculo', 'Cadastro de Veículo'],
              ['/cadastro-marca', 'Cadastro de Marca']
            ].map((item, index) => (
              <ListItem button component={Link} to={item[0]} key={item[1]}>
                <ListItemText primary={item[1]} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[['/logoff', 'Sair']].map((item, index) => (
              <ListItem button component={Link} to={item[0]} key={item[1]}>
                <ListItemText primary={item[1]} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container component="article" maxWidth="sm">
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
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;

/* <Container component="article" maxWidth="sm">
  <Login></Login>
  <Dashboard></Dashboard>
  <CadastroUsuario></CadastroUsuario>
  <ListagemVeiculos></ListagemVeiculos>
  <CadastroVeiculo></CadastroVeiculo>
  <CadastroMarca></CadastroMarca>
</Container> */
