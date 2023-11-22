import { Outlet } from 'react-router-dom'
import Header from './Header'

const Frontend = () => {
  return (
    <>

 <Header/>

 <main className='container'>
 <Outlet />
    
 </main>
   
    </>
  )
}

export default Frontend
