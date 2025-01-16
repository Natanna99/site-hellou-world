import React from "react";
import style from "./modelPost.module.css";

export function ModelPost({ img, title, children }) {
  return (
    <div className={style.containerPost}>
      <div
        className={style.imgBackground}
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <h2 className={style.title}>{title}</h2>
      <div className={style.postInfo}>{children}</div>
    </div>
  );
}
