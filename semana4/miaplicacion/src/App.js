import logo from './logo.svg';
import gato from "./images/gatoCabreado.jpg";

import "./App.css";

import Image from './components/image';
import Button from './components/button';

function App() {
  let valorBoton = "";
  const lanzarAlerta = () => {
    alert("SOY UNA ALERTA");
  };
  return (
    <div>
      <header>
        <p>
          Hola JIMENEZ <code>src/App.js</code> and save to reload.
        </p>
        <Image paramLogo={logo} />
        <Image paramLogo={gato} />
        <Button 
        id={"alerta"} 
        name={"alerta"}
        events={() => {
          lanzarAlerta();

        }}
      />
      </header>
    </div>
  );
}

export default App;
