import './home.css'
import Navbar from '../navbar/navbar'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import DetailSlider from '../detailslide/detailslide'
import Faq from '../faq/faq'
const axios = require('axios').default

function Home() {

    const user = useSelector((state)=>state.user)
    let dispatch = useDispatch()
    const [statutId,setStatutId] = useState(null)

    useEffect(()=>{
            axios.get('http://localhost:7119/api/v1/faq')
            .then(response=>{
                dispatch({ type: "SET-FAQS", payload: response.data })
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
            <Faq/>
        </div>
    )
}

export default Home