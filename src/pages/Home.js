import { useContext } from "react";
import { GlobalContext } from "../App";

export const Home = () => {
  const { username} = useContext(GlobalContext);
  return <h1> THIS IS THE HOME PAGE of {username}.</h1>;
};
