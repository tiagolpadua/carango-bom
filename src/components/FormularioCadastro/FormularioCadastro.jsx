import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true }, texto: "" });

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
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
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                helperText={erros.cpf.texto}
                error={!erros.cpf.valido}
                margin="normal"
                onBlur={() => {
                    const ehValido = validarCPF(cpf);
                    setErros({ cpf: ehValido });
                }}
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
                Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;