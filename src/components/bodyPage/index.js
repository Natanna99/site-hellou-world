import { Outlet } from "react-router-dom";
import { Banner } from "../banner";

export default function BodyPage() {
  return (
    <div>
      <Banner />
      <Outlet />
    </div>
  );
}
