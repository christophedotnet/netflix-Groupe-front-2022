
import './account.css'
import Navbar from '../navbar/navbar'
import { useEffect,useState } from "react"
import { useDispatch } from "react-redux"
import localforage from "localforage"
//import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom'
const axios = require('axios').default

function Account() {

    const [user, setUser] = useState(null)

    let navigate = useNavigate()
    let dispatch = useDispatch()

    useEffect(() =>{
        localforage.getItem('user', function (_err, value) {
            value != null ? setUser(value) : navigate("/")
        })
    }, [])

    function logout(){
        localforage.clear()
        dispatch({ type: "SET-USER", payload: null })
        navigate("/")
    } 

    return (
        <div>
            {
                user != null && 
                
                <div>
                
                <Navbar id={2} user={user}/>

                <input
                type="file"
                accept="image/*"
                className="custom-file-label"
                id="inputGroupFile01"
                label="Upload image File"
                onChange={(e) => {
                    console.log(e.target.files[0])
                    const formData = new FormData();
                    formData.append("file", e.target.files[0]);
                    console.log(e.target.files[0])
                    axios.post("http://localhost:7119/avatar/", formData,{
                    headers : {'Access-Control-Allow-Origin': '*',"Content-Type": "multipart/form-data" }
                    }).then((value)=>{

                        if(value.data){
                            axios.get("http://localhost:7119/user/setavatar?id="+user.id+'&avatar='+e.target.files[0].name,{
                            headers : { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
                            }).then((newUser)=>{
                                if(newUser!=null){
                                    localforage.setItem('user', newUser.data, function (err) {
                                        window.location.reload(false)
                                    })
                                }
                            })
                        }

                    })
                    
                }}
                
              />

                <button type='button' onClick={()=>logout()}>deconexion</button>

                </div>
            }

        </div>
    )
}

export default Account