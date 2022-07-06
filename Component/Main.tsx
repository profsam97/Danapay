//Functional React component that renders the main page.
import React from 'react';
import {Box, Container} from "@mui/material";
import BasicTable from "./Table";

export default function Home () {
    return (
        <Container component={'main'} maxWidth={'lg'} >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 8,
            }}>
                <BasicTable/>
            </Box>

        </Container>
    );
}