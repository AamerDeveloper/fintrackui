import { Grid, Card, CardContent, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Payment = () => {
  const [bill, setbill] = useState(0);

  const handle = () => {
    sessionStorage.setItem("Bill", bill);
  };
  useEffect(() => {
    setbill(sessionStorage.getItem("Bill"));
  }, []);

  return (
    <React.Fragment>
      <h1>Payment Here</h1>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              Full Name :
            </Grid>
            <Grid item xs={9}>
              <h3>
                {sessionStorage.getItem("FirstName")}{" "}
                {sessionStorage.getItem("LastName")}
              </h3>
            </Grid>
            <Grid item xs={3}>
              Payment :
            </Grid>
            <Grid item xs={9}>
              <TextField
                label="Payment"
                variant="outlined"
                fullWidth
                onChange={(e) => setbill(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={handle}>
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
