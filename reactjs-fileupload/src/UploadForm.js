import axios from 'axios';
import React, {useState} from 'react';


export default function UploadForm() {

    const [info, setInfo] = useState({
        username: "",
        name: ""
       
    });

    const changeValue = (e)=>{
        setInfo({...info, [e.target.name]: e.target.value})
    }

    // For images
    const [photoinfo, setPhotoInfo] = useState({
        file: ""
    });

    // For images changeValue
    const changePhoto = (e)=>{
        setPhotoInfo({file: e.target.files[0]})
    }

    // console.log(info);
    // console.log(photoinfo);

    // submit control

    const submitHandle = (e)=>{
        e.preventDefault();
        fileUpload();
    }

    const fileUpload = ()=>{
        let datas = new FormData();
        datas.append("mydata", JSON.stringify(info));
        datas.append("mydata1", photoinfo.file);

        axios.post("http://localhost/react_resource/reactjs-fileupload/api/newupload.php", datas, {
            headers: {
              "content-type": "multipart/form-data"
            }
          }
        )
        .then((res)=>{
            console.log(res.data);
        })


    }



  return (
    <div>
        <h1>Upload Images with Form</h1>
        <form onSubmit={submitHandle}>
            <input type="text" name='username' placeholder='Enter UserName' onChange={changeValue} /> <br/>
            <input type="text" name='name' placeholder='Enter Name' onChange={changeValue} /> <br/>
            <input type="file" name='photo' onChange={changePhoto} /> <br/><br/>
            <input type="submit" name='submit' value="Submit" /> <br/>
        </form>
    </div>
  )
}
