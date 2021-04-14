import React, { useEffect, useState } from 'react';
import MarcaService from '../services/VeiculoService'
import { DataGrid } from '@material-ui/data-grid';
import { Typography } from '@material-ui/core';

const colunas = [
    { field: 'marca', headerName: 'Marca' },
    { field: 'modelo', headerName: 'Modelo' },
    { field: 'valor', headerName: 'Valor Total' },
    { field: 'quantidade', headerName: 'Quantidade Total' },
];

function Dashboard() {
    const [dados, setDados] = useState([]);
    useEffect(() => {
        MarcaService.dashboard()
            .then(dados => setDados(dados));
    }, []);

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={dados} columns={colunas} />
        </div>
    );
}

export default Dashboard;