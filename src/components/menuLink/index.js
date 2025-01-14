import { NavLink } from "react-router-dom";
import style from "./menuLink.module.css";

export function MenuLink({ infoLink, url }) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        `${style.link} ${isActive ? style.linkSelected : ""}`
      }
    >
      {infoLink}
    </NavLink>
  );
}
