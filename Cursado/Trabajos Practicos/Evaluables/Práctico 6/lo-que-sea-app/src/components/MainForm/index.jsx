import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Stepper,
  StepLabel,
  Step,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import OrderData from "./Steppers/OrderData";
import Payment from "./Steppers/Payment";
import Review from "./Steppers/Review";
import DeliveryAddress, { cities } from "./Steppers/DeliveryAddress";
import * as yup from "yup";
import Formik, { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
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
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = [
  "Datos del Pedido",
  "Dirección del Pedido",
  "Metodo de Pago",
  "Resumen",
];

let validationSchema = [
  yup.object().shape({
    description: yup.string().required("Debe ingresar una descripción"),
    images: yup.array(),
  }),
  yup.object().shape({
    addressPickUp: yup.string().required(),
    numberPickUp: yup.number().required(),
    cityPickUp: yup.string().required(),
    referencePickUp: yup.string(),
    addressDelivery: yup.string().required(),
    numberDelivery: yup.number().required(),
    cityDelivery: yup.string().required(),
    referenceDelivery: yup.string(),
    immediately: yup.boolean(),
    date: yup.date().when("immediately", {
      is: true,
      then: yup.date().required(),
    }),
  }),
  yup.object().shape({
    cash: yup.boolean().required(),
    amount: yup.number().when("cash", {
      is: true,
      then: yup.number().required(),
    }),
    cardNumber: yup.string().when("cash", {
      is: false,
      then: yup.string().required().length(19),
    }),
    cardName: yup.string().when("cash", {
      is: false,
      then: yup.string().required(),
    }),
    expDate: yup.string().when("cash", {
      is: false,
      then: yup.string().length(5).required(),
    }),
    cvv: yup.string().when("cash", {
      is: false,
      then: yup.string().length(4).required(),
    }),
    dni: yup.string().when("cash", {
      is: false,
      then: yup.string().required(),
    }),
  }),
];
const MainForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const initialOrderData = {
    description: "",
    images: [],
    addressPickUp: "",
    numberPickUp: "",
    cityPickUp: "",
    referencePickUp: "",
    addressDelivery: "",
    numberDelivery: "",
    cityDelivery: "",
    referenceDelivery: "",
    immediately: true,
    date: new Date(),
    cash: true,
    amount: "",
    cardNumber: "",
    cardName: "",
    expDate: "",
    cvv: "",
    dni: "",
  };
  const [orderData, setOrderData] = useState(initialOrderData);

  const handleChange_2 = (e) => {
    const { name, value } = e.target;
    setOrderData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelectedDate = (e) => {
    setOrderData((prevState) => ({ ...prevState, date: e }));
  };

  const handleSelectedLocation = (address, number, city) => {
    setOrderData((prevState) => ({
      ...prevState,
      addressPickUp: address || "",
      numberPickUp: number || "",
      cityPickUp: city || "",
    }));
  };

  const handleImageUpload = (image) => {
    let imageArray = orderData.images;
    imageArray.push(image);
    setOrderData((prevState) => ({ ...prevState, images: imageArray }));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <OrderData
            orderData={values}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            handleImageUpload={handleImageUpload}
            handleSelectedDate={handleSelectedDate}
          />
        );
      case 1:
        return (
          <DeliveryAddress
            orderData={values}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleImageUpload={handleImageUpload}
            handleSelectedDate={handleSelectedDate}
            handleSelectedLocation={handleSelectedLocation}
          />
        );
      case 2:
        return (
          <Payment
            orderData={values}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
          />
        );
      case 3:
        return <Review orderData={values} />;
      default:
        throw new Error("Unknown step");
    }
  };

  const handleNext = () => {
    console.log(orderData);
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleSubmitForm = () => {
    console.log("pasa");
    if (activeStep === 3) {
      console.log("Ready");
    } else {
      console.log("Pasa");
      handleNext();
    }
  };

  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: initialOrderData,
    validationSchema: validationSchema[activeStep],
    onSubmit: handleSubmitForm,
  });
  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Pedi lo que sea
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
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
                Tu numero de pedido es #1234. Puedes seguir tu pedido a traves
                del mapa interactivo. Recorda lavarte las manos.
              </Typography>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmit}>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Atras
                    </Button>
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? "Confirmar"
                      : "Siguiente"}
                  </Button>
                </div>
              </form>
            </>
          )}
        </>
      </Paper>
    </div>
  );
};

export default MainForm;
