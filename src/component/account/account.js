
import './account.css'
import Navbar from '../navbar/navbar'
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import localforage from "localforage";
import { v4 as uuid } from 'uuid'
import imageToBase64 from 'image-to-base64/browser'
//import {encode, decode} from 'node-base64-image';
const axios = require('axios').default

function Account() {

    let user = useSelector(state=>state.user)
    let dispatch = useDispatch()
    let filepath = null;
    //var base64Img = require('base64-img')
    const [imageData, setImageData] = useState(null);
    const [imageData2, setImageData2] = useState(null);
    const [fileName, setFileName] = useState("Upload Boundary File");
    const [img, setImg] = useState();

    useEffect(() =>{
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
        //redirect to home
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
                    
                    axios.get('https://localhost:7119/user/avatar?id='+user.ID+'&avatar='+e.target.files[0]
                    ,{
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    }
                    })
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