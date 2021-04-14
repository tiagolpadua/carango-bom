import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import React, { useContext, useEffect } from 'react';
import MensagemErro from '../contexts/MensagemErro';

export default function ErrorMessage() {
    const [open, setOpen] = React.useState(false);

    const { mensagemErro, setMensagemErro } = useContext(MensagemErro);

    useEffect(() => {
        if (mensagemErro) {
            setOpen(true);
        }
    }, [mensagemErro]);

    const handleClose = () => {
        setMensagemErro(null);
        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={mensagemErro}
            action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />
    );
}