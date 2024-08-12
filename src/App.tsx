import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import "./App.scss";
import { IPost } from "./types/post";
import Post from "./components/Post";

const App: React.FC = () => {
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_per_page=10`
        );
        const data = await response.json();
        const totalPosts = response.headers.get("x-total-count");
        setPosts(data);
        setLoading(false);
        setTotalPages(Math.ceil(Number(totalPosts) / 10));
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, [currentPage]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1>Pagination Project</h1>
      <Pagination totalPages={totalPages} onPageChange={onPageChange} />
      <div className="posts-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="posts">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
