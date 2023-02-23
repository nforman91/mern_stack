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
        // await axios.post("http://localhost:8000/api/posts/", newPost);
    }

  return (
    <StyledWrite>
        {file && (
            <img className="writeImg" src={URL.createObjectURL(file)} alt=""/>
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <i className="writeIcon fa-solid fa-plus"></i>
                <br/>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Write your post here!" type="text" className="writeInput writeText" onChange={(e)=>setDesc(e.target.value)}></textarea>
            </div>
            <button className="writeSubmit" type="submit">Publish</button>
        </form>
    </StyledWrite>
  )
}

const StyledWrite = styled.div`
    padding-top: 50px;
`;
