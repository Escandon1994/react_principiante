import ChildrenComponent from "./ChildrenComponent";
import ComponenteFuncional2 from "./ComponenteFuncional2"
import Numero from "./Numero";

const ComponenteFuncional = () => {

  const api=[{
    
    filename: "0.jpeg",
    id: 0,
    author: "Alejandro Escamilla",
    author_url: "https://unsplash.com/photos/yC-Yzbqy7PY",
  
  },
  {
    
    filename: "1.jpeg",
    id: 1,
    author: "Alejandro Escamilla",
    author_url: "https://unsplash.com/photos/LNRyGwIJr5c",
   
  },
 ];
  const nombre="gustavo martinez"
  const numero=12;
  const pais = [
    { id:1,
      nombre: "chile",
      dominio: "cl",
    },
    { 
      id:2,
      nombre: "mexico",
      dominio: "mx",
    },
    {
      id:3,
      nombre: "Bolivia",
      dominio: "bo",
    },
    {
      id:4,
      nombre: "argentina",
      dominio: "ar",
    },
    {
      id:5,
      nombre: "colombia",
      dominio: "co",
    },
  ];
  return (


    <>

    <h1>hola desde funcional</h1>
    <ComponenteFuncional2 prop1="manzana" nombre={nombre} pais={pais} api={api} />
    <hr></hr>
    {(numero==12) ? (<Numero numero={numero}/>) : (<div>no es 12</div>)}

    <hr/>

    <ChildrenComponent>

    <p> contenido desde children</p>

    </ChildrenComponent>
    </>
  )
}

export default ComponenteFuncional