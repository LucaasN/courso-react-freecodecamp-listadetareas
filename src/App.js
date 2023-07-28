import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import freeCodeCampLogo from './images/fcc-logo.png'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contendeor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo' 
        />
      </div>

      <div className='tareas-lista-pricipal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas></ListaDeTareas>

        
      </div>

    </div>
  );
}

export default App;
