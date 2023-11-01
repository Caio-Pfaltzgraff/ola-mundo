import "./Post.css";

import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import Markdown from "react-markdown";
import NotFound from "pages/NotFound";
import { DefaultPage } from "components/DefaultPage";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

  return (
    <Routes>
        <Route path="*" element={<DefaultPage />}>
        <Route index element={
            <PostModel
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              {/* Utilizar css normal pois trata-se de um markdown */}
              <div className="post-markdown-container">
                <Markdown>{post.texto}</Markdown>
              </div>
            </PostModel>
          } />
      </Route>
    </Routes>
  );
}
