import css from "../../Info/Info.module.css";
import link from "../../../assets/images/sports.jpg";

const Sports = () => {
  return (
    <div className={css.massageInfoWradivp}>
      <h4>Спортивний</h4>
      <p>
        Спортивний масаж — це спеціальна техніка, яка використовується для
        підготовки спортсменів до змагань, відновлення після тренувань та
        лікування травм. Масаж допомагає зняти м'язову напругу, покращити
        кровообіг і прискорити процес відновлення після інтенсивних фізичних
        навантажень. Різні техніки, такі як розминання, постукування і
        розтирання, допомагають поліпшити гнучкість та зменшити ризик травм.
      </p>
      <img src={link} alt="sports massage image" />
      <p>
        Цей вид масажу сприяє зниженню рівня втоми, полегшує м'язові болі і
        допомагає підтримувати оптимальний стан м'язів під час спортивних
        навантажень. Спортивний масаж також ефективний при лікуванні травм,
        таких як розтягнення або забої, прискорюючи процес відновлення.
        Регулярний масаж може значно покращити результативність тренувань і
        допомогти спортсменам досягати високих результатів у своїх дисциплінах.
      </p>
    </div>
  );
};

export default Sports;
