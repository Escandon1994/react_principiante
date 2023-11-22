import { Link, useNavigate } from "react-router-dom"




const HooksUseNavigate = () => {

    const navigate=useNavigate()
    console.log(navigate)
  return (
    <>
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/hooks'> Hooks</Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Hooks usenavigate
          </li>
        </ol>
      </nav>
      <hr />
      <h3> hooks usenavigate</h3>

      <button className="btn btn-success" onClick={()=>(navigate("/sobre-nosotros"))}>ir a sobre nosotros</button>
      <hr/>
      <button className="btn btn-success" onClick={()=>(navigate(-1))}>ir atras</button>
    </>
  )
}

export default HooksUseNavigate