import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Stepper, StepLabel, Step, Button } from '@material-ui/core';
import { useState } from 'react';
import OrderData from './Steppers/OrderData';
import Payment from './Steppers/Payment';
import Review from './Steppers/Review';

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',    
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['Datos del Pedido', 'Metodo de Pago', 'Resumen'];

const MainForm = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const initialOrderData = {
        description: "",
        images: [],
        immediately: true,
    }
    const [orderData, setOrderData] = useState(initialOrderData);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setOrderData((prevState) => ({ ...prevState, [name]: value}));
    }

    const handleImageUpload = (image) => {
        let imageArray = orderData.images
        imageArray.push(image);
        setOrderData((prevState) => ({ ...prevState, 'images': imageArray}));
    }

    const getStepContent = (step) => {
        switch (step) {
          case 0:
            return <OrderData orderData={orderData} handleChange={handleChange} handleImageUpload={handleImageUpload}/>
          case 1:
            return <Payment/>
          case 2:
            return <Review/>
          default:
            throw new Error('Unknown step');
        }
    };

    const handleNext = () => {
        console.log(orderData);
        setActiveStep(activeStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center" gutterBottom>
                    Pedi lo que sea
                </Typography>
                <Typography component="body" variant="body1" align="center" gutterBottom>
                    Buscaremos en tu ciudad para llevarte lo que necesites
                </Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <>
                    {activeStep === steps.length ? (
                        <>
                        <Typography variant="h5" gutterBottom>
                            Gracias por realizar tu pedido!
                        </Typography>
                        <Typography variant="subtitle1">
                            Tu numero de pedido es #1234. Puedes seguir tu pedido a traves del 
                            mapa interactivo. Recorda lavarte las manos.
                        </Typography>
                        </>
                    ) : (
                        <>
                        {getStepContent(activeStep)}
                        <div className={classes.buttons}>
                            {activeStep !== 0 && (
                                <Button onClick={handleBack} className={classes.button}>
                                    Atras
                                </Button>
                            )}
                            <Button variant='contained' color='primary' onClick={handleNext} className={classes.button}>
                                {activeStep === steps.length - 1 ? 'Confirmar' : 'Siguiente'}
                            </Button>
                        </div>
                        </>
                    )}
                </>
            </Paper>
        </main>
    );
};

export default MainForm;