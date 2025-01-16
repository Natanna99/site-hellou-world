import React from "react";
import style from "./button.module.css";

export function Button({ children, ...props }) {
  return (
    <button {...props} className={style.buttonBanner}>
      {children}
    </button>
  );
}
