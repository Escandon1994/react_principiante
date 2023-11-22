import {  useLocation } from "react-router-dom"
import Nave from "../../componet/Nave";






export const HooksLocation = () => {

    const location=useLocation();
  return (
    <>
   <Nave/>
      <hr />
      <h3> hooks location</h3>

        <p>{location.pathname}</p>

    </>
  )
}
