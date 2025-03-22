import css from "../../Info/Info.module.css";
import honey from "../../../assets/images/honey.jpg";
import Poster from "../../Poster/Poster";

const Honey = () => {
  return (
    <div className={css.massageInfoWrap}>
      <h4>Медовий</h4>
      <p>
        Медовий масаж — це корисна процедура, що поєднує властивості масажу та
        лікувальну дію меду. Під час сеансу мед наносять на шкіру, а потім
        виконують спеціальні рухи, які покращують кровообіг і сприяють виведенню
        токсинів.
      </p>
      <Poster link={honey} alt="honey massage image" />
      <p>
        Цей вид масажу допомагає зменшити целюліт, підвищити тонус шкіри та
        зміцнити імунітет. Перед процедурою важливо перевірити відсутність
        алергії на мед і проконсультуватися з фахівцем щодо можливих
        протипоказань.
      </p>
    </div>
  );
};

export default Honey;
