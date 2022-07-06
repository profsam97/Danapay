import React from 'react';

const ContextApi = React.createContext({
    severity: 'success',
    message: '',
    open: false,
    startSnackBar: (severity: string, message: string) => {},
    closeSnackBar: () => {},
});
export default ContextApi;