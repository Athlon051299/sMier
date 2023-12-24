import { datatext } from "../../data/Home-data/datahome";
import Homeimage from "../../imgs/Homeimage.png";
import { Button } from "../Buttons/button";
import style from "./MainContainer.module.css";

export function MainContainer() {
  return (
    <div className={style.maincontainer}>
      <div className={style.firstbox}>
        <div className={style.boxtext}>
          <h1 className={style.text}>
            {datatext[0].lightText} <br />
            <span className={style.spantext}>{datatext[0].boldText}</span>
          </h1>
        </div>
        <div className={style.boxBtn}>
          <Button content={"Hire me"}></Button>
          <Button content={"download cv"} />
        </div>
      </div>
      <div className={style.secondbox}>
        <div className={style.boximg}>
          <img width="500" src={Homeimage} alt="Santiago" />
        </div>
      </div>
    </div>
  );
}
