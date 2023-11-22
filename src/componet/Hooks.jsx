import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <>
      <h1> Hooks</h1>

      <ul>
        <li>
          <Link to='/hooks/evento-click'> Evento onclick</Link>
        </li>
        <li>
          <Link to='/hooks/usestate'> UseState</Link>
        </li>
        <li>
          <Link to='/hooks/onchain'> onchain</Link>
        </li>

        <li>
          <Link to='/hooks/varios'> eventos varios</Link>
        </li>

        <li>
          <Link to='/hooks/useEffect'> eventos useEffect</Link>
        </li>
        <li>
          <Link to='/hooks/custom'> eventos custom</Link>
        </li>
        <li>
          <Link to='/hooks/load'> eventos loader</Link>
        </li>
        <li>
          <Link to='/hooks/navigate'> eventos navigate</Link>
        </li>
        <li>
          <Link to='/hooks/location'> eventos location</Link>
        </li>
        <li>
          <Link to='/hooks/ref'> eventos ref</Link>
        </li>
      </ul>
    </>
  )
}

export default Hooks
