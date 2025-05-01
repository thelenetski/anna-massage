import link from "../../assets/cert/1.jpg";
import link2 from "../../assets/cert/2.jpg";
import link3 from "../../assets/cert/3.jpg";
import Poster from "../Poster/Poster";
import css from "./About.module.css";

const About = () => {
  return (
    <div className={css.aboutWrap}>
      <h4>Про мене</h4>
      <p>
        Вітаю! Мене звати Аня, і я – майстер масажу та засновник{" "}
        <b>Aura Balance</b>. Для мене масаж – це не просто техніка, а мистецтво
        турботи про тіло, розум і душу. Я вірю, що любов до себе починається з
        уваги до свого тіла, і масаж – один із найкращих способів подарувати
        собі цю турботу.
      </p>
      <Poster link={link} alt="certificate image" />
      <p>
        Якщо ви завітали до мене, це означає, що ви обрали час для себе, для
        свого здоров’я та гармонії. Це найкращий прояв любові до себе, і я
        щаслива бути частиною цього процесу. Моя мета – не тільки допомогти вам
        розслабитися й відновити сили, а й створити атмосферу, де ви відчуєте
        себе цінними, спокійними й наповненими енергією.
      </p>
      <Poster link={link2} alt="certificate2 image" />
      <p>
        Я щиро дякую вам за довіру. Кожен мій клієнт – особливий, і я радію
        можливості зробити ваш день кращим. Чекаю на вас у Aura Balance, де на
        вас чекає тепло, турбота та баланс.
      </p>
      <Poster link={link3} alt="certificate2 image" />
    </div>
  );
};

export default About;
