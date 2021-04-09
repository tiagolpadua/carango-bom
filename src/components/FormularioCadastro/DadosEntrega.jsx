import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosEntrega({ aoEnviar }) {

    const [cep, setCEP] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ cep, endereco, numero, estado, cidade });
        }}>
            <TextField
                value={cep}
                onChange={evt => setCEP(evt.target.value)}
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <TextField
                value={endereco}
                onChange={evt => setEndereco(evt.target.value)}
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                value={numero}
                onChange={evt => setNumero(evt.target.value)}
                id="numero"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <TextField
                value={estado}
                onChange={evt => setEstado(evt.target.value)}
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <TextField
                value={cidade}
                onChange={evt => setCidade(evt.target.value)}
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
            >
                Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega;