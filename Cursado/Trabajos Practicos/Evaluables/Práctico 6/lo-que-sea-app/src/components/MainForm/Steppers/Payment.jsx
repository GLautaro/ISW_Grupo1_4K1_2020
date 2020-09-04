import React from 'react';
import { Typography, Grid, TextField, InputLabel,  Select, MenuItem, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

const useStyles = makeStyles((theme) => ({
    fileLabel: {
        marginBottom: theme.spacing(1),
    },
    divider: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
}));

const Payment = ({orderData, handleChange}) => {
    const classes = useStyles();
    return (
        <>
        <Typography variant='h6' gutterBottom>
            Método de pago
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <InputLabel className={classes.fileLabel} onChange={handleChange}>Indique forma de pago</InputLabel>
                <Select
                fullWidth 
                name="cash"
                id="cash"
                value={orderData.cash} 
                onChange={handleChange}>
                    <MenuItem value={true}>Efectivo</MenuItem>
                    <MenuItem value={false}>Tarjeta</MenuItem>
                </Select>
            </Grid>
        </Grid>
        {!orderData.cash ? (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
                <TextField
                required
                id="cardName" 
                name="cardName" 
                label="Nombre y apellido" 
                value={orderData.cardName}
                onChange={handleChange}
                fullWidth 
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
                required
                name="cardNumber"
                id="cardNumber"
                label="Numero de tarjeta"
                helperText="4XXX XXXX XXXX XXXX"
                onChange={handleChange}
                value={orderData.cardNumber}
                fullWidth
                InputProps={{
                inputComponent: VisaMask,
                }}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
                required 
                id="expDate"
                name="expDate"
                label="Fecha de expiración"
                fullWidth onChange={handleChange}
                value={orderData.expDate}
                InputProps={{
                inputComponent: ExpDateMask,
                }}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
                required
                id="cvv"
                name="cvv"
                label="CVV"
                helperText="Código de seguridad"
                onChange={handleChange}
                value={orderData.cvv}
                fullWidth
                InputProps={{
                inputComponent: CVVMask,
                }}
            />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
                required
                id="dni"
                name="dni"
                label="DNI del titular"
                onChange={handleChange}
                value={orderData.dni}
                fullWidth
            />
            </Grid>
        </Grid>
        ) :
        (
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    id="amount"
                    name="amount"
                    label="Monto con el que va a pagar"
                    type="number"
                    onChange={handleChange}
                    value={orderData.amount}
                    fullWidth
                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>}}
                />
                </Grid>
            </Grid>
        )
        }
        </>
    );
};

export default Payment;


function VisaMask(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={[/4/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
        guide={false}
        keepCharPositions
        showMask
      />
    );
}

function ExpDateMask(props) {
    const { inputRef, ...other } = props;
    const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/dd/yyyy HH:MM')
    return (
        <MaskedInput
        {...other}
        ref={(ref) => {
            inputRef(ref ? ref.inputElement : null);
        }}
        mask={[/\d/, /\d/, '/', /\d/, /\d/]}
        guide={false}
        keepCharPositions
        showMask
        pipe={autoCorrectedDatePipe}
        />
    );
}

function CVVMask(props) {
    const { inputRef, ...other } = props;
    return (
        <MaskedInput
        {...other}
        ref={(ref) => {
            inputRef(ref ? ref.inputElement : null);
        }}
        mask={[/\d/, /\d/, /\d/, /\d/]}
        guide={false}
        keepCharPositions
        showMask
        />
    );
}