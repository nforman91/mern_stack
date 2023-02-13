import Post from "../components/Post";
import styled from "styled-components";

export default function Posts({posts}) {
  return (
    <StyledPosts>
        {posts.map((p, index) => (
            <Post key={index} post={p}/>
        ))}
    </StyledPosts>
  )
}

const StyledPosts = styled.div`
    flex: 9;
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`;
