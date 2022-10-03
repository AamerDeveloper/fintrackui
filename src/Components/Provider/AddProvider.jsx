import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const AddProvider = () => {
  const [pro, setpro] = useState("");

  const handleAdd = () => {
    axios.post("http://localhost:3030/addproviders", {
      proId: uuidv4(),
      proName: pro,
      isActive: true,
    });
    setpro("");
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <TextField
            label="Add Providers..."
            variant="outlined"
            value={pro}
            fullWidth
            onChange={(e) => setpro(e.target.value)}
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
