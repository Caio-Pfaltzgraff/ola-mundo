import './Post.css'

import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import Markdown from "react-markdown";

export default function Post() {
    const params = useParams();
    
    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    return (
        <PostModel
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            {/* Utilizar css normal pois trata-se de um markdown */}
            <div className="post-markdown-container"> 
                <Markdown>
                    {post.texto}
                </Markdown>
            </div>
        </PostModel>
    )
}