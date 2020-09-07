import React from 'react';
import { Typography, Grid, TextField, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import { PropTypes } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  fileLabel: {
    marginBottom: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const OrderData = ({ orderData, handleChange, touched, errors, setFieldValue }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Datos del pedido
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            error={touched.description && Boolean(errors.description)}
            label="¿Qué quieres que te llevemos?"
            value={orderData.description}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel className={classes.fileLabel}>Adjuntar aqui su imagen</InputLabel>
          <DropzoneArea
            dropzoneText="Haz click o arrastra aqui tu imagen"
            maxFileSize={5000000}
            acceptedFiles={['image/jpeg']}
            onChange={(image) => {
              console.log(image);
              setFieldValue('images', image);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

OrderData.propTypes = {
  orderData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  touched: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
};

export default OrderData;
