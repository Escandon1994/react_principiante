import { Link } from "react-router-dom"



const HooksEventosVarios = () => {


  return (
  
    <>
     <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to='/hooks'> Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            eventos varios
          </li>
        </ol>
      </nav>
      <hr />
      <h3>eventos varios</h3>
      
    </>
  )
}

export default HooksEventosVarios