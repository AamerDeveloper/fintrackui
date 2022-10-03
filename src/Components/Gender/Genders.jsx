import { Card, CardContent, Grid } from "@mui/material";
import { Display } from "../Display/Display";
import React from "react";
import { AddGender } from "./AddGender";

export const Genders = () => {
  return (
    <React.Fragment>
      <h1> Gender List</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Display collName="genders" fields={["genName"]} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <AddGender />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
