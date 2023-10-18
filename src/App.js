import React, { useState } from 'react';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const handleNext = () => {
    // Lógica para la acción "Siguiente"
    console.log('Siguiente');
  };
Hola
  const handleBack = () => {
    // Lógica para la acción "Atrás"
    console.log('Atrás');
  };
  // Función para manejar la acción de "Reproducir" y "Pausar"
  const handlePlayPause = () => {
    if (isPlaying) {
      // Si está reproduciendo, pausa la canción
      audioRef.current.pause();
    } else {
      // Si no está reproduciendo, inicia la canción
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Referencia al elemento de audio
  const audioRef = React.createRef();

  return (
    <div className="app">
      <div className="main-content">
        {/* Contenido principal */}
        <div className="sidebar">
          {/* ... */}
        </div>
        <div className="main">
          <div className="header">
            {/* ... */}
          </div>
          <div className="song-info">
            {/* ... */}
          </div>
          <div className="controls">
            {/* ... */}
          </div>
          <div className="playlist">
            {/* ... */}
          </div>
        </div>
      </div>
      <div className="music-player-container">
        <div className="music-player">
          <div className="music-info">
            <img
              src="https://pbs.twimg.com/media/Fr72NrrXwAM9WK0.jpg:large"
              alt="Portada del álbum"
              className="album-cover"
            />
            <div className="song-details">
              <h3>Nombre de la canción</h3>
              <p>Nombre del artista</p>
            </div>
          </div>
          <div className="music-controls">
            <img
              src="next.png"
              alt="Siguiente"
              className="control-button"
              onClick={handleNext} // Agrega tu lógica para la acción "Siguiente"
            />
            <img
              src={isPlaying ? 'pause.png' : 'play.png'} // Cambia el botón entre "Pausar" y "Reproducir"
              alt={isPlaying ? 'Pausar' : 'Reproducir'}
              className="control-button"
              onClick={handlePlayPause} // Llama a la función handlePlayPause al hacer clic
            />
            <img
              src="back.png"
              alt="Atrás"
              className="control-button"
              onClick={handleBack} // Agrega tu lógica para la acción "Atrás"
            />
          </div>
        </div>
      </div>
      <audio ref={audioRef}>
        <source src="https://firebasestorage.googleapis.com/v0/b/musicplayer-6998e.appspot.com/o/OA%20-%20%20Anuel%20AA%2C%20Quevedo%2C%20Maluma%20Feat.%20DJ%20Luian%2C%20Mambo%20Kingz%20(Video%20Oficial)_bWycnVL6_dE.mp3?alt=media&token=05118fbe-b3fb-4030-bebd-824415b26aa8&_gl=1*7wb617*_ga*MzEyMzc3MTk0LjE2OTU2NTM2NTE.*_ga_CW55HF8NVT*MTY5NzYxNTAwMy42LjEuMTY5NzYxNTAyNS4zOC4wLjA." type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </div>
  );
}

export default App;
