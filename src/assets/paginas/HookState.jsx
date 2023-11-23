import { useState } from "react";
import { Link } from "react-router-dom";


const HookState = () => {


    const[contador,setContador]=useState(0);
    const hanlerIncrementar=()=>{


        setContador(contador+1);
    }

    const hanlerDisminuye=()=>{

        if(contador>0){

          setContador(contador -1);  
        }
        
    }

    
    

  return (
    
<>
<nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to='/hooks'> Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            UseState
          </li>
        </ol>
      </nav>
      <hr />
      <h3>UseState</h3>

      <button className="btn btn-info" onClick={hanlerIncrementar}>Incrementar</button>
      <hr />

      <p> contador {contador}</p>
      <button className="btn btn-info" onClick={hanlerDisminuye}>disminuye</button>
      <hr />

   
</>
  )
}

export default HookState