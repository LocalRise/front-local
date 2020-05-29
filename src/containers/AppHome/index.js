import React, { useState, useEffect } from "react";
import AppHome from "./AppHome";

import { fetchData } from "../../helper/mock";
import useSheet from "../../utils/useSheet";

const AppHomeContainer = () => {
  const { data, error, loading } = useSheet("Index");

  if (error) {
    console.log(error);
    return <div>error</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return <AppHome data={data} />;
};

export default AppHomeContainer;
