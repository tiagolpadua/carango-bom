import { Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import MarcaService from '../services/VeiculoService';

const useStyles = makeStyles({
    root: {
        minWidth: 300,
        maxWidth: 400,
        margin: 20,
        display: 'inline-block',
    }
});

function Dashboard() {
    const classes = useStyles();

    const [dados, setDados] = useState([]);

    useEffect(() => {
        MarcaService.dashboard()
            .then(dados => setDados(dados));
    }, []);

    return (
        dados.map((dado, index) =>
            <Card key={index} className={classes.root}>
                <CardHeader
                    title={dado.marca}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {dado.valor}
                    </Typography>
                </CardContent>
            </Card>
        )
    );
}

export default Dashboard;