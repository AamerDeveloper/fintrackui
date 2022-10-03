import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const ApiProduct = () => {
  const [data, setdata] = useState([]);
  const [list, setlist] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setdata(result.data);
    setlist(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const selectCat = (cat) => {
    const result = list.filter((item) => item.category === cat);
    setdata(result);
  };
  return (
    <div>
      <h1>My Products</h1>
      <FormControl sx={{ bgcolor: "blue" }} className="radio">
        <RadioGroup
          row
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="top"
        >
          <FormControlLabel
            value="jewelery"
            onClick={() => selectCat("jewelery")}
            control={<Radio />}
            label="jewelery"
            labelPlacement="top"
          />
          <FormControlLabel
            value="men's"
            onClick={() => selectCat("men's clothing")}
            control={<Radio />}
            label="men's"
            labelPlacement="top"
          />
          <FormControlLabel
            value="Electronics"
            onClick={() => selectCat("electronics")}
            control={<Radio />}
            label="Electronics"
            labelPlacement="top"
          />
          <FormControlLabel
            value="women's"
            onClick={() => selectCat("women's clothing")}
            control={<Radio />}
            label="Women's"
            labelPlacement="top"
          />
        </RadioGroup>
      </FormControl>
      <Grid container spacing={3} sx={{ bgcolor: "coral" }}>
        <Grid item xs={12}></Grid>
        <br />
        <br />
        {data.map((item) => (
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <img src={item.image} alt="" height={"150px"} />
                <h3 className="apiheader">
                  {item.category}
                  <h3>{item.title}</h3>
                  <h3>${item.price}</h3>
                </h3>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
