import css from "../../Info/Info.module.css";
import anticellulite from "../../../assets/images/anticellulite.jpg";
import Poster from "../../Poster/Poster";

const AntiCellulite = () => {
  return (
    <div className={css.massageInfoWrap}>
      <h4>Антицелюлітний</h4>
      <p>
        Антицелюлітний масаж — це ефективна процедура, спрямована на покращення
        кровообігу та зменшення підшкірних жирових відкладень. Під час сеансу
        використовуються інтенсивні розтирання, розминання та натискання, що
        активізують обмін речовин і покращують стан шкіри.
      </p>
      <Poster link={anticellulite} alt={"anticellulite massage image"} />
      <p>
        Цей масаж допомагає зменшити целюліт, підвищити пружність шкіри та
        покращити контури тіла. Перед початком курсу бажано проконсультуватися з
        фахівцем, адже процедура має протипоказання, зокрема варикоз і
        захворювання серцево-судинної системи.
      </p>
    </div>
  );
};

export default AntiCellulite;
