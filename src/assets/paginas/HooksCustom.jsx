import { useState } from 'react'

import { categorias, productos } from '../../datos/datos'
import UseHooksPerzonalizado from '../../Hooks/UseHooksPerzonalizado'
import Nave from '../../componet/Nave'

const HooksCustom = () => {
  const [verduras, setverduras] = UseHooksPerzonalizado()

  const [categoria, setcategoria] = useState(0)

  const [producto, setproducto] = useState(0)

  const hanlerDespegar = valor => {
    setcategoria(valor)
    if (valor == 0) {
      setverduras([])
    } else {
      setverduras(
        productos.filter(prod => prod.categoria_id === parseInt(valor))
      )
    }
  }

  return (
    <>
      <Nave/>

      <div className='form-group'>
        <label htmlFor='categoria'>categoria</label>
        <select
          value={categoria}
          onChange={e => {
            hanlerDespegar(e.target.value)
          }}
          id='categoria'
          className='form-control'
        >
          <option value='0'> seleccione...</option>
          {categorias.map(cat => (
            <option key={cat.id} value={cat.id}>
              {' '}
              {cat.nombre}{' '}
            </option>
          ))}
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor='producto'>productos</label>
        <select
          value={producto}
          onChange={e => {
            setproducto(e.target.value)
          }}
          id='categoria'
          className='form-control'
        >
          <option value='0'> seleccione...</option>

          {verduras.map(ver => (
            <option key={ver.id} value={ver.id}>
              {' '}
              {ver.nombre}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default HooksCustom
