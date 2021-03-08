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
  return (
    <div className="contenedor">
      <Cabecera />
      <Senyores senyores={senyores} />
    </div>
  )
}

export default SenyoresContainer;
