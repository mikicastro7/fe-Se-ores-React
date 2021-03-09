import React from 'react'

const Cabecera = (props) => {
  const marcarTodos = (e) => {
    e.preventDefault();
    props.marcarTodos();
  }
  return (
    <div>
      <header className="cabecera">
        <h1>Señores que te apuntan con el dedo</h1>
        <p className="totales"><span className="nmarcados">{props.marcados}</span> señores que te apuntan con el dedo marcados</p>
        <a onClick={marcarTodos} className="accion-marcar" href="marcar-todos">Marcar todos</a>
      </header>
    </div>
  )
}

export default Cabecera
