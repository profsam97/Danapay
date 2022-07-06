import React, {useContext} from 'react';
import {Alert, Snackbar} from "@mui/material";
import ContextApi from "../../Context/ContextApi";

const SnackbarComponent = () => {

    const open  = useContext(ContextApi).open;

    const message = useContext(ContextApi).message;
    const severity = useContext(ContextApi).severity;
    const snackbarClose = (useContext(ContextApi).closeSnackBar);
    const handleClose = (event:React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        snackbarClose();
    }
    //create a Mui Snackbar component


    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert variant='filled' elevation={4} onClose={handleClose} severity={severity=== 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
export default SnackbarComponent;