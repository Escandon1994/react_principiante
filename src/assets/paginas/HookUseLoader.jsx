import { Link, useLoaderData } from "react-router-dom"
import { paises } from "../../datos/datos"


export function loader(){

    const countrys = paises

    return countrys
}


const HookUseLoader = () => {


    const countrys=useLoaderData()
    console.log(countrys)

  return (
    <>
     <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/hooks'> Hooks</Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Hooks loader
          </li>
        </ol>
      </nav>
      <hr />
      <h3> hooks loader</h3>
  
  <table className="table table-boardered">
    <thead>

        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dominio</th>
        </tr>
    </thead>
    <tbody>
    {countrys.map(({id,nombre,dominio})=>(

        <tr key={id}>

        <td>{id}</td>
        <td>{nombre}</td>
        <td>{dominio}</td>

        </tr>
    )).reverse()}


    </tbody>

  </table>
    </>
  )
}

export default HookUseLoader