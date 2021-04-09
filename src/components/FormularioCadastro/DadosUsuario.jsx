import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField
                value={email}
                onChange={evt => setEmail(evt.target.value)}
                id="email"
                label="email"
                type="email"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />

            <TextField
                value={senha}
                onChange={evt => setSenha(evt.target.value)}
                onBlur={validarCampos}
                name="senha"
                helperText={erros.senha.texto}
                error={!erros.senha.valido}
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
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosUsuario;