import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import MensagemContext from '../contexts/MensagemContext';
import useErros from '../hooks/useErros';
import MarcaService from '../services/MarcaService';

function CadastroMarca() {

    const [marca, setMarca] = useState("");

    const history = useHistory();

    const { setMensagem } = useContext(MensagemContext);

    const validacoes = {
        marca: dado => {
            if (dado && dado.length >= 5) {
                return { valido: true };
            } else {
                return { valido: false, texto: "Marca deve ter ao menos 5 letras." }
            }
        }
    }

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    function cancelar() {
        history.goBack();
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                MarcaService.cadastrar({ marca })
                    .then(res => {
                        setMensagem(res);
                        setMarca("");
                    })
                    .catch(error => setMensagem(error));
            } else {
                setMensagem('Formulário com erros...');
            }
        }}>
            <TextField
                value={marca}
                onChange={evt => setMarca(evt.target.value)}
                onBlur={validarCampos}
                helperText={erros.marca.texto}
                error={!erros.marca.valido}
                name="marca"
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
                type="submit"
                disabled={!possoEnviar()}>
                Cadastrar
            </Button>

            <Button
                variant="contained"
                color="secondary"
                onClick={cancelar}>
                Cancelar
            </Button>
        </form>
    );
}

export default CadastroMarca;