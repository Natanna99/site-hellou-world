import React from "react";
import style from "./startPage.module.css";
import posts from "../../json/posts.json";

import { Card } from "../../components/card";

export default function StartPage() {
  return (
    <div>
      <div className={style.containerBody}>
        {posts?.map((card) => (
          <Card key={card.id} info={card} />
        ))}
      </div>
    </div>
  );
}
