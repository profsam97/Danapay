import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
interface Imenu {
    document: string[];
}

export default function BasicMenu(props: Imenu) {
    const {document} = props
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <span onClick={handleClick}>
                <FontAwesomeIcon icon={faChevronRight}    />
            </span>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                    style: {
                        maxHeight: 40 * 4.5,
                    }
                }}
            >
                {document.map((item, index) =>{
                    return <MenuItem onClick={handleClose} key={index}>{item}</MenuItem>
                })}
            </Menu>
        </>
    );
}
