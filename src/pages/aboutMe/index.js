import React from "react";
import { ModelPost } from "../../components/modelPost";
import imgPost from "./../../assets/Fundo.jpg";
import imgProfile from "./../../assets/natanna.jpeg";
import style from "./aboutMe.module.css";

export default function AboutMe() {
  return (
    <ModelPost img={imgPost} title={"Sobre mim"}>
      <h3 className={style.subTitle}>Olá, eu sou a Natanna!</h3>
      <div className={style.containerImg}>
        <img
          src={imgProfile}
          alt="Foto de Natanna"
          className={style.imgProfile}
        />
      </div>
      <div>
        <p className={style.text}>
          Oi, tudo bem? Eu sou Junior Software Engineer na CESAR e estou feliz
          de te ver por aqui.
        </p>
        <p className={style.text}>
          Minha trajetória teve início quando resolvi seguir minha vocação e
          estudar Ciência da Computação, na Universidade Luterana de Palmas
          (ULBRA). Eu aprendi lógica de programação e o básico de várias
          linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada
          uma delas. Sempre gostei muito da areá da tecnologia mas não fazia
          ideia de que trabalharia com isso hoje.
        </p>
        <p className={style.text}>
          Durante minha jornada de estudos, eu tive a oportunidade de participar
          de varios eventos e projetos, como me voluntariar para monitorar
          materias como Logica de programação e Programação Orientada a Objeto,
          também participei de projetos de extensão como o Projeto Informática e
          Sociedade (PIeS), que é uma iniciativa do curso Ciência da Computação
          do Centro Universitário Luterano que Palmas, em Palmas, Tocantins,
          tendo como um dos seus propósitos promover a inclusão digital e a
          qualificação profissional de jovens e adultos carentes. Além disso,
          participei de eventos como o Congresso de Computação e Tecnologia da
          Informação (Encoinfo) e a Campos Mobile, onde eue e um grupo de amigos
          tivemos que pensa e desenvolver um MVP de um jogo de ensino.
        </p>
        <p className={style.text}>
          Com isso tive minha experiência de dev mais próxima da realidade, com
          prazos de implementação para o jogo, e aprendi muito enquanto
          codificava.
        </p>
        <p className={style.text}>
          Foi quando me formei que decidi que queria trabalhar com
          desenvolvimento web e decidir procurar um emprego na área. Foi quando
          eu passei por varias experiencias de trabalho que me geraram muito
          aprendizados, até que me deparei com a oportunidade de trabalhar na
          CESAR. Para minha felicidade, fui escolhido para fazer parte do time.
        </p>
        <p className={style.text}>
          Desde então, tem sido aprenas aprendizados atrás de aprendizados. A
          CESAR é um centro de inovação que apoia organizações dentro e fora do
          país. Hoje sou muito feliz de ter a oportunidade de trazer esses
          conteúdos ricos e encantadores para você. Espero que aprenda bastante!
        </p>
      </div>
    </ModelPost>
  );
}
