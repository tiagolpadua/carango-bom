import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import MarcaService from '../services/MarcaService';

function CadastroMarca() {

    const [marca, setMarca] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            MarcaService.cadastrar({ marca })
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