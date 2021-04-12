import React, { useEffect, useState } from 'react';
import VeiculoService from '../services/VeiculoService'
import { DataGrid } from '@material-ui/data-grid';
import { Typography } from '@material-ui/core';

const colunas = [
    { field: 'marca', headerName: 'Marca' },
    { field: 'modelo', headerName: 'Modelo' },
    { field: 'valor', headerName: 'Valor' },
];

function ListagemVeiculos() {
    const [veiculos, setVeiculos] = useState([]);
    useEffect(() => {
        VeiculoService.listar()
            .then(veiculos => setVeiculos(veiculos));
    }, []);


    console.log(veiculos);

    return (
        <>
            <Typography variant="h3" align="center" component="h1">Listagem de Veículos</Typography>
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid hideFooterPagination rows={veiculos} columns={colunas} />
            </div>
        </>
    );
}

export default ListagemVeiculos;