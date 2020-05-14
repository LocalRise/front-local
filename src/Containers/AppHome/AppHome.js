import React from "react";
import RestaurantList from "./../../components/ResturantList"

const AppHome = ({ data }) => {
  return (
    <>
      <h1 className="font-semibold text-left text-2xl pl-5">ร้านค้าที่ร่วมรายการ</h1>
      {data && <RestaurantList data={data}/>}
    </>
  );
};

export default AppHome;
