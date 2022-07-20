import './home.css'
import Navbar from '../navbar/navbar'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import DetailSlider from '../detailslide/detailslide'
const axios = require('axios').default

function Home() {

    const user = useSelector((state)=>state.user)

    return (
        <div>
            {
                user != null ? 
                <div>
                    <Navbar id={2}/>
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