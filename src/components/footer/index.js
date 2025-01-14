import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./footer.module.css";

export function Footer() {
  return (
    <div className={style.containerFooter}>
      <FontAwesomeIcon icon="fa-regular fa-registered" />
      <p>2021 - Alura Challenge</p>
    </div>
  );
}
