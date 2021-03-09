import React from 'react'

const Senyor = (props) => {
  return (
    <article onClick={() => props.desmarcarSenyor(props.id)} className="senyor">
      <div className="avatar">
        <img className={props.marcado ? "senyort-rotado" : ""} src={`./s${props.id}.jpg`} W alt={`${props.nombre} señalándote con el dedo`} />
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
      <i style={{ display: props.marcado ? "block" : "none" }} className="icono fas fa-check"></i>
    </article>
  )
}

export default Senyor
