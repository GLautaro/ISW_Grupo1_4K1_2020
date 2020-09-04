import React from "react";
import {
  Typography,
  Grid,
  TextField,
  InputLabel,
  Divider,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DateTimePicker } from "@material-ui/pickers";
import { DropzoneArea } from "material-ui-dropzone";

const useStyles = makeStyles((theme) => ({
  fileLabel: {
    marginBottom: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const OrderData = ({
  orderData,
  handleChange,
  handleImageUpload,
  handleSelectedDate,
}) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Datos del pedido
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="¿Qué quieres que te llevemos?"
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
            dropzoneText="Haz click o arrastra aqui tu imagen"
            maxFileSize={5000000}
            acceptedFiles={["image/jpeg"]}
            onChange={(image) => {
              handleImageUpload(image);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default OrderData;
