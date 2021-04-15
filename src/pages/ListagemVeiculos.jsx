import { Fab, makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React, { useContext, useEffect, useState } from 'react';
import VeiculoService from '../services/VeiculoService';
import AddIcon from '@material-ui/icons/Add';
import UsuarioLogadoContext from '../contexts/UsuarioLogadoContext';
import { useHistory } from 'react-router';

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
    }
}));

function ListagemVeiculos() {
    const [veiculos, setVeiculos] = useState([]);
    const classes = useStyles();
    const { usuarioLogado } = useContext(UsuarioLogadoContext);
    const history = useHistory();

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
            <DataGrid rows={veiculos} columns={colunas} />
            {usuarioLogado && <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => history.push('/cadastro-veiculo')}>
                <AddIcon />
            </Fab>}
        </div>
    );
}

export default ListagemVeiculos;