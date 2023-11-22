import { useParams } from "react-router-dom"




const Rutaspath = () => {
const {id,slug}= useParams();

  return (

        <>
        <h1>Rutas path con parametros {id}  {slug}</h1>
        </>
  )
}

export default Rutaspath