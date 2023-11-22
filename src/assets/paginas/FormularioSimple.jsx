import { useState } from "react";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";




const FormularioSimple = () => {

  const[nombre,setnombre]=useState('');
  const[apellido,setapellido]=useState('');
  const hanlerSubmit=(e)=>{
    e.preventDefault();

    Swal.fire({

      icon:'success',
      title:'OK',
      text:'Se ha enviado el formulario '+ nombre
    })
    console.log(nombre)
    console.log(apellido)

  }

  return (
    <>
     <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/formularios'> formularios</Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
          formulario simple          </li>
        </ol>
      </nav>
    <h1>formulario simple</h1>
    <form onSubmit={hanlerSubmit}>

    <div className="form-group">
      <label htmlFor="nombre">Nombre</label>
      <input type="text" className="form-control" value={nombre} onChange={(e)=>{setnombre(e.target.value)}} />

    <label htmlFor="apellido"> apellido</label>
    <input type="text" className="form-control" value={apellido} onChange={(e)=>{setapellido(e.target.value)}}/>


      <hr></hr>

      <button className="btn btn-warning" type="submit">enviar</button>


    </div>

    </form>

    </>
  )
}

export default FormularioSimple