import "./Post.css";
import styles from './Post.module.css';

import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import Markdown from "react-markdown";
import NotFound from "pages/NotFound";
import { DefaultPage } from "components/DefaultPage";
import PostCard from "components/PostCard";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

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

              <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </PostModel>
          } />
      </Route>
    </Routes>
  );
}
