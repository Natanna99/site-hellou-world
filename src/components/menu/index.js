import React from "react";
import style from "./menu.module.css";
import { MenuLink } from "../menuLink";

export default function Menu() {
  return (
    <>
      <div className={style.navigationMenu}>
        <MenuLink infoLink={"Inicio"} url={"/"} />
        <MenuLink infoLink={"Sobre Mim"} url={"/aboutme"} />
      </div>
    </>
  );
}
