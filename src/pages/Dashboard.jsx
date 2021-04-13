import React, { useEffect, useState } from 'react';
import MarcaService from '../services/MarcaService'
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
        <div>
            <Typography variant="h3" align="center" component="h1">Dashboard</Typography>
            <div style={{ height: 300, width: '100%' }}>
                <DataGrid rows={dados} columns={colunas} />
            </div>
        </div>
    );
}

export default Dashboard;