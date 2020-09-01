import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        marginBottom: theme.spacing(2),
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <>
        <AppBar position='absolute' color='primary' className={classes.appBar}>
            <Toolbar>
                <Typography variant='h6'>
                    DeliverEat
                </Typography>
            </Toolbar>
        </AppBar>   
        </>
    );
};

export default NavBar;