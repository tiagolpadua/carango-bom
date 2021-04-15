import { Fab, makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import MarcaService from '../services/MarcaService';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router';

const colunas = [
    { field: 'nome', headerName: 'Marca', width: 200 }
];

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: '100px',
        right: '100px',
    }
}));

function ListagemMarcas() {
    const [marcas, setMarcas] = useState([]);
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        MarcaService.listar()
            .then(dados => setMarcas(dados))
    }, []);

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={marcas} columns={colunas} />
            <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => history.push('/cadastro-marca')}>
                <AddIcon />
            </Fab>
        </div>
    );
}

export default ListagemMarcas;