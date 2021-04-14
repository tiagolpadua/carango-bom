import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import UsuarioLogado from '../contexts/UsuarioLogado';
import { UsuarioService } from '../services/UsuarioService';
import { useHistory } from "react-router-dom";
import MensagemErro from '../contexts/MensagemErro';

function Login() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const { setUsuarioLogado } = useContext(UsuarioLogado);
    const { setMensagemErro } = useContext(MensagemErro);

    const history = useHistory();

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            UsuarioService.login({ usuario, senha })
                .then(({ usuario, jwt }) => {
                    setUsuarioLogado(usuario);
                    window.sessionStorage.setItem('jwt', jwt);
                    history.push("/");
                })
                .catch(erro => setMensagemErro(erro));
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
                color="default">
                Cadastrar Novo Usuário
            </Button>
        </form>
    );
}

export default Login;