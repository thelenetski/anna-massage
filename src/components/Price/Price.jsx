import css from "./Price.module.css";

const Price = () => {
  return (
    <div className={css.priceWrap}>
      <div className={css.priceTitles}>
        <p>Тип масажу</p>
        <p>Вартість</p>
      </div>
      <div className={css.priceBox}>
        <p className={css.priceName}>Антицелюлітний медовий/спортивний:</p>
        <div className={css.prices}>
          <p>650₴ 45хв</p>
          <p>750₴ 1год</p>
          <p>1050₴ 1.5год</p>
        </div>
      </div>
      <div className={css.priceBox}>
        <p className={css.priceName}>Загальний класичний:</p>
        <div className={css.prices}>
          <p>600₴ 45хв</p>
          <p>700₴ 1год</p>
          <p>1000₴ 1.5год</p>
          <p>1300₴ 2год</p>
        </div>
      </div>
      <div className={css.priceBox}>
        <p className={css.priceName}>Дитячий:</p>
        <div className={css.prices}>
          <p>500₴ 30хв</p>
        </div>
      </div>
      <div className={css.priceBox}>
        <p className={css.priceName}>
          Нейро-моделюючий іспанський масаж обличчя:
        </p>
        <p>400₴ 30хв</p>
      </div>
    </div>
  );
};

export default Price;
