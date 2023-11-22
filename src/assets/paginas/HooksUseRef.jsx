
import { useRef, useState } from "react"
import Nave from "../../componet/Nave"





const HooksUseRef = () => {
const [text,settexto]=useState('')

const inputRef=useRef()

const coloref=useRef(null)

const imprimir=()=>{
    settexto(inputRef.current.value)

}



  return (
  <>
 <Nave/>
      <hr />
      <h3> hooks ref</h3>
      <input className="form-control" type="text " ref={inputRef}></input>
      <hr/>
      <button onClick={imprimir}>mostrar algo</button>

      <hr/>
      <div ref={coloref} id="coloref">
        <p> {text}</p>
      </div>
  </>
  )
}

export default HooksUseRef