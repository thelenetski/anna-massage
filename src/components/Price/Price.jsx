import css from "./Price.module.css";

const Price = () => {
  return (
    <div className={css.priceWrap}>
      {/* <div className={css.priceTitles}>
        <p>Тип масажу</p>
        <p>Вартість</p>
      </div> */}
      <div className={css.priceBox}>
        <p className={css.priceName}>Антицелюлітний, медовий, спортивний:</p>
        <div className={css.prices}>
          <p>650₴</p>
          <p>45хв</p>
          <p>750₴</p>
          <p>1год</p>
          <p>1050₴</p>
          <p>1.5год</p>
        </div>
      </div>
      <div className={css.priceBox}>
        <p className={css.priceName}>Загальний класичний:</p>
        <div className={css.prices}>
          <p>600₴</p>
          <p>45хв</p>
          <p>700₴</p>
          <p>1год</p>
          <p>1000₴</p>
          <p>1.5год</p>
          <p>1300₴</p>
          <p>2год</p>
        </div>
      </div>
      <div className={css.priceBox}>
        <p className={css.priceName}>Дитячий:</p>
        <div className={css.prices}>
          <p>500₴</p>
          <p>30хв</p>
        </div>
      </div>
      <div className={css.priceBox}>
        <p className={css.priceName}>
          Нейро-моделюючий іспанський масаж обличчя:
        </p>
        <div className={css.prices}>
          <p>400₴</p>
          <p>30хв</p>
        </div>
      </div>
    </div>
  );
};

export default Price;
