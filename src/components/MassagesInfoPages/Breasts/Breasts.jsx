import css from "../../Info/Info.module.css";
import breasts from "../../../assets/images/breasts.jpg";
import Poster from "../../Poster/Poster";

const Breasts = () => {
  return (
    <div className={css.massageInfoWrap}>
      <h4>Масаж грудей</h4>
      <p>
        Комплексні техніки масажу грудей спрямовані на підтримку здоров’я,
        естетики та комфорту грудної зони. Я застосовую індивідуально підібрані
        методики, зокрема:
      </p>
      <Poster link={breasts} alt={"breasts massage image"} />
      <ul>
        <li>
          <b>Лікувальний масаж</b> — для зняття напруги, покращення кровообігу
          та профілактики застійних процесів.
        </li>
        <li>
          <b>Лімфодренажний</b> — для м’якого очищення лімфатичної системи та
          зменшення набряків.
        </li>
        <li>
          <b>Ліпомоделюючий</b> — сприяє тонусу, покращує форму та еластичність
          грудей.
        </li>
        <li>
          <b>Масаж у період лактації</b> — підтримує м’яке грудне вигодовування,
          запобігає лактостазу.
        </li>
        <li>
          <b>При мастопатії</b> — допоміжна терапія для зменшення дискомфорту
          (лише після консультації з лікарем).
        </li>
        <li>
          <b>Аюрведичний</b> — ніжна техніка з використанням олій, що гармонізує
          енергію тіла.
        </li>
        <li>
          <b>Масаж трав’яними мішечками</b> — поєднує тепло та аромат цілющих
          трав для глибокого розслаблення.
        </li>
        <li>
          <b>Даоський масаж грудей</b> — енергетична техніка, яка активує жіночу
          силу та внутрішній баланс.
        </li>
        <li>
          <b>Доглядові процедури</b> — пілінги, обгортання та живлення
          делікатної шкіри декольте.
        </li>
      </ul>
      <p>
        Цей масаж корисний кожному, в кого є груди — незалежно від віку, статі
        чи періоду життя. Особливо рекомендовано мамам до, під час та після
        грудного вигодовування.
      </p>
    </div>
  );
};

export default Breasts;
