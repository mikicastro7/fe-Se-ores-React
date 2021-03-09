import React, { useState } from 'react';
import Senyores from '../Components/Senyores/Senyores'
import Cabecera from '../Components/Cabecera/Cabecera'

const SenyoresContainer = () => {
  const [senyores, setSeñores] = useState(
    [{
      id: 1,
      nombre: "El Fary",
      profesion: "Influencer",
      foto: "fary.jpg",
      estado: "R.I.P.",
      twitter: "Pendiente",
      marcado: true
    },
    {
      id: 2,
      nombre: "Julio Iglesias",
      profesion: "Youtuber",
      foto: "julio.jpg",
      estado: "Vivo",
      twitter: "@JulyChurchs",
      marcado: false
    },
    {
      id: 3,
      nombre: "Bertín Osborne",
      profesion: "Java Developer",
      foto: "bertin.jpg",
      estado: "Vivo",
      twitter: "@BertinOsborne",
      marcado: true
    }]
  )

  const marcarTodos = () => {
    const newObject = senyores.map(senyor => {
      senyor.marcado = true
      return senyor;
    })
    setSeñores(newObject)
  }

  const marcaSenyorHandler = (id) => {
    const newArray = senyores.map(senyor => {
      if (senyor.id === id) {
        senyor.marcado = !senyor.marcado
        console.log(!senyor.marcado);
      }
      return senyor
    })
    setSeñores(newArray);
  }
  return (
    <div className="contenedor">
      <Cabecera
        marcados={senyores.filter(senyor => senyor.marcado === true).length}
        marcarTodos={marcarTodos} />
      <Senyores desmarcarSenyor={marcaSenyorHandler} senyores={senyores} />
    </div>
  )
}

export default SenyoresContainer;
