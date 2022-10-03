import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const AddStudents = () => {
  const [stu, setstu] = useState("");
  const [stu1, setstu1] = useState("");
  const [stu2, setstu2] = useState("");
  const [stu3, setstu3] = useState("");
  const [stu4, setstu4] = useState("");

  const handleAdd = () => {
    axios.post("http://localhost:3030/addstudents", {
      Sid: uuidv4(),
      Sfname: stu,
      Slname: stu1,
      Sadd: stu2,
      Snumber: stu3,
      SEmail: stu4,
      isActive: true,
    });
    setstu("");
    setstu1("");
    setstu2("");
    setstu3("");
    setstu4("");
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Add Fname"
            variant="outlined"
            value={stu}
            fullWidth
            onChange={(e) => setstu(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Add lname"
            variant="outlined"
            value={stu1}
            fullWidth
            onChange={(e) => setstu1(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            variant="outlined"
            value={stu2}
            fullWidth
            onChange={(e) => setstu2(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            value={stu3}
            fullWidth
            onChange={(e) => setstu3(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="p-Number"
            variant="outlined"
            value={stu4}
            fullWidth
            onChange={(e) => setstu4(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleAdd} fullWidth>
            Add
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
