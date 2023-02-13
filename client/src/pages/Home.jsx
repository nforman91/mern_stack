import { useState, useEffect } from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import axios from "axios";
// import styled from "styled-components";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:8000/api/posts/")
            setPosts(res.data);
        }
        fetchPosts();
    }, []);

  return (
    <>
        <Header/>
        <div>
          <Posts posts={posts}/>
        </div>
    </>
  )
}
