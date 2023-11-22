import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./assets/paginas/Home"
import Acerca from "./assets/paginas/Acerca"
import Error440 from "./assets/paginas/Error440"




const Rutas = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>

    <Route path="/" element={<Home/>}></Route>
    <Route path="/sobre-nosotros" element={<Acerca/>}></Route>
    <Route path="*" element={<Error440/>}/>

   </Routes>

   </BrowserRouter>
   </>
  )
}

export default Rutas