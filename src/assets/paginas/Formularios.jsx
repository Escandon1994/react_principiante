import {  NavLink } from "react-router-dom"






const Formularios = () => {
  return (
 <>
 <h2>formularios</h2>
 <ul>
        <li>
          <NavLink to='/formularios/simple'> form simple</NavLink>
        </li>
        <li>
          <NavLink to='/formularios/data'> form useData</NavLink>
        </li>
        <li>
          <NavLink to='/formularios/milk'> form milk</NavLink>
        </li>
      </ul>
 </>
  )
}

export default Formularios