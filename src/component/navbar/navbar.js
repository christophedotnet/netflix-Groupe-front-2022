import './navbar.css'
import {BrowserRouter as Router, Link, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"


function Navbar(props) {
  let avatar = useSelector(state=>state.userAvatar)
  return(
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link to="/">Netflix</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex" role="search">
            {
              props.id === 1 && <Link to="/login"><button className="btn btn-danger" type="submit">Login</button></Link>
            }
            {
              props.id === 2 && <Link to="/account"><img src={avatar != null ? avatar : "/no_avatar.jpg"} style={{width:64,height:64}} alt="..."></img></Link>
            }
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
