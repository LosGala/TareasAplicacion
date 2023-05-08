import './App.css';
import  MiLogo from './imagenes/mi Logo 3 Lion .png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img 
          src={MiLogo}
          className='logo' />
      </div>
      <div className='tareas-lista-principal'>
          <h1> Mis Tareas </h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
