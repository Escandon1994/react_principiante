import { Link } from "react-router-dom";

const HooksEventoclick = () => {


const handlerPresioname=()=>{

    alert("hola que tal")
}

const presionameConparametros=(nombre)=>{

    console.log('su nombre es ' + nombre)
}


  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to='/hooks'> Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            eveto onclick
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Click</h3>
      <button className="btn btn-danger" onClick={handlerPresioname}> <i className="fa-solid fa-check"></i>click</button>

      <hr></hr>

      <button className="btn btn-primary" onClick={()=>{handlerPresioname()}}> <i className="fa-solid fa-arrow-up"></i>click con funcion de flecha</button>

      <hr/>
      <button className="btn btn-warning" onClick={()=>{presionameConparametros('gustavo')}}><i className="fa-solid fa-align-justify"></i>boton con parametros</button>
    </>
  );
};

export default HooksEventoclick;
