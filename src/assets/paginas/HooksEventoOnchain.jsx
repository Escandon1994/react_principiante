import { useState } from "react"

import Nave from "../../componet/Nave";




const HooksEventoOnchain = () => {

const [nombre,setnombre]=useState('');

const handlerFormulario=()=>{

    console.log(nombre)
}

  return (
   <>
 <Nave/>
      <hr />
      <h3>Onchain</h3>

      <p>
        <input type="text" value={nombre} onChange={(e)=>{setnombre(e.target.value)}} className="form-control" placeholder="Nombre:"></input>
      </p>
      <button className="btn btn-warning" onClick={handlerFormulario}>Enviar</button>

      <hr/>
      <p>{nombre}</p>
   </>
  )
}

export default HooksEventoOnchain