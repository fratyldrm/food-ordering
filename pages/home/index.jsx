import React from "react";
import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import About from "../../components/about";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";
import MenuWrapper from "@/product/MenuWrapper";

const Index = ({ categoryList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;