import { AppBar, Container, CssBaseline, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import './App.css';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroMarca from './pages/CadastroMarca';
import CadastroVeiculo from './pages/CadastroVeiculo';
import ListagemVeiculos from './pages/ListagemVeiculos';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

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
          {['Logar', 'Dashboard', 'Lista de Veículos', 'Cadastro de Veículo', 'Cadastro de Marca'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Sair'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container component="article" maxWidth="sm">
          <Login></Login>
        </Container>
      </main>
    </div>
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
