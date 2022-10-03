import { Card, CardContent, Grid } from "@mui/material";
import { Display } from "../Display/Display";
import React from "react";
import { AddServices } from "./AddServices";

export const Services = () => {
  return (
    <React.Fragment>
      <h1> Service List</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Display collName="services" fields={["serName"]} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <AddServices />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
