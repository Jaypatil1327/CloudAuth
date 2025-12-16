import { Outlet } from "react-router-dom";

function Auth({ children }) {
  const random = Math.ceil(Math.random() * 10);
  if (random > 5) return children;
  else return <h1>Your not authorized</h1>;
}

export default Auth;
