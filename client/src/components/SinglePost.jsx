import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import styled from "styled-components";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:8000/images";
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:8000/api/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try{
            await axios.delete(`post/${post._id}`);
            window.location.replace("/");
        }catch(err){}
    };

    const handleUpdate = async () => {
        try{
            await axios.put(`post/${post._id}`, title, desc);
            setUpdateMode(false);
        }catch(err){}
    }

  return (
    <StyledSinglePost>
        <StyledSinglePostWrapper>
            {post.photo && 
            <img src={
                PF + 
                post.photo} alt="" className="singlePostImg"/>
            }
            {updateMode ? <StyledSinglePostTitleInput type="text" value={title} onChange={(e)=>setTitle(e.target.value)} autoFocus/> : 
                <StyledSinglePostTitle>{title}</StyledSinglePostTitle>
            }
            <div className="singlePostEdit">
                <StyledSinglePostIconFirst className="far fa-edit" onClick={()=>setUpdateMode(true)}></StyledSinglePostIconFirst>
                <StyledSinglePostIconLast className="far fa-trash-alt" onClick={handleDelete}></StyledSinglePostIconLast>
            </div>
            <StyledSinglePostInfo>
                <div>Author: <b>{post.username}</b></div>
                <StyledSinglePostDate>{new Date(post.createdAt).toDateString()}</StyledSinglePostDate>
            </StyledSinglePostInfo>
            {updateMode ? <StyledSinglePostDescInput value={desc} onChange={(e)=>setDesc(e.target.value)}/> : 
                <StyledSinglePostDesc>{desc}</StyledSinglePostDesc>
            }
            {updateMode && 
                <StyledSinglePostButton onClick={handleUpdate}>Update</StyledSinglePostButton>
            }
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
    display: flex;
    flex-direction: column;
`;

const StyledSinglePostTitle = styled.h1`
    text-align: center;
    margin: 10px;
    font-size: 20px;
`;

const StyledSinglePostTitleInput = styled.input`
    margin: 10px;
    font-size: 20px;
    border: none;
    color: gray;
    border-bottom: 1px solid lightgray;
`;

const StyledSinglePostIconFirst = styled.i`
    margin-left: 10px;
    cursor: pointer;
    color: teal;
`;

const StyledSinglePostIconLast = styled.i`
    margin-left: 10px;
    cursor: pointer;
    color: tomato;
`;

const StyledSinglePostInfo = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #ba9656;
`;

const StyledSinglePostDate = styled.div`
    margin-right: 20px;
`;

const StyledSinglePostDesc = styled.p`
    color: #666;
    font-size: 18px;
    line-height: 25px;
`;

const StyledSinglePostDescInput = styled.textarea`
    color: #666;
    font-size: 18px;
    line-height: 25px;
    border: none;
`;

const StyledSinglePostButton = styled.button`
    width: 100px;
    border: none;
    background-color: teal;
    padding: 5px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    align-self: flex-end;
    margin-top: 20px;
`;
