import css from "./Price.module.css";

const Price = () => {
  return (
    <div className={css.priceWrap}>
      <div className={css.priceTitles}>
        <p>Тип масажу</p>
        <p>Вартість</p>
      </div>
      <div className={css.priceBox}>
        <p>Антицелюлітний:</p>
        <p>700/год</p>
      </div>
      <div className={css.priceBox}>
        <p>Загальний класичний:</p>
        <p>400/год</p>
      </div>
      <div className={css.priceBox}>
        <p>Вакуумний:</p>
        <p>500/год</p>
      </div>
      <div className={css.priceBox}>
        <p>Медовий:</p>
        <p>900/год</p>
      </div>
      <div className={css.priceBox}>
        <p>Дитячий:</p>
        <p>400/год</p>
      </div>
      <div className={css.priceBox}>
        <p>Нейро-моделюючий іспанський масаж обличчя:</p>
        <p>1500/год</p>
      </div>
    </div>
  );
};

export default Price;
