import Faq from "./component/faq/faq"
import Home from "./component/home/home"
import Admin from "./component/admin/admin"
import Login from "./component/login/login"
import Register from "./component/register/register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (

    
    //login : 
      //navbar (juste avec le logo)

    //register : signin
      //navbar (juste avec le logo)

    //home :
      //navbar ()

    //questions
      //

    //gestion (c'est comment en anglais)
      //
    
  

    <>

    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/faq" element={<Faq/>}></Route>
        </Routes>
    </BrowserRouter>

    </>
  );
}

export default App