import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Typography } from '@material-ui/core';
import VeiculoService from '../services/VeiculoService';

const colunas = [
    { field: 'marca', headerName: 'Marca', width: 200 },
    { field: 'modelo', headerName: 'Modelo', width: 200 },
    { field: 'valor', headerName: 'Valor', width: 200 },
];

function ListagemVeiculos() {
    const [veiculos, setVeiculos] = useState([]);

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
        </div>
    );
}

export default ListagemVeiculos;