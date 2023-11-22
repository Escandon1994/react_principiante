/* eslint-disable react/prop-types */
import Api from "./Api"
import Pais from "./Pais"

// eslint-disable-next-line react/prop-types
const ComponenteFuncional2 = ({ prop1, nombre, pais,api }) => {
  return (
    <>
      <h3>Contenido desde el componente 2 </h3>
      <ul>
        <li>prop1: {prop1}</li>
        <li>nombre: {nombre}</li>
        <li>
          <ul>
            {pais.map((paises) => (
              <li key={paises.id}>
                {paises.id}-{paises.nombre}{' '}
              </li>
            ))}
          </ul>
        </li>
      </ul>


      <table className="table table-hover table-striped">

<thead>
    <tr>
        
        <th>pais id</th>
        <th>nombre </th>
        <th>codigo </th>
      
    </tr>
</thead>
<tbody>
{
        pais.map((paises1) => (
          <Pais key={paises1.id} paises1={paises1}/>
        ))
    }
</tbody>
</table>


<table className="table table-hover table-striped">

<thead>
    <tr>
        
        <th>id</th>
        <th>author </th>
        <th>url </th>
      
    </tr>
</thead>
<tbody>
{
        api.map((apies) => (
          <Api key={apies.id}  apies={apies}/>
        ))
    }
</tbody>
</table>

<hr></hr>


    </>
  )
}

export default ComponenteFuncional2
