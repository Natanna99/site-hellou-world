import { Link, useLocation } from "react-router-dom";
import style from "./menuLink.module.css";

export function MenuLink({ infoLink, url }) {
  const location = useLocation();

  return (
    <Link
      to={url}
      className={`${style.link} ${
        location.pathname === url ? style.linkSelected : ""
      }`}
    >
      {infoLink}
    </Link>
  );
}
