import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import UsuarioService from '../services/UsuarioService';

const colunas = [
    { field: 'name', headerName: 'Nome', width: 200 }
];


function ListagemUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        UsuarioService.listar()
            .then(dados => setUsuarios(dados))
    }, []);

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={usuarios} columns={colunas} />
        </div>
    );
}

export default ListagemUsuarios;