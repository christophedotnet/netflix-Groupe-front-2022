
import './account.css'
import Navbar from '../navbar/navbar'
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import localforage from "localforage";
import { v4 as uuid } from 'uuid'
import imageToBase64 from 'image-to-base64/browser'
import { useNavigate } from 'react-router-dom';
//import {encode, decode} from 'node-base64-image';
const axios = require('axios').default

function Account() {

    let user = null;

    let dispatch = useDispatch()
    let filepath = null;
    //var base64Img = require('base64-img')
    const [imageData, setImageData] = useState(null);
    const [imageData2, setImageData2] = useState(null);
    const [fileName, setFileName] = useState("Upload Boundary File");
    const [img, setImg] = useState();

    let navigate = useNavigate()

    useEffect(() =>{
        localforage.getItem('user', function (err, value) {
            // if err is non-null, we got an error. otherwise, value is the value
            user = value
            if(user!=null){
                console.log(user)
            }
        });

        /*axios.get('https://localhost:7119/user/avatar?id='+user.id+'&avatar='+JSON.stringify(e.target.files[0])
        ,{
        headers : {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
        }).then((value)=>{
            console.log(value)
        })*/

        //user = localforage.getItem('user')
            /*localforage.getItem("avatar").then(val => {
                dispatch({
                    type: "SET-USER-AVATAR",
                    payload: URL.createObjectURL(val)
                })
            });*/
    }, [])


    function logout(){
        localStorage.clear()
        dispatch({
            type: "SET-USER",
            payload: null
        })
        navigate("/")
    } 

    return (
        <div>
            <Navbar id={2} user={user} imgData={img}/>
            Account of 
            {
            /*
                uuid()
            */
            }

              <input
                type="file"
                className="custom-file-label"
                id="inputGroupFile01"
                label={fileName}
                onChange={(e) => {
                    console.log(e.target.files[0])
                    console.log(JSON.stringify(e.target.files[0]))
                    const formData = new FormData();
                    formData.append("file", e.target.files[0]);
                    axios.post("https://localhost:7119/avatar/", formData
                    ,{
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    }
                    }).then((value)=>{
                        //console.log(JSON.stringify(value)+" / "+JSON.stringify(e.target.files[0]))
                    })
                    
                    /*axios.get('https://localhost:7119/user/avatar?id='+user.id+'&avatar='+JSON.stringify(e.target.files[0])
                    ,{
                    headers : {
                        'Content-Type': 'application/json',
                    }
                    }).then((value)=>{
                        //console.log(JSON.stringify(value)+" / "+JSON.stringify(e.target.files[0]))
                    })*/
                    /*var imageURI = window.URL.createObjectURL(e.target.files[0]);
                    localforage.setItem("avatar", e.target.files[0]).then(() => {
                        setImg(imageURI);
                        dispatch({
                            type: "SET-USER-AVATAR",
                            payload: imageURI
                        })
                    });*/
                }}
                
              />

              <button type='button' onClick={()=>logout()}>deconexion</button>
        </div>
    )
}

export default Account