import React from "react";
import { IPost } from "../types/post";

const Post: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
