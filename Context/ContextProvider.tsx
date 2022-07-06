import React, {ReactNode} from 'react';
import ContextApi from "./ContextApi";
type ContextProviderProps = {
    children: ReactNode
}

const ContextProvider : React.FC<ContextProviderProps>= ({children}) => {

    const [severity, setSeverity] = React.useState<string>('success');
    const [message, setMessage] = React.useState<string>('');
    const [open, setOpen] = React.useState<boolean>(false);

    const startSnackBar = (severity: string, message: string) => {
        setSeverity(severity);
        setMessage(message);
        setOpen(true);
    }
    const closeSnackBar = () => {
        setOpen(false);
    }
    const contextValue = {
        severity,
        message,
        open,
        startSnackBar,
        closeSnackBar
    }
    return (
        <ContextApi.Provider value={contextValue}>
            {children}
        </ContextApi.Provider>
    )
}
export default ContextProvider;