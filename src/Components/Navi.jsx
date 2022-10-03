import React from "react";
import { Grid, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const Navi = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Link to="/">
            <Button variant="contained">Home</Button>
          </Link>
        </Grid>
        <Grid item xs={1.2}>
          <Link to="/subscribers">
            <Button variant="contained">Subscribers</Button>
          </Link>
        </Grid>

        <Grid item xs={1.2}>
          <Link to="/category">
            <Button variant="contained">category</Button>
          </Link>
        </Grid>

        <Grid item xs={1}>
          <Link to="/gender">
            <Button variant="contained">gender</Button>
          </Link>
        </Grid>

        <Grid item xs={1}>
          <Link to="/service">
            <Button variant="contained">service</Button>
          </Link>
        </Grid>

        <Grid item xs={1}>
          <Link to="/city">
            <Button variant="contained">city</Button>
          </Link>
        </Grid>

        <Grid item xs={1}>
          <Link to="/Provider">
            <Button variant="contained">Provider</Button>
          </Link>
        </Grid>

        <Grid item xs={1}>
          <Link to="/Student">
            <Button variant="contained">students</Button>
          </Link>
        </Grid>

        <Grid item xs={1.5}>
          <Link to="/registration">
            <Button variant="contained">registration</Button>
          </Link>
        </Grid>

        <Grid item xs={1}>
          <Link to="/payment">
            <Button variant="contained">payment</Button>
          </Link>
        </Grid>

        <Grid item xs={1}>
          <Link to="/billing">
            <Button variant="contained">billing</Button>
          </Link>
        </Grid>

        <Grid item xs={1}>
          <Link to="/Product">
            <Button variant="contained">Product</Button>
          </Link>
        </Grid>

        <Grid item xs={2}>
          <Link to="/ApiProduct">
            <Button variant="contained">ApiProduct</Button>
          </Link>
        </Grid>

        <Grid item xs={1}>
          {localStorage.getItem("username") ? (
            <b>{localStorage.getItem("username")}</b>
          ) : (
            <TextField
              label="User Name"
              onChange={(e) => localStorage.setItem("username", e.target.value)}
              fullWidth
            />
          )}

          <Grid item xs={2}>
            <Button
              variant="outlined "
              onClick={() => localStorage.clear("username")}
            >
              Logout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
