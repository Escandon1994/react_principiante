import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HooksUseEfeck = () => {
  const [arreglo, setarreglo] = useState([])
  const [maracor,setmarcador]=useState()

  console.log(arreglo)
  useEffect(() => {
    return () => {
      setarreglo([
        {
        id:'1',
        nombre:'gustavo',
        correo:'gutamvol262@gmail.com'
      }, 
       {
        id:'2',
        nombre:'gustavo10',
        correo:'gutamvol200@gmail.com'
      }
    
    ])
    }
  }, [maracor])

  const mostrarArreglo=()=>{

    setmarcador(1)
  }
  const ocultar=()=>{

    setmarcador(0);
  }
  return (
    <>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/hooks'> Hooks</Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            use Effec
          </li>
        </ol>
      </nav>
      <hr />
      <h3> use Effec</h3>

      {maracor == 1 && (
      
        <>
        <hr/>
        <ul>
        {arreglo.map((item)=>(

            <li key={item.id}>
                nombre: {item.nombre}
                <br/>
                correo: {item.correo}
            </li>
        ))}

        </ul>
        <button className='btn btn-primary' onClick={ocultar}>ocultar arreglo</button>
        </>
        
      )}
{maracor > 1? '' : <button className='btn btn-primary' onClick={mostrarArreglo}>mostrar arreglo</button>  }



    </>
  )
}

export default HooksUseEfeck
