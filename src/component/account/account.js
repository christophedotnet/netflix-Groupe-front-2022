
import './account.css'
import Navbar from '../navbar/navbar'
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import localforage, { getItem } from "localforage";
import { v4 as uuid } from 'uuid'
import imageToBase64 from 'image-to-base64/browser'
import { useNavigate } from 'react-router-dom';
//import {encode, decode} from 'node-base64-image';
const axios = require('axios').default

function Account() {

    const [user, setUser] = useState(null);

    let dispatch = useDispatch()
    let filepath = null;
    //var base64Img = require('base64-img')
    const [imageData, setImageData] = useState(null);
    const [imageData2, setImageData2] = useState(null);
    const [fileName, setFileName] = useState("Upload Boundary File");
    const [img, setImg] = useState();

    let navigate = useNavigate()

    useEffect(() =>{

        //user = localStorage.getItem('user')

        localforage.getItem('user', function (err, value) {
            // if err is non-null, we got an error. otherwise, value is the value
            setUser(value)
            console.log(value)
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
        localforage.clear()
        navigate("/")
    } 

    return (
        <div>
            {
                user != null && <Navbar id={2} user={user}/>
            }
            
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
                    const formData = new FormData();
                    formData.append("file", e.target.files[0]);
                    console.log(e.target.files[0])
                    axios.post("http://localhost:7119/avatar/", formData,{
                    headers : {
                        'Access-Control-Allow-Origin': '*',
                        "Content-Type": "multipart/form-data",
                    }
                    }).then((value)=>{

                        if(value.data){
                            axios.get("http://localhost:7119/user/setavatar?id="+user.id+'&avatar='+e.target.files[0].name
                            ,{
                            headers : {
                                'Access-Control-Allow-Origin': '*',
                                'Content-Type': 'application/json',
                            }
                            }).then((newUser)=>{
                                if(newUser!=null){
                                    localforage.setItem('user', newUser.data, function (err) {
                                        console.log("new user set")
                                        window.location.reload(false)
                                        //navigate("/account")
                                    })
                                }
                            })
                        }

                    })
                    
                }}
                
              />

              <button type='button' onClick={()=>logout()}>deconexion</button>
        </div>
    )
}

export default Account