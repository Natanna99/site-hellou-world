import React from "react";
import style from "./error404.module.css";
import { Button } from "../../components/button";
import imgError from "./../../assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div>
      <div className={style.containerError}>
        <div className={style.containerInfoError}>
          <h1 className={style.textError}>404</h1>
          <h2 className={style.subTextError}>Página não encontrada</h2>
          <p className={style.descriptionError}>
            Tem certeza de que era isso que você estava procurando? Aguarde uns
            instantes e recarregue a página, ou volte para a página inicial.
          </p>
        </div>
        <div className={style.containerButtonImage}>
          <div className={style.containerButton}>
            <Button onClick={() => navigate(-1)}>Voltar</Button>
          </div>
          <div className={style.containerImage}>
            <img
              src={imgError}
              alt="Ilustração de uma página não encontrada"
              className={style.imageError}
            />
          </div>
        </div>
      </div>
      <div className={style.containerWhite}></div>
    </div>
  );
}
