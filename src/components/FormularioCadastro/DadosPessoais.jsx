import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
            }
        }}>
            <TextField
                value={nome}
                onChange={evt => setNome(evt.target.value)}
                id="nome"
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                value={sobrenome}
                onChange={evt => setSobrenome(evt.target.value)}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                value={cpf}
                onChange={evt => setCPF(evt.target.value)}
                onBlur={validarCampos}
                name="cpf"
                helperText={erros.cpf.texto}
                error={!erros.cpf.valido}
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        name="promocoes"
                        checked={promocoes}
                        onChange={evt => setPromocoes(evt.target.checked)}
                        color="primary"
                    />
                }
            />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        name="novidades"
                        checked={novidades}
                        onChange={evt => setNovidades(evt.target.checked)}
                        color="primary"
                    />
                }
            />

            <Button
                variant="contained"
                color="primary"
                type="submit">
                Próximo
            </Button>
        </form>
    );
}

export default DadosPessoais;