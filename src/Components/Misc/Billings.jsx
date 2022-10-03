import { Card, CardContent, Button, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Billings = () => {
  const navi = useNavigate();
  const handleBack = () => {
    navi("/registration");
    alert("Payment Success");
  };

  const Cancle = () => {
    alert("Sure..?");
  };

  return (
    <React.Fragment>
      <h1>Billings Here</h1>

      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              Full Name :
            </Grid>
            <Grid item xs={9}>
              <h2>
                {sessionStorage.getItem("FirstName")}{" "}
                {sessionStorage.getItem("LastName")}
              </h2>
            </Grid>
            <Grid item xs={3}>
              Payment :
            </Grid>
            <Grid item xs={9}>
              <h2>Rs-{sessionStorage.getItem("Bill")}</h2>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={handleBack}>
                Done
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={Cancle}>
                Cancle
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
