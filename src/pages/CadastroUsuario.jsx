import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { UsuarioService } from '../services/UsuarioService';

function CadastroUsuario() {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

    return (
        <>
            <Typography variant="h3" align="center" component="h1">Cadastro de Usuário</Typography>
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

                <TextField
                    value={senhaConfirmacao}
                    onChange={evt => setSenhaConfirmacao(evt.target.value)}
                    name="senhaConfirmacao"
                    id="senhaConfirmacao"
                    label="Confirmação da Senha"
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
                    Cadastrar
            </Button>

                <Button
                    variant="contained"
                    color="secondary">
                    Cancelar
            </Button>
            </form>
        </>

    );
}

export default CadastroUsuario;