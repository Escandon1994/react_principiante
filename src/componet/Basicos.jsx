import HTMLReactParser from "html-react-parser";
import { acortarTexto, formatearFecha, formatearNumero } from "../helpers/helpers";




 const basicos = () => {
    const edad = 18;
    const fecha= new Date();
    const numero=34343;
    const texto="hola das fasas fdasfas"
    const ejemplo = `<h1>Tiutulo desde jsx</h1>`;
    const ejemplo2 = `<h1>Tiutulo desde jsx</h1>`;
  
    const pais = [
      {
        nombre: "chile",
        dominio: "cl",
      },
      {
        nombre: "mexico",
        dominio: "mx",
      },
      {
        nombre: "Bolivia",
        dominio: "bo",
      },
      {
        nombre: "argentina",
        dominio: "ar",
      },
      {
        nombre: "colombia",
        dominio: "co",
      },
    ];
    return (
      <>
        <div>
          {" "}
          <h1>{edad > 15 ? "es mayor" : "es menor"}</h1>
        </div>
        <h1>Hola mundo desde react</h1>
  
        <div dangerouslySetInnerHTML={{ __html: ejemplo }}></div>
  
        <hr />
  
        <h1>swich case </h1>
  
        {(() => {
          switch (edad) {
            case 13:
              return <div>Numero es 13</div>;
  
            case 18:
              return <div>Numero es 18</div>;
  
            default:
              break;
          }
        })()}
  
        <hr></hr>
        <h1>Ejemplos for loop</h1>
  
        <h3>loop normal ES6</h3>
        <ul>
          <ul>
            {[...Array(11)].map((x, i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </ul>
  
        <h3>inline iife</h3>
  
        <h3> con es2015 syntansis</h3>
  
        <h3>for sencillo</h3>
  
              <hr></hr>
  
              <h1>recorrer elementos con map</h1>
  
              <ul>
  
              {pais.map((paises, index)=>(
  
                <li key= {paises.dominio}> {index}-{paises.nombre} (el dominio es {paises.dominio})</li>
              ))}
  
              </ul>
  
  
              <hr></hr>
        {HTMLReactParser(ejemplo2)}
  
                <hr></hr>
                <h1>helper personalizado</h1>
                <ul>
                
                  <li>Fecha : {formatearFecha(fecha) }</li>
                  <li>numero : {formatearNumero (numero)}</li>
                  <li>texto : {acortarTexto (texto,0,6) } ...</li>
                </ul>
  
  
  
      </>
    );
}

export default basicos