import { useLocation } from 'react-router-dom'

const RutasQueriString = () => {
  const search = useLocation().search

  const id = new URLSearchParams(search).get('id')
  const slug = new URLSearchParams(search).get('slug')
  return (


  <>
      <h1> query atring</h1>

      <ul>
        <li>Id:{id}</li>
        <li> Slug : {slug}</li>
      </ul>
    </>
  )
}

export default RutasQueriString
             