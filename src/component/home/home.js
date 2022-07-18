import Navbar from '../navbar/navbar'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import DetailSlider from '../detailslide/detailslide'
import './home.css'

let user = null;

function Home() {
    
    user = useSelector(state=>state.user)

    const dispatch = useDispatch()

    useEffect(() =>{
        let userLocal = localStorage.getItem('user')
        if(userLocal!=null){
            dispatch({
                type: "SET-USER",
                payload: userLocal
            })
        }
        else{
            //you need to login
        }
    }, [])

  return (
    <div>
        {
            user != null ? 
            <div>
                <Navbar id={2} user={user}/>
                je suis connecter
                <DetailSlider/>
            </div>
            : <div>
                <Navbar id={1}/>
                je suis pas connecter
            </div>
        }
    </div>
  );
}

export default Home



/*import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CardPokemon from "../../components/card/CardPokemon"
import { getPokemons } from "../../service/pokemonService"
import { Row } from "react-bootstrap"
import ModalPokemon from "../../components/modal/ModalPokemon"

export default function Home() {

    const dispatch = useDispatch()
    const listePokemons = useSelector(state=>state.listePokemons)

    useEffect(() =>{
        getPokemons().then(res =>{
            const data = res.data.results
            data.map(e=>{
                return(
                    dispatch({
                        type: "ADD-POKEMON",
                        payload: e
                    })
                )
            })
        })
    }, [])

    return (
        <div>
            <Row md={6} className="g-4">

                {
                    listePokemons.lenght !==0 ?
                    listePokemons.map((e,i)=>{
                        return(
                            <CardPokemon key={i} id={i+1} name={e.name}/>
                        )
                    })
                    :<div></div>
                }
            </Row>
            <ModalPokemon/>
        </div>
    )
}*/