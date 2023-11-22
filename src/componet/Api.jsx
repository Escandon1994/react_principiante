/* eslint-disable react/prop-types */



const Api = ({apies}) => {

    const {id,author,author_url}=apies;
  return (
  
  
  
  <>
      <tr key={id}>
            <td>{id}</td>
            <td>{author}</td>
            <td>{author_url}</td>
           
           

          </tr>
              
    
  
  </>
  )
}

export default Api