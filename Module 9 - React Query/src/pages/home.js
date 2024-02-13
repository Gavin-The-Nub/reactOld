import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export let Home = () => {
  let { data: catData } = useQuery(["cat"], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  return <h1>HOME PAGE{catData?.fact} </h1>;
};
