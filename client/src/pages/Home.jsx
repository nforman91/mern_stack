import { useState, useEffect } from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import axios from "axios";
// import { useLocation } from "react-router";
// import styled from "styled-components";

export default function Home() {
    const [posts, setPosts] = useState([]);
    // const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:8000/api/posts/" 
            // + search
            );
            setPosts(res.data);
        }
        fetchPosts();
    }, [
      // search
    ]);

  return (
    <>
        <Header/>
        <div>
          <Posts posts={posts}/>
        </div>
    </>
  )
}
