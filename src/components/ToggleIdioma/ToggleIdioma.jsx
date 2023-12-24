import { useState } from "react";
import style from "./ToggleIdioma.module.css";

export function ToggleIdioma() {
  const [idioma, setidioma] = useState(true);

  const interruptor = () => {
    setidioma(!idioma);
  };

 



  return (
    <div className={`${style.boxleng} `} onClick={interruptor}>
      <p className={style.p}>Es</p>
      <button
        className={`${style.toggleleng} ${
          idioma ? style.activadoleng : style.indicadorDesactivado
        }`}
      >
        <div className={style.indicador}></div>
      </button>
      <p className={style.p}>En</p>
    </div>
  );
}
