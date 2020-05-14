import React from "react";
import RestaurantList from "./../../components/ResturantList"

const AppHome = ({ data }) => {
  return (
    <>
      ร้านค้าที่ร่วมรายการ
      {data && <RestaurantList data={data}/>}
    </>
  );
};

export default AppHome;
