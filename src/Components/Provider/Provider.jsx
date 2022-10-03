import { Card, CardContent, Grid } from "@mui/material";
import { Display } from "../Display/Display";
import React from "react";
import { AddProvider } from "./AddProvider";

export const Provider = () => {
  return (
    <React.Fragment>
      <h1> Provider List</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Display collName="providers" fields={["proName"]} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <AddProvider />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
