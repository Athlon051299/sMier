import { data } from "../../data/Navbar-data/Navbar-data-es/dataNavbar";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { ToggleIdioma } from "../ToggleIdioma/ToggleIdioma";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const [toggle, setToggle] = useState(null);

  const { t, i18 } = useTranslation("navrouters");

  const changemenu = () => {
    setToggle(!toggle);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setToggle(false);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = () => {
    if (window.innerWidth > 1250 && toggle) {
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, toggle]);

  return (
    <nav>
      <div className={style.boxnav}>
        <div className={style.divlogo}>
          <h1 className={style.titlelogo}>
            Santiago <span className={style.spanlogo}>Mier</span>
          </h1>
        </div>
        <div className={style.boxmenu}>
          <button className={style.menu} onClick={changemenu}>
            <ion-icon name={!toggle ? "menu" : "close"}></ion-icon>
          </button>
        </div>
      </div>

      <div
        className={`${style.containerlist} ${
          toggle ? style.activado : style.desactivado
        }`}
      >
        <ul className={style.navlist}>
          {data.map((ruta) => (
            <li className={style.list} key={ruta.title}>
              <NavLink
                onClick={
                  toggle && {
                    changemenu,
                  }
                }
                to={ruta.path}
              >
                {t(ruta.title.toLowerCase())}
              </NavLink>
            </li>
          ))}
        </ul>
    
        <ToggleIdioma />
      </div>
    </nav>
  );
}
