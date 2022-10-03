import React from "react";

import { TextField, Grid, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Product = () => {
  const [prod, setprod] = useState("");
  const [pet, setpet] = useState("");
  const [car, setcar] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({
      type: "ADD_PRODUCTS",
      data: prod,
    });
  };

  const handleAddpet = () => {
    dispatch({
      type: "ADD_PET",
      data: pet,
    });
  };

  const handleAddcar = () => {
    dispatch({
      type: "ADD_CAR",
      data: car,
    });
  };

  return (
    <React.Fragment>
      <h1>Redux-Products Here</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Add Product"
            variant="outlined"
            fullWidth
            onChange={(e) => setprod(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleAdd}>
            Add
          </Button>
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Add pet"
            variant="outlined"
            fullWidth
            onChange={(e) => setpet(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleAddpet}>
            Add
          </Button>
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Add Car's"
            variant="outlined"
            fullWidth
            onChange={(e) => setcar(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={handleAddcar}>
            Add
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
