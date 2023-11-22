import styled from '@emotion/styled'
export const Titulo = styled.h1`
  font-size: 40px;
`

export const Circulo = styled.div`background-color:red; color:#fff; 
  text-align: center;
  padding: 80px 0px 10px 0px;
  width: 200px;
  height: 200px
  border:5px  solid blue;
  border-radius: 50%;
  `

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
`

const StyleComponet = () => {
  return (
    <>
      <h1>Styled componetn</h1>
      <hr></hr>
      <Titulo>Style component</Titulo>
      <Circulo> a</Circulo>
      <Input />
    </>
  )
}

export default StyleComponet
