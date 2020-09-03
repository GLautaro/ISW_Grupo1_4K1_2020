import React, { useCallback, useState, useEffect } from "react";
import Geocode from "react-geocode";
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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DateTimePicker } from "@material-ui/pickers";
import { DropzoneArea } from "material-ui-dropzone";
import MapGoogle from "./Map";

export const cities = [
  {
    id: 1,
    name: "Cordoba",
    lat: -31.419996,
    lng: -64.188631,
  },
  {
    id: 2,
    name: "La Calera",
    lat: -31.352644,
    lng: -64.340043,
  },
  {
    id: 3,
    name: "Monte Cristo",
    lat: -31.342907,
    lng: -63.94713,
  },
  {
    id: 4,
    name: "Devoto",
    lat: -31.40198,
    lng: -62.30605,
  },
  {
    id: 5,
    name: "San Francisco",
    lat: -31.425832,
    lng: -62.084326,
  },
];
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
  handleImageUpload,
  handleSelectedDate,
  handleSelectedLocation,
}) => {
  const center = {
    lat: -31.417543,
    lng: -64.1873587,
  };
  const classes = useStyles();
  const [marker, setMarker] = useState(center);
  const [mapActive, setMapActive] = useState(false);
  const [defaultCenterMap, setDefaultCenterMap] = useState(
    cities.find((c) => c.id === orderData.city)
  );
  const onMapClick = useCallback((event) => {
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  }, []);

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${marker.lat}&lon=${marker.lng}`,
      {
        params: {
          email: "agu.98.98@gmai.com",
          "accept-language": "es", // render results in Dutch
          countrycodes: "arg", // limit search results to the Netherlands
          addressdetails: 1, // include additional address detail parts
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        handleSelectedLocation(
          result.address.road,
          result.address.house_number,
          result.address.city || result.address.town
        );
      });
  }, [marker]);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Dirección de recogida
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="cityPickUp"
            name="cityPickUp"
            label="Ciudad"
            disabled={mapActive}
            value={orderData.cityPickUp}
            onChange={handleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={9}>
          <TextField
            required
            id="addressPickUp"
            name="addressPickUp"
            label="Calle"
            disabled={mapActive}
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
            disabled={mapActive}
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
                checked={mapActive}
                onChange={() => setMapActive(!mapActive)}
                name="mapActive"
                color="primary"
              />
            }
            fullWidth
            label="Seleccionar ubicación en mapa"
          />
        </Grid>
        {mapActive && (
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
            value={orderData.cityDelivery}
            fullWidth
            onChange={(e) => {
              handleChange(e);
            }}
          >
            {cities.map((city) => (
              <MenuItem value={city.id}>{city.name}</MenuItem>
            ))}
          </TextField>
        </Grid>
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
          <InputLabel className={classes.fileLabel}>
            Indique hora de entrega
          </InputLabel>
          <Select
            fullWidth
            name="immediately"
            id="immediately"
            value={orderData.immediately}
            onChange={handleChange}
          >
            <MenuItem value={true}>Lo antes posible</MenuItem>
            <MenuItem value={false}>Programar pedido</MenuItem>
          </Select>
        </Grid>
        {!orderData.immediately && (
          <Grid item xs={12}>
            <DateTimePicker
              disablePast
              fullWidth
              name="date"
              id="date"
              ampm
              value={orderData.date}
              onChange={handleSelectedDate}
              label="Seleccione fecha y hora"
              format="dd/MM/yyyy HH:mm"
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default DeliveryAddress;
