import React, { useCallback, useEffect } from 'react';
import {
  Typography,
  Grid,
  TextField,
  InputLabel,
  Divider,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DateTimePicker } from '@material-ui/pickers';
import PropTypes from 'prop-types';
import MapGoogle from './MapGoogle';

export const cities = ['Córdoba', 'Villa Allende', 'Río Ceballos'];

const useStyles = makeStyles((theme) => ({
  fileLabel: {
    marginBottom: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const DeliveryAddress = ({
  orderData,
  handleChange,
  setFieldValue,
  touched,
  errors,
  setMarker,
  marker,
  addressNumberMap,
  setAddressNumberMap,
}) => {
  const center = {
    lat: -31.417543,
    lng: -64.1873587,
  };
  const classes = useStyles();

  const onMapClick = useCallback((event) => {
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  }, []);

  useEffect(() => {
    if (marker) {
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${marker.lat}&lon=${marker.lng}`,
        {
          params: {
            email: 'agu.98.98@gmai.com',
            'accept-language': 'es', // render results in Dutch
            countrycodes: 'arg', // limit search results to the Netherlands
            addressdetails: 1, // include additional address detail parts
          },
        },
      )
        .then((res) => res.json())
        .then((result) => {
          setFieldValue('addressPickUp', result.address.road || '');
          setFieldValue('numberPickUp', result.address.house_number || '');
          setFieldValue('cityPickUp', result.address.city || result.address.town || '');
          setAddressNumberMap(result.address.house_number || '');
        });
    }
  }, [marker]);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Dirección de recogida
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="cityPickUp"
            name="cityPickUp"
            label="Ciudad"
            error={touched.cityPickUp && Boolean(errors.cityPickUp)}
            disabled={orderData.mapActive}
            value={orderData.cityPickUp}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="addressPickUp"
            name="addressPickUp"
            label="Calle"
            error={touched.addressPickUp && Boolean(errors.addressPickUp)}
            disabled={orderData.mapActive}
            value={orderData.addressPickUp}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="numberPickUp"
            name="numberPickUp"
            label="Número"
            error={touched.numberPickUp && Boolean(errors.numberPickUp)}
            type="number"
            disabled={orderData.mapActive && addressNumberMap}
            value={orderData.numberPickUp}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="referencePickUp"
            name="referencePickUp"
            label="Referencia"
            value={orderData.referencePickUp}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={orderData.mapActive}
                onChange={handleChange}
                name="mapActive"
                color="primary"
              />
            }
            fullWidth
            label="Seleccionar ubicación en mapa"
          />
        </Grid>
        {orderData.mapActive && (
          <Grid item xs={12}>
            <MapGoogle
              width={500}
              height={400}
              defaultCenter={center}
              marker={marker}
              onClick={onMapClick}
            />
          </Grid>
        )}
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant="h6" style={{ marginTop: 10 }} gutterBottom>
        Dirección de Entrega
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="cityDelivery"
            select
            label="Ciudad"
            name="cityDelivery"
            error={touched.cityDelivery && Boolean(errors.cityDelivery)}
            value={orderData.cityDelivery}
            fullWidth
            onChange={(e) => {
              handleChange(e);
            }}
          >
            {cities.map((city) => (
              <MenuItem value={city}>{city}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="addressDelivery"
            name="addressDelivery"
            error={touched.addressDelivery && Boolean(errors.addressDelivery)}
            label="Calle"
            value={orderData.addressDelivery}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="numberDelivery"
            name="numberDelivery"
            label="Numero"
            type="number"
            error={touched.numberDelivery && Boolean(errors.numberDelivery)}
            value={orderData.numberDelivery}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
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
            error={touched.immediately && Boolean(errors.immediately)}
            value={orderData.immediately}
            onChange={handleChange}
          >
            <MenuItem value>Lo antes posible</MenuItem>
            <MenuItem value={false}>Programar pedido</MenuItem>
          </Select>
        </Grid>
        {!orderData.immediately && (
          <Grid item xs={12}>
            <DateTimePicker
              fullWidth
              disablePast
              name="date"
              id="date"
              ampm
              error={touched.date && Boolean(errors.date)}
              value={orderData.date}
              onChange={(date) => {
                setFieldValue('date', date);
              }}
              label="Seleccione fecha y hora"
              format="dd/MM/yyyy HH:mm"
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

DeliveryAddress.propTypes = {
  orderData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  touched: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
  setMarker: PropTypes.func.isRequired,
  marker: PropTypes.object.isRequired,
  addressNumberMap: PropTypes.number.isRequired,
  setAddressNumberMap: PropTypes.func.isRequired,
};

export default DeliveryAddress;
