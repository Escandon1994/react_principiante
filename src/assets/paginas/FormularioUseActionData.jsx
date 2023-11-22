import { Link, Form, useActionData } from "react-router-dom";
import Swal from "sweetalert2";
import { atributos, categorias_prodcutos } from "../../datos/datos";
import { useState } from "react";

export async function action({ request }) {
  //siempre debe retornar algo
  const formData = await request.formData();
  console.log(formData);

  ////recibir check box dinamicos
  let errores=[]

  if (formData.get('categoria') =='0') {
    
    errores.push('debe seleccionar al menos una categoria')
  }
  if (Object.values(formData).includes('')) {
    errores.push('no debe estar vacio ningun campo')
  }
  if (Object.keys(errores).length) {
      return errores
  }
  let  arreglo=[];
  let mensaje=''
  atributos.map((atributo,i)=>{

    if(formData.get('atributo_'+atributo.id)!=null){
      arreglo[i]=atributo.id
      mensaje=mensaje + atributo.nombre  +','
    }
  });
  return Swal.fire({
    icon: "success",
    title: "ok",
    text: `el nombre es ${formData.get("nombre")}  y la categoria es ${formData.get('categoria')} ${formData.get('destacado')}:
    peligroso: ${formData.get('peligroso')} | mensaje ${mensaje}`,
  });
}

const FormularioUseActionData = () => {

  const [check,setcheck]=useState(false);

  const halerCheck=()=>{

    setcheck(!check)
  }

  const erorres=useActionData()
  console.log(erorres)
  return (
    <>
 
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios"> formularios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            formulario UseData{" "}
          </li>
        </ol>
      </nav>
      <h1>formulario UseData </h1>
      <Form method="POST">
        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <select name="categoria" id="categoria" className="form-control">
            <option value="0"> selecionne..</option>
            {categorias_prodcutos.map((cat) => (
              <option key={cat.id} value={cat.id}>
                
                {cat.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="nombre"
          />

          <label htmlFor="precio"> Precio</label>
          <input type="number" min="0" className="form-control" name="precio" />

          <hr />
          <label htmlFor="destacado">
            <strong>destacado</strong>
          </label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="destacado"
              value="si"
              id="destcado1"
            />
            <label htmlFor="destacado1">SI</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="destacado"
              value="no"
              id="destcado2"
            />
            <label htmlFor="destacado2">NO</label>
          </div>
          <hr />
          <label htmlFor="descripcion"> descripcion</label>
          <textarea
            name="descripcion"
            id="descripcion"
            className="form-control"
            placeholder="descripcion"
          ></textarea>

          <hr></hr>

              <div className="form-group">

                <label htmlFor="peligoros">peligoroso</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="peligroso" id="peligroso" value={check}
                  onChange={halerCheck}></input>
                  <label htmlFor="peligroso">peligroso</label>
                </div>
              </div>
              <hr/>
              <div className="form-group">

                <label htmlFor="atributos"><strong >atributos</strong></label>
                {atributos.map((atri)=>(
                  <div key={atri.id} className="form check"> 
                <input type="checkbox" className="formcheck-input" name={`atributo_${atri.id}`} id={`atributo_${atri.id}`} 
                value={atri.id}/>
                <label htmlFor="">{atri.nombre}</label>
                </div>
                ))}
                
              </div>
              <hr/>

          <button className="btn btn-warning">enviar</button>
        </div>
        
      </Form>
    </>
  );
};

export default FormularioUseActionData;
