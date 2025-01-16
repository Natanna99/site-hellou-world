import { Outlet } from "react-router-dom";
import { Banner } from "../banner";

export default function BodyPage({ children }) {
  return (
    <div>
      <Banner />
      <Outlet />
      {children}
    </div>
  );
}
