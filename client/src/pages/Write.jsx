import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title, 
            desc, 
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try{
                await axios.post("http://localhost:8000/api/upload", data);
            }catch(err){}
            }
        try{
                const res = await axios.post("http://localhost:8000/api/posts", newPost);
                window.location.replace("http://localhost:8000/api/post/" + res.data._id);
            }catch(err){}
        await axios.post("http://localhost:8000/api/posts/", newPost);
    }

  return (
    <StyledWrite>
        {file && (
            <StyledWriteImg src={URL.createObjectURL(file)} alt=""/>
        )}
        <StyledWriteForm onSubmit={handleSubmit}>
            <StyledWriteFormGroup>
                <label htmlFor="fileInput">
                    <StyledWriteIcon className="fa-solid fa-plus"></StyledWriteIcon>
                </label>
                <StyledPicUploadText>Click on plus sign to add picture</StyledPicUploadText>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                <br/>
                <StyledWriteInput type="text" placeholder="Title" autoFocus={true} onChange={(e)=>setTitle(e.target.value)}/>
            </StyledWriteFormGroup>
            <StyledWriteFormGroup>
                <StyledWriteText placeholder="Write your post here!" type="text" className="writeText" onChange={(e)=>setDesc(e.target.value)}></StyledWriteText>
            </StyledWriteFormGroup>
            <StyledWriteSubmit type="submit">Publish</StyledWriteSubmit>
        </StyledWriteForm>
    </StyledWrite>
  )
}

const StyledWrite = styled.div`
    padding-top: 50px;
`;

const StyledWriteImg = styled.img`
    margin-left: 150px;
    width: 70vw;
    height: 250px;
    border-radius: 10px;
    object-fit: cover;
`;

const StyledWriteForm = styled.div`
    position: relative;
`;

const StyledWriteFormGroup = styled.div`
    margin-left: 150px;
    display: flex;
    align-items: center;
`;

const StyledWriteIcon = styled.i`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: gray;
    cursor: pointer;
`;

const StyledPicUploadText = styled.h3`
    margin-left: 20px;
    color: gray;
`;

const StyledWriteInput = styled.input`
    font-size: 30px;
    border: none;
    padding: 20px;
    width: 50vw;
    margin-left: 10px;
`;

const StyledWriteText = styled.textarea`
    font-size: 20px;
`;

const StyledWriteSubmit = styled.button`
    position: absolute;
    top: 20px;
    right: 50px;
    color: white;
    background-color: teal;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
`;
