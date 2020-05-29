import React from "react";
import RestaurantList from "../../components/RestaurantList"
import Navbar from "./../../components/Nevbar"
// import Link from 'next/link'
import { Link } from "react-router-dom";


const AppHome = ({ data }) => {
  return (
    <>
      <Navbar/>
      <h1 className="font-semibold text-left text-2xl pl-5">ร้านค้าที่ร่วมรายการ</h1>
      {data && <RestaurantList className="flex md:flex-row flex-wrap" data={data} />}
    </>
  );
};

export default AppHome;
