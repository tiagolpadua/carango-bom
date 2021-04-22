import { DataGrid } from '@material-ui/data-grid';
import React, { useContext, useEffect, useState } from 'react';
import UsuarioService from '../services/UsuarioService';
import CarregandoContext from '../contexts/CarregandoContext';

const colunas = [
    { field: 'name', headerName: 'Nome', width: 200 }
];


function ListagemUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const { setCarregando } = useContext(CarregandoContext);

    useEffect(() => {
        setCarregando(true);
        UsuarioService.listar()
            .then(dados => setUsuarios(dados))
            .finally(() => setCarregando(false));
    }, [setCarregando]);

    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={usuarios} columns={colunas} />
        </div>
    );
}

export default ListagemUsuarios;