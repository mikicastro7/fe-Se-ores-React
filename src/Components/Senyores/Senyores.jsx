import React from 'react'
import Senyor from './Senyor/Senyor'

const Senyores = (props) => {
  return (
    <>
      {props.senyores.map(senyor => <Senyor
        key={senyor.id}
        id={senyor.id}
        nombre={senyor.nombre}
        profesion={senyor.profesion}
        foto={senyor.foto}
        estado={senyor.estado}
        twitter={senyor.twitter}
        marcado={senyor.marcado}
        desmarcarSenyor={props.desmarcarSenyor}
      />)}
    </>
  )
}

export default Senyores;
