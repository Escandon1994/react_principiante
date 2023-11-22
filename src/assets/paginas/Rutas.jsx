import { Link, NavLink } from "react-router-dom"

let id=10;
const slug='hola-pana'

const Rutas = () => {
  return (
    <>
      <h1>Rutas</h1>

      <ul>
        <li>
          <NavLink to='/'> Home</NavLink>
        </li>
        <li>
          <Link to='/sobre-nosotros'>Sobre nosotros</Link>
        </li>
        <li>
          <Link to='/rutas/path'>parametros path</Link>
        </li>
        <li>
          <Link to={`/rutas/path/${id}/${slug}`}>parametros path</Link>
        </li>

        <li>
          <Link to={`/rutas/query-string?id=${id}&slug=${slug}`}>Rutas query</Link>
        </li>
      </ul>
    </>
  )
}

export default Rutas
