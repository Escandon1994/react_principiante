import { useFormik } from "formik"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"





const FormulariosFormilk = () => {

    const {handleSubmit,handleChange,values}=useFormik({

        initialValues:{
            correo:'',
            password:''      
          },
          onSubmit:async function (values) {
            
            Swal.fire({
                icon:'success',
                title:'OK',
                text:`Email es ${values.correo}`

            })
          }
    })
    
  return (
   <>
   <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios"> formularios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            formulario Milk
          </li>
        </ol>
      </nav>
      <h1>formulario MILK </h1>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="correo">E-mail</label>
            <input type="email" className="form-control" id="correo" name="correo" onChange={handleChange} values={values.correo}></input>
        </div>
        <div className="form-control">
            <label htmlFor="correo">password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={handleChange} values={values.password}></input>
        </div>
    <hr/>
        <button className="btn btn-warning" type="submit"> enviar</button>
      </form>
   </>
  )
}

export default FormulariosFormilk