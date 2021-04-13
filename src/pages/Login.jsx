import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { UsuarioService } from '../services/UsuarioService';

function Login() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            UsuarioService.login({ usuario, senha })
                .then(() => {
                    throw new Error("Não implementado");
                })

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