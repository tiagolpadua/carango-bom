import { Button, Fab, makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React, { useContext, useEffect, useState } from 'react';
import MarcaService from '../services/MarcaService';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router';
import Confirmacao from '../components/Confirmacao';
import UsuarioLogadoContext from '../contexts/UsuarioLogadoContext';
import MensagemContext from '../contexts/MensagemContext';

const colunas = [
    { field: 'nome', headerName: 'Marca', width: 200 }
];

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: '100px',
        right: '100px',
    },
    actionsToolbar: {
        float: 'right'
    },
    actions: {
        top: '10px',
        marginLeft: '10px',
    }
}));

function ListagemMarcas() {
    const [marcas, setMarcas] = useState([]);
    const [marcaSelecionada, setMarcaSelecionada] = useState();
    const classes = useStyles();
    const history = useHistory();
    const [openDialog, setOpenDialog] = useState(false);
    const { usuarioLogado } = useContext(UsuarioLogadoContext);
    const { setMensagem } = useContext(MensagemContext);

    function alterar() {
        history.push('/alteracao-marca/' + marcaSelecionada.id);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    function excluir() {
        setOpenDialog(true);
    }

    function handleConfirmDialog() {
        setOpenDialog(false);
        MarcaService.excluir(marcaSelecionada)
            .then(() => {
                setMarcaSelecionada(null);
                carregarMarcas();
                setMensagem("Marca excluída com sucesso!");
            });
    }

    useEffect(() => carregarMarcas(), []);

    function carregarMarcas() {
        MarcaService.listar()
            .then(dados => setMarcas(dados));
    }

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={marcas} columns={colunas}
                onRowSelected={gridSelection => setMarcaSelecionada(gridSelection.data)}
            />

            {
                usuarioLogado &&
                <>
                    <div className={classes.actionsToolbar}>
                        <Button
                            className={classes.actions}
                            variant="contained"
                            color="secondary"
                            disabled={!marcaSelecionada}
                            onClick={() => excluir()}>
                            Excluir
                        </Button>
                        <Button
                            className={classes.actions}
                            variant="contained"
                            color="primary"
                            disabled={!marcaSelecionada}
                            onClick={() => alterar()}>
                            Alterar
                        </Button>
                    </div>

                    <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => history.push('/cadastro-marca')}>
                        <AddIcon />
                    </Fab>
                </>
            }

            <Confirmacao
                open={openDialog}
                onClose={handleCloseDialog}
                onConfirm={handleConfirmDialog}
                title='Excluir Veículo'
                content='Confirma a exclusão?'
            />
        </div>
    );
}

export default ListagemMarcas;