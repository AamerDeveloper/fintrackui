import React from "react";
import { Home } from "./Home";
import { Navi } from "./Navi";
import { Subscribers } from "./Subscribers/Subscribers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./Category/Category";
import { Card, CardContent } from "@mui/material";
import { Genders } from "./Gender/Genders";
import { Services } from "./Service/Services";
import { Cities } from "./citys/Cities";
import { Provider } from "./Provider/Provider";
import { Show } from "./Students/Show";
import { Registration } from "./Misc/Registration";
import { Payment } from "./Misc/Payment";
import { Billings } from "./Misc/Billings";
import { Product } from "./ProducRedux/Product";
import { ApiProduct } from "./RadioSprate/ApiProduct";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Card>
          <CardContent>
            <Navi />
          </CardContent>
        </Card>
        <Routes>
          <Route path="/ApiProduct" element={<ApiProduct />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/billing" element={<Billings />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/category" element={<Category />} />
          <Route path="/gender" element={<Genders />} />
          <Route path="/service" element={<Services />} />
          <Route path="/city" element={<Cities />} />
          <Route path="/Provider" element={<Provider />} />
          <Route path="/Student" element={<Show />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
