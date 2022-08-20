import { useState } from "react";
import { API_ENDPOINT } from "../services/api.js";
import axios from "axios";
import { useEffectOnce } from "./useEffectOnce.js";

const useAxios = (configParams) => {
  axios.defaults.baseURL = API_ENDPOINT;
  const [res, setRes] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  useEffectOnce(() => {
    fetchDataUsingAxios(configParams);
  });
  const fetchDataUsingAxios = async () => {
    await axios
      .request(configParams)
      .then((res) => setRes(res))
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  };
  return [res, err, loading];
};
export default useAxios;
