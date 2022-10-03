import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const AddCities = () => {
  const [city, setcity] = useState("");

  const handleAdd = () => {
    axios.post("http://localhost:3030/addcitys", {
      cityId: uuidv4(),
      cityName: city,
      isActive: true,
    });
    setcity("");
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <TextField
            label="Add city..."
            variant="outlined"
            value={city}
            fullWidth
            onChange={(e) => setcity(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleAdd} fullWidth>
            Add
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
