import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MensagemContext from '../contexts/MensagemContext';
import useErros from '../hooks/useErros';
import MarcaService from '../services/MarcaService';
import VeiculoService from '../services/VeiculoService';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function CadastroMarca() {
    const classes = useStyles();
    const [marcas, setMarcas] = useState([]);
    const [marca, setMarca] = useState("");
    const [ano, setAno] = useState("");
    const [modelo, setModelo] = useState("");
    const [valor, setValor] = useState("");

    const { setMensagem } = useContext(MensagemContext);

    const validacoes = {
        marca: dado => {
            if (dado) {
                return { valido: true };
            } else {
                return { valido: false, texto: "Marca deve ser informada." }
            }
        },
        modelo: dado => {
            if (dado && dado.length >= 5) {
                return { valido: true };
            } else {
                return { valido: false, texto: "Modelo deve ter ao menos 5 letras." }
            }
        },
        ano: dado => {
            const maxAno = (new Date().getFullYear() + 1);
            if (dado && dado >= 1900 && dado <= maxAno) {
                return { valido: true };
            } else {
                return { valido: false, texto: `Ano deve ser entre 1900 e ${maxAno}.` }
            }
        },
        valor: dado => {
            if (dado && dado > 0) {
                return { valido: true };
            } else {
                return { valido: false, texto: "Valor deve ser maior que zero." }
            }
        }
    }

    useEffect(() => {
        MarcaService.listar()
            .then(dados => setMarcas(dados));
    }, []);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    const history = useHistory();

    function cancelar() {
        history.goBack();
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                VeiculoService.cadastrar({ marca, modelo, ano, valor })
                    .then(res => {
                        setMensagem(res);
                        setMarca("");
                        setModelo("");
                        setAno("");
                        setValor("");
                    })
                    .catch(error => setMensagem(error));
            } else {
                setMensagem('Formulário com erros...');
            }
        }}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Marca</InputLabel>
                <Select
                    required
                    autoWidth
                    value={marca}
                    onChange={evt => setMarca(evt.target.value)}
                >
                    {marcas && marcas.map(m => <MenuItem key={m.id} value={m.nome}>{m.nome}</MenuItem>)}
                </Select>
            </FormControl>

            <TextField
                value={modelo}
                onChange={evt => setModelo(evt.target.value)}
                onBlur={validarCampos}
                helperText={erros.modelo.texto}
                error={!erros.modelo.valido}
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
                value={ano}
                onChange={evt => setAno(evt.target.value)}
                onBlur={validarCampos}
                helperText={erros.ano.texto}
                error={!erros.ano.valido}
                name="ano"
                id="ano"
                label="Ano"
                type="number"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />

            <TextField
                value={valor}
                onChange={evt => setValor(evt.target.value)}
                onBlur={validarCampos}
                helperText={erros.valor.texto}
                error={!erros.valor.valido}
                name="valor"
                id="valor"
                label="Valor"
                type="number"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />

            <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!possoEnviar()}
            >
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