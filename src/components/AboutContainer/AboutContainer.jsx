import style from "./AboutContainer.module.css";
import about from "../../imgs/About.jpg";
import { data_about } from "../../data/About-data/About-data-es/About-data";
export function AboutContainer() {
  const [{ text: dtext }] = data_about;
  return (
    <article className={style.aboutContainer}>
      <div className={style.ImageContainer}>
        <img width="700" className={style.boximg} src={about} alt="Mier" />
      </div>
      <div className={style.boxtet}>
        <div className={style.containerText}>
          <h1>Acerca de mi</h1>
          <p>{dtext}</p>
        </div>
      </div>
    </article>
  );
}
