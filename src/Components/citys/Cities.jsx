import { Card, CardContent, Grid } from "@mui/material";
import { Display } from "../Display/Display";
import React from "react";
import { AddCities } from "./AddCities";

export const Cities = () => {
  return (
    <React.Fragment>
      <h1> City List</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Display collName="citys" fields={["cityName"]} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <AddCities />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
