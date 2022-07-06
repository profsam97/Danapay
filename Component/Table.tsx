import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, TextField, Typography, useMediaQuery} from "@mui/material";
import BasicMenu from "./Menu";
import Button from "@mui/material/Button";
import {useContext} from "react";
import ContextApi from "../Context/ContextApi";
function createData(
    salary: number,
    document: string [],
) {
    return { salary, document };
}
interface Irows {
    salary: number;
    document: string [];
}
const initialDocument : string[] = ['Offer.pdf', 'Employment.pdf', 'Assignment.pdf'];


export default function BasicTable () {
    const [documents, setDocument] = React.useState<string[]>(initialDocument);
    const [value, setValue] = React.useState<string>('');
    const rows : Irows[] = [
        createData(150000,documents),
        createData(150000, documents),
    ];

    const addDocument = () => {
        setDocument((curValue)=> [...curValue, value]);
    }
    const startSnackBar = useContext(ContextApi).startSnackBar;
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        addDocument();
        setValue('');
        startSnackBar('success', 'Document added successfully');
    }
    const matches = useMediaQuery('(min-width:600px)');
    return (
        <>
            <Box  component={'form'} sx={{display: 'flex'}} maxWidth={'xs'} onSubmit={handleSubmit} >
                <TextField label={'Add new Item'} type={'text'} required  value={value} onChange={(e) => setValue(e.target.value)} />
                <Button sx={{mx: 2}}   type={'submit'}   variant={'outlined'} color={'primary'} >Add</Button>
            </Box>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{font: 'bold'}}>
                        <TableCell>Salary</TableCell>
                        <TableCell>Documents</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(({salary,document}, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {salary}
                            </TableCell>
                            {matches ?  <TableCell align={'right'} >
                                {document.map((item, index) =>
                                    <TableCell style={{border: '2px solid #0000EE '}} align={'right'} key={index} >{item}</TableCell>)}
                            </TableCell>
                                 :
                                <TableCell>
                                <Typography variant={'body1'}  mt={2}>
                                    Documents &nbsp;
                                  <BasicMenu document={document} />
                                </Typography>
                                </TableCell>
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            </>
    );
}
