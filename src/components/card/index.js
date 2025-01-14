import React from "react";
import style from "./card.module.css";
import { Button } from "../button";

export function Card({ info }) {
  return (
    <div className={style.cardPublications}>
      <div className={style.containerImg}>
        <img src={`/assets/posts/${info?.id}/capa.png`} alt={info?.titulo} />
      </div>
      <div className={style.containerInfo}>
        <h4>{info?.titulo}</h4>
        <div className={style.containerButtonCard}>
          <Button>Ler</Button>
        </div>
      </div>
    </div>
  );
}
