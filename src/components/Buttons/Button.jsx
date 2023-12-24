/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./Button.module.css";
import { useEffect } from "react";

export function Button({ ...props }) {
  const [detector, setdetector] = useState(true);
  let tolowercase = String.prototype.toLocaleLowerCase.apply(props.content);
  const changeStyle = (content) => {
    if (content == "hire me") {
      setdetector(true);
    }
    if (content == "download cv") {
      setdetector(null);
    }
  };

  useEffect(() => {
    changeStyle(tolowercase);
  }, [tolowercase]);

  return (
    <button
      className={`${style.btn} ${detector ? style.default : style.offset}`}
    >
      {tolowercase}
    </button>
  );
}
