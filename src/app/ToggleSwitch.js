import {useState} from 'react';
export default function ToggleSwitch(){
  const [estado, setEstado] = useState("OFF");

  function cambiarEstado({boton}){
    if (estado == "OFF"){
      setEstado("ON");
    }else{
      setEstado("OFF");
    }
  }
  return <Button onClick={cambiarEstado(this)}>{estado == "OFF"? "OFF" : "ON"}</Button>
}