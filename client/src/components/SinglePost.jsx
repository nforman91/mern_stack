import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import styled from "styled-components";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:8000/images";

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:8000/api/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path]);

  return (
    <StyledSinglePost>
        <StyledSinglePostWrapper>
            {post.photo && 
            <img src={PF + post.photo} alt="" className="singlePostImg"/>
            }
            <StyledSinglePostTitle>{post.title}</StyledSinglePostTitle>
            <StyledSinglePostInfo>
                <span className="singlePostAuthor">Author: <b>{post.username}</b></span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </StyledSinglePostInfo>
            <StyledSinglePostDesc>{post.desc}</StyledSinglePostDesc>
        </StyledSinglePostWrapper>
    </StyledSinglePost>
  )
}

const StyledSinglePost = styled.div`
    flex: 9;
`;

const StyledSinglePostWrapper = styled.div`
    padding: 20px;
    padding-right: 0;
`;

const StyledSinglePostTitle = styled.h1`
    text-align: center;
    margin: 10px;
    font-size: 20px;
`;

const StyledSinglePostInfo = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #ba9656;
`;

const StyledSinglePostDesc = styled.p`
    color: #666;
    font-size: 18px;
    line-height: 25px;
`;
