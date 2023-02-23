import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Post({post}) {
    const PF = "http://localhost:8000/images/";

  return (
    <StyledPost>
        {post.photo && <img className="postImg" src={PF + post.photo} alt=""/>}
        <StyledPostInfo>
            <Link to={`/post/${post._id}`} className="link">
                <StyledPostTitle>{post.title}</StyledPostTitle>
            </Link>
            <hr/>
            <StyledPostAuthor>Author: {post.username}</StyledPostAuthor>
            <StyledPostDate>{new Date(post.createdAt).toDateString()}</StyledPostDate>
        </StyledPostInfo>
        <StyledPostDesc>{post.desc}</StyledPostDesc>
    </StyledPost>
  )
}

const StyledPost = styled.div`
    width: 385px;
    margin: 0 25px 40px 25px;
`;

const StyledPostInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledPostTitle = styled.span`
    font-size: 24px;
    font-weight: 700;
    margin-top: 15px;
    cursor: pointer;
`;

const StyledPostAuthor = styled.div`
    font-size: 15px;
    color: #999;
`;

const StyledPostDate = styled.span`
    font-style: italic;
    font-size: 13px;
    color: #999;
    margin-top: 15px;
`;

const StyledPostDesc = styled.p`
    font-size: 14px;
    color: #444;
    line-height: 24px;
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;
