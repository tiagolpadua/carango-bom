import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import UsuarioService from '../services/UsuarioService';
import UsuarioLogadoContext from '../contexts/UsuarioLogadoContext';
import MensagemContext from '../contexts/MensagemContext';
import { useHistory } from "react-router-dom";

function Login() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const { setUsuarioLogado } = useContext(UsuarioLogadoContext);
    const { setMensagem } = useContext(MensagemContext);

    const history = useHistory();

    function cadastrarUsuario() {
        history.push("/cadastro-usuario");
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            UsuarioService.login({ usuario, senha })
                .then(({ usuario, jwt }) => {
                    setUsuarioLogado(usuario);
                    localStorage.setItem('usuario', usuario);
                    localStorage.setItem('jwt', jwt);
                    history.push("/");
                })
                .catch(erro => setMensagem(erro));
        }}>
            <TextField
                value={usuario}
                onChange={evt => setUsuario(evt.target.value)}
                id="usuario"
                label="Usuário"
                type="text"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />

            <TextField
                value={senha}
                onChange={evt => setSenha(evt.target.value)}
                name="senha"
                id="senha"
                label="Senha"
                type="password"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />

            <Button
                variant="contained"
                color="primary"
                type="submit">
                Entrar
            </Button>

            <Button
                variant="contained"
                color="default"
                onClick={cadastrarUsuario}>
                Cadastrar Novo Usuário
            </Button>
        </form>
    );
}

export default Login;