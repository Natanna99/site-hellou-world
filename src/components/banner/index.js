import React from "react";
import style from "./banner.module.css";
import { Button } from "../button";
import circle from "./../../assets/circulo_colorido.png";
import profile from "./../../assets/imagemNat.jpeg";

export function Banner() {
  return (
    <div className={style.containerBanner}>
      <div className={style.containerText}>
        <h1 className={style.title}>Olá, mundo!</h1>
        <p className={style.subtitle}>
          Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de
          Front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :)
        </p>
      </div>

      <div className={style.containerButton}>
        <Button>Explorar</Button>
      </div>

      <div className={style.containerProfile}>
        <img
          src={circle}
          alt=""
          className={style.circleBackground}
          aria-hidden
        />
        <img src={profile} alt="" className={style.profile} />
      </div>
    </div>
  );
}
