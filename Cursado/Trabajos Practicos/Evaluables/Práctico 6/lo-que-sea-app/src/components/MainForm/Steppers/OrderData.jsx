import React from 'react';
import { Typography, Grid, TextField, InputLabel, Divider, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';

const useStyles = makeStyles((theme) => ({
    fileLabel: {
        marginBottom: theme.spacing(1),
    },
    divider: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
}));


const OrderData = ({orderData, handleChange, handleImageUpload}) => {
    const classes = useStyles();

    return (
        <>
        <Typography variant='h6' gutterBottom>
            Datos del pedido
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                    required
                    id='description'
                    name='description'
                    label='¿Qué quieres que te llevemos?'
                    value={orderData.description}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <InputLabel className={classes.fileLabel}>
                    Adjuntar aqui su imagen
                </InputLabel>
                <DropzoneArea
                dropzoneText='Haz click o arrastra aqui tu imagen'
                maxFileSize={5000000}
                acceptedFiles={['image/jpeg']}
                onChange={(image) => {handleImageUpload(image)}}
                />                
            </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant='h6' gutterBottom>
            Dirección de recogida
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={9}>
                <TextField
                required
                id="addressPickUp"
                name="addressPickUp"
                label="Calle"
                fullWidth
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                required
                id="numberPickUp"
                name="numberPickUp"
                label="Numero"
                type="number"
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id="cityPickUp"
                name="cityPickUp"
                label="Ciudad"
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                id="referencePickUp"
                name="referencePickUp"
                label="Referencia"
                fullWidth
                />
            </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant='h6' gutterBottom>
            Dirección de Entrega
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={9}>
                <TextField
                required
                id="addressDelivery"
                name="addressDelivery"
                label="Calle"
                fullWidth
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                required
                id="numberDelivery"
                name="numberDelivery"
                label="Numero"
                type="number"
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id="cityDelivery"
                name="cityDelivery"
                label="Ciudad"
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                id="referenceDelivery"
                name="referenceDelivery"
                label="Referencia"
                fullWidth
                />
            </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <InputLabel className={classes.fileLabel}>Indique hora de entrega</InputLabel>
                <Select fullWidth value={orderData.immediately}>
                    <MenuItem value={true}>Lo antes posible</MenuItem>
                    <MenuItem value={false}>Programar pedido</MenuItem>
                </Select>
            </Grid>
        </Grid>
        </>
    );
};

export default OrderData;