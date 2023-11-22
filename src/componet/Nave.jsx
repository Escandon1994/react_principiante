import { Link } from "react-router-dom"




const Nave = () => {
  return (
    <>
     <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/hooks'> Hooks</Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Hooks ref
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Nave