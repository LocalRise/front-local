import React, { useState, useEffect } from "react";
import AppHome from "./AppHome";

import { fetchData } from "../../helper/mock";

const AppHomeContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const initFunc = async () => {
      try {
        const data = await fetchData();
        setLoading(false);
        setData(data);
      } catch (e) {
        setError(e);
      }
    };
    initFunc();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return <AppHome data={data} />;
};

export default AppHomeContainer;
