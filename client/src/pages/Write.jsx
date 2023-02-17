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
            }catch(err){

            }
            try{
                const res = await axios.post("http://localhost:8000/api/posts", newPost);
                window.location.replace("http://localhost:8000/api/post" + res.data._id);
            }catch(err){

            }
        }
        axios.post("http://localhost:8000/api/posts/", newPost);
    }
    // const [img, setImg] = useState();

    // const onImageChange = (e) => {
    //     if (e.target.files && e.target.files[0]) {
    //         let reader = new FileReader();
    //         reader.onload = (e) => {
    //             setImg({image: e.target.result});
    //         };
    //         reader.readAsDataURL(e.target.files[0]);
    //     }
    // }

    // const input = document.querySelector("input");
    // const output = document.querySelector("output");
    // let imagesArray = [];

    // const displayImages = () => {
    //     let images = "";
    // }

    // input.addEventListener("change", function(){
    //     const file = input.files;
    //     imagesArray.push(file[0]);
    //     displayImages();
    // })

  return (
    <StyledWrite>
        {file && (
            <img className="writeImg" src={URL.createObjectURL(file)} alt=""/>
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                {/* <label htmlFor="fileInput">
                    
                    <h4>Click plus sign to add image</h4>
                </label> */}
                {/* <input type="file" accept="image/jpeg, image/png, image/jpg"
                // onChange={onImageChange} 
                /> */}
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
