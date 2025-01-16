import { useParams } from "react-router-dom";
import data from "../../json/posts.json";
import { ModelPost } from "../../components/modelPost";
import Markdown from "react-markdown";
import "./post.css";
import Error404 from "../error404";
import BodyPage from "../../components/bodyPage";
import { Card } from "../../components/card";

export default function Post() {
  const param = useParams();

  const post = data?.find((post) => post?.id === Number(param?.id));

  const suggestion = data
    ?.filter((post) => post?.id !== Number(param?.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  if (!post) {
    return <Error404 />;
  }

  return (
    <BodyPage>
      <ModelPost
        img={`/assets/posts/${post?.id}/capa.png`}
        title={post?.titulo}
      >
        <div className="post-markdown-container">
          <Markdown>{post?.texto}</Markdown>
          <h2>Outros posts que você pode gostar:</h2>
          <div className="containerCard">
            {suggestion.map((post) => (
              <Card key={post?.id} info={post} />
            ))}
          </div>
        </div>
      </ModelPost>
    </BodyPage>
  );
}
