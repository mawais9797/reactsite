import React, { useEffect, useState } from "react";
import axios from "axios";
const useFetchData = (url) => {
  const [data, setData] = useState([]);
  console.log("url is here =", url);

  const userData = async () => {
    const userApi = await axios.get(url);
    setData(userApi.data);
  };

  useEffect(() => {
    userData();
  }, [url]);

  return { data };
};

export default useFetchData;
