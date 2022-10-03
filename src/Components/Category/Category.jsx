import { Card, CardContent, Grid } from "@mui/material";
import { Display } from "../Display/Display";
import { CategoryAdd } from "../Subscribers/CategoryAdd";
import React from "react";

export const Category = () => {
  return (
    <React.Fragment>
      <h1> Category List</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Display collName="categories" fields={["catName"]} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <CategoryAdd />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
