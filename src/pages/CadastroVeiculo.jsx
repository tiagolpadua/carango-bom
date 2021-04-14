import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import VeiculoService from '../services/VeiculoService';

function CadastroMarca() {

    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [valor, setValor] = useState(0);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            VeiculoService.cadastrar({ marca })
                .then(() => {
                    throw new Error("Não implementado");
                })

        }}>
            <TextField
                value={marca}
                onChange={evt => setMarca(evt.target.value)}
                id="marca"
                label="Marca"
                type="text"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />

            <TextField
                value={modelo}
                onChange={evt => setModelo(evt.target.value)}
                name="modelo"
                id="modelo"
                label="Modelo"
                type="text"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />

            <TextField
                value={valor}
                onChange={evt => setValor(evt.target.value)}
                name="valor"
                id="valor"
                label="Valor"
                type="text"
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
    );
}

export default CadastroMarca;