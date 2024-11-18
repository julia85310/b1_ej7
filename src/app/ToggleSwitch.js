import {useState} from 'react';
export default function ToggleSwitch(){
  const [estado, setEstado] = useState("OFF");

  function cambiarEstado(){
    if (estado == "OFF"){
      setEstado("ON");
    }else{
      setEstado("OFF");
    }
  }
  return <button onClick={cambiarEstado}>
      {estado}
    </button>
}