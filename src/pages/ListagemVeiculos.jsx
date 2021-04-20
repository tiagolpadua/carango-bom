import { Button, Fab, makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import AddIcon from '@material-ui/icons/Add';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Confirmacao from '../components/Confirmacao';
import UsuarioLogadoContext from '../contexts/UsuarioLogadoContext';
import VeiculoService from '../services/VeiculoService';

const colunas = [
    { field: 'marca', headerName: 'Marca', width: 200 },
    { field: 'modelo', headerName: 'Modelo', width: 200 },
    { field: 'valor', headerName: 'Valor', width: 200 },
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

function ListagemVeiculos() {
    const [veiculos, setVeiculos] = useState([]);
    const [veiculoSelecionado, setVeiculoSelecionado] = useState();
    const classes = useStyles();
    const { usuarioLogado } = useContext(UsuarioLogadoContext);
    const history = useHistory();
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    function alterar() {

    }

    function excluir() {
        setOpenDialog(true);
    }

    function handleConfirmDialog() {
        setOpenDialog(false);
        window.alert("Registro excluído!");
    }

    useEffect(() => {
        VeiculoService.listar()
            .then(veiculos => setVeiculos(
                veiculos.map(v => (
                    {
                        ...v,
                        valor: v.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    }
                ))
            ))
    }, []);

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid
                onRowSelected={gridSelection => setVeiculoSelecionado(gridSelection.data)}

                rows={veiculos} columns={colunas} />
            {
                usuarioLogado &&
                <>
                    <div className={classes.actionsToolbar}>
                        <Button
                            className={classes.actions}
                            variant="contained"
                            color="secondary"
                            disabled={!veiculoSelecionado}
                            onClick={() => excluir()}>
                            Excluir
                        </Button>
                        <Button
                            className={classes.actions}
                            variant="contained"
                            color="primary"
                            disabled={!veiculoSelecionado}
                            onClick={() => alterar()}>
                            Alterar
                        </Button>
                    </div>

                    <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => history.push('/cadastro-veiculo')}>
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
        </div >
    );
}

export default ListagemVeiculos;