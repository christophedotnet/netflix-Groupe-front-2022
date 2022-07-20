import './home.css'
import Navbar from '../navbar/navbar'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import DetailSlider from '../detailslide/detailslide'
const axios = require('axios').default

function Home() {

    const user = useSelector((state)=>state.user)
    const [statutId,setStatutId] = useState(null)

    useEffect(()=>{
        axios.get('http://localhost:7119/getUserStatut?id='+user.id,{headers : {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }})
        .then(response=>{
            if(response.data!=null){
                console.log(response.data)
                setStatutId(response.data.statutId)
            }
        })
    },[])

    return (
        <div>
            {
                user != null ? 
                <div>
                    <Navbar id={2}/>
                    {
                        statutId
                    }
                    je suis connecter
                    <DetailSlider/>
                </div>
                : <div>
                    <Navbar id={1}/>
                    je suis pas connecter
                </div>
            }
        </div>
    )
}

export default Home