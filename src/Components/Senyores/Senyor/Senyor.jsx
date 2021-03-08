import React from 'react'

import s1 from './img/s1.jpg'
import s2 from './img/s1.jpg'
import s3 from './img/s1.jpg'

const Senyor = (props) => {
  return (
    <article className="senyor">
      <div className="avatar">
        <img src={s1} alt={`${props.nombre} señalándote con el dedo`} />
        <span className="inicial">{props.nombre[0]}</span>
      </div>
      <div className="info">
        <h2>{props.nombre}</h2>
        <ul>
          <li><span className="etiqueta">Profesión:</span> {props.profesion}</li>
          <li><span className="etiqueta">Estado:</span> {props.estado}</li>
          <li><span className="etiqueta">Twitter:</span> {props.twitter}</li>
        </ul>
      </div>
      <i className="icono fas fa-check"></i>
    </article>
  )
}

export default Senyor
