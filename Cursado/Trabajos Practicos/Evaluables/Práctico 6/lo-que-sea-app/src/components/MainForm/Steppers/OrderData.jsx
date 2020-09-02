import React from 'react';
import { Typography, Grid, TextField, InputLabel, Divider, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DateTimePicker } from "@material-ui/pickers";
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


const OrderData = ({orderData, handleChange, handleImageUpload, handleSelectedDate}) => {
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
                value={orderData.addressPickUp}
                onChange={handleChange}
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
                value={orderData.numberPickUp}
                onChange={handleChange}
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id="cityPickUp"
                name="cityPickUp"
                label="Ciudad"
                value={orderData.cityPickUp}
                onChange={handleChange}
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                id="referencePickUp"
                name="referencePickUp"
                label="Referencia"
                value={orderData.referencePickUp}
                onChange={handleChange}
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
                value={orderData.addressDelivery}
                onChange={handleChange}
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
                value={orderData.numberDelivery}
                onChange={handleChange}
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id="cityDelivery"
                name="cityDelivery"
                label="Ciudad"
                value={orderData.cityDelivery}
                onChange={handleChange}
                fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                id="referenceDelivery"
                name="referenceDelivery"
                label="Referencia"
                value={orderData.referenceDelivery}
                onChange={handleChange}
                fullWidth
                />
            </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <InputLabel className={classes.fileLabel}>Indique hora de entrega</InputLabel>
                <Select 
                fullWidth 
                name="immediately"
                id="immediately"
                value={orderData.immediately} 
                onChange={handleChange}>
                    <MenuItem value={true}>Lo antes posible</MenuItem>
                    <MenuItem value={false}>Programar pedido</MenuItem>
                </Select>
            </Grid>
            {!orderData.immediately && (
                <Grid item xs={12}>
                    <DateTimePicker
                        disablePast
                        fullWidth
                        name='date'
                        id='date'
                        ampm
                        value={orderData.date}
                        onChange={handleSelectedDate}
                        label='Seleccione fecha y hora'
                        format='dd/MM/yyyy HH:mm'
                    />
                </Grid>
            )}
        </Grid>
        </>
    );
};

export default OrderData;