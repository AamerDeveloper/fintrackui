import { Grid, Card, CardContent, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Registration = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");

  const handlesubmit = () => {
    sessionStorage.setItem("city", "pune");
    sessionStorage.setItem("pet", "cat");
    sessionStorage.setItem("FirstName", fname);
    sessionStorage.setItem("LastName", lname);
  };

  useEffect(() => {
    setfname(sessionStorage.getItem("FirstName"));
    setlname(sessionStorage.getItem("LastName"));
  }, []);

  return (
    <React.Fragment>
      <h1>Registration Here</h1>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              First Name :
            </Grid>
            <Grid item xs={9}>
              <TextField
                value={fname}
                label="First Name"
                variant="outlined"
                fullWidth
                onChange={(e) => setfname(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              Last Name :
            </Grid>
            <Grid item xs={9}>
              <TextField
                value={lname}
                label="Last Name"
                variant="outlined"
                fullWidth
                onChange={(e) => setlname(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={handlesubmit}>
                Submit
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained">Cancle</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
