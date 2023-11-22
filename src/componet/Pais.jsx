


// eslint-disable-next-line react/prop-types
const Pais = ({paises1}) => {

    // eslint-disable-next-line react/prop-types
    const {id,nombre,dominio}=paises1
  return (
   
    <>
      <tr key={id}>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{dominio}</td>

          </tr>
                
    </>
  )
}

export default Pais