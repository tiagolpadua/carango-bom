import { Button, makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React, { useContext, useEffect, useState } from 'react';
import Confirmacao from '../components/Confirmacao';
import CarregandoContext from '../contexts/CarregandoContext';
import MensagemContext from '../contexts/MensagemContext';
import UsuarioService from '../services/UsuarioService';

const colunas = [
    { field: 'username', headerName: 'Nome', width: 200 }
];

const useStyles = makeStyles(() => ({
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

function ListagemUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState();
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);
    const { setMensagem } = useContext(MensagemContext);
    const { setCarregando } = useContext(CarregandoContext);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    function excluir() {
        setOpenDialog(true);
    }

    function handleConfirmDialog() {
        setOpenDialog(false);
        setCarregando(true);
        UsuarioService.excluir(usuarioSelecionado)
            .then(() => {
                setUsuarioSelecionado(null);
                carregarUsuarios();
                setMensagem("Usuário excluído com sucesso!");
            })
            .finally(() => setCarregando(false));
    }

    // TODO: Avaliar remover disable na próxima linha
    // eslint-disable-next-line
    useEffect(() => carregarUsuarios(), []);

    function carregarUsuarios() {
        setCarregando(true);
        UsuarioService.listar()
            .then(dados => setUsuarios(dados))
            .finally(() => setCarregando(false));
    }

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={usuarios.map(u => ({ ...u, id: u.username }))} columns={colunas}
                onRowSelected={gridSelection => setUsuarioSelecionado(gridSelection.data)}
            />

            <div className={classes.actionsToolbar}>
                <Button
                    className={classes.actions}
                    variant="contained"
                    color="secondary"
                    disabled={!usuarioSelecionado}
                    onClick={() => excluir()}>
                    Excluir
                </Button>
            </div>

            <Confirmacao
                open={openDialog}
                onClose={handleCloseDialog}
                onConfirm={handleConfirmDialog}
                title='Excluir Usuário'
                content='Confirma a exclusão?'
            />
        </div>
    );
}

export default ListagemUsuarios;