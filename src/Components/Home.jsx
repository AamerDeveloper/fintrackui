import React from "react";
import { useSelector } from "react-redux";

export const Home = () => {
  const selProd = useSelector((state) => state.ProductsReducer.products);
  const selpet = useSelector((state) => state.ProductsReducer.mypet);
  const selcar = useSelector((state) => state.ProductsReducer.mycar);

  return (
    <React.Fragment>
      <h1>Welcome to PickupBiz...</h1>
      <h2>Product :{selProd}</h2>
      <h2>Pet :{selpet}</h2>
      <h2>Car :{selcar}</h2>
    </React.Fragment>
  );
};
