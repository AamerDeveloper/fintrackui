import { Card, CardContent, Grid } from "@mui/material";
import { Display } from "../Display/Display";
import React from "react";
import { AddStudents } from "./AddStudents";

export const Show = () => {
  return (
    <React.Fragment>
      <h1> Student List</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Display
                collName="students"
                fields={[
                  "Sid",
                  "Sfname",
                  "Slname",
                  "Sadd",
                  "snumber",
                  "SEmail",
                ]}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <AddStudents />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
