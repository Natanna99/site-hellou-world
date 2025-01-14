import React from "react";
import style from "./button.module.css";

export function Button({ children }) {
  return <button className={style.buttonBanner}>{children}</button>;
}
