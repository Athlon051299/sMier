import { useState } from 'react';
import style from "./Skills.module.css";
import { dataskills } from "../../data/Skills-data/Skills-data";

export function Skills() {
  const [currentCard, setCurrentCard] = useState(0);

  const showNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % dataskills.length);
  };

  const showPrevCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + dataskills.length) % dataskills.length);
  };

  const currentCardData = dataskills[currentCard];

  return (
    <section className={style.skills}>
      <h1 className={style.title}>skills</h1>
      <div className={style.skillContainer}>
        <div className={style.boxSkills}>
          <div className={style.cardskills}>
            <button className={style.navButtonLeft} onClick={showPrevCard}>{'<'}</button>
            <div className={style.imgbox}>
              <img src={currentCardData.img} alt={currentCardData.title} />
            </div>
            <div className={style.boxtext}>
              <h1>{currentCardData.title}</h1>
              <p>{currentCardData.text}</p>
            </div>
            <button className={style.navButtonRight} onClick={showNextCard}>{'>'}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
