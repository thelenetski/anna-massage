import css from "./Price.module.css";

const Price = () => {
  return (
    <>
      {/* <div className={css.priceTitles}>
        <p>Тип масажу</p>
        <p>Вартість</p>
      </div> */}
      <div className={css.priceWrap}>
        <div className={css.priceBox}>
          <p className={css.priceName}>Загальний класичний, вакуумний:</p>
          <div className={css.prices}>
            <p>45хв</p>
            <p>600₴</p>
            <p>1год</p>
            <p>700₴</p>
            <p>1.5год</p>
            <p>1000₴</p>
            <p>2год</p>
            <p>1300₴</p>
          </div>
        </div>
        <div className={css.priceBox}>
          <p className={css.priceName} style={{ marginTop: 0 }}>
            Антицелюлітний, медовий, спортивний:
          </p>
          <div className={css.prices}>
            <p>45хв</p>
            <p>650₴</p>
            <p>1год</p>
            <p>750₴</p>
            <p>1.5год</p>
            <p>1050₴</p>
            <p>2год</p>
            <p>1350₴</p>
          </div>
        </div>
        <div className={css.priceBox}>
          <p className={css.priceName}>Масаж грудей:</p>
          <div className={css.prices}>
            <p>40хв</p>
            <p>500₴</p>
          </div>
        </div>
        <div className={css.priceBox}>
          <p className={css.priceName}>Дитячий:</p>
          <div className={css.prices}>
            <p>30хв</p>
            <p>500₴</p>
          </div>
        </div>
        <div className={css.priceBox}>
          <p className={css.priceName}>
            Нейро-моделюючий іспанський масаж обличчя:
          </p>
          <div className={css.prices}>
            <p>30хв</p>
            <p>400₴</p>
            <p>1год</p>
            <p>750₴</p>
          </div>
        </div>
        <div className={css.priceBox}>
          <p className={css.priceName}>Масаж у чотири руки:</p>
          <div className={css.prices}>
            <p>1год</p>
            <p>1500₴</p>
          </div>
        </div>
        <div className={css.priceBox}>
          <p className={css.priceName}>Масаж у чотири руки під живу музику:</p>
          <div className={css.prices}>
            <p>1год</p>
            <p>2800₴</p>
            <p>1.5год</p>
            <p>3400₴</p>
          </div>
        </div>
        <div className={css.priceBox}>
          <p className={css.priceName}>Масаж у шість рук:</p>
          <div className={css.prices}>
            <p>1год</p>
            <p>2800₴</p>
            <p>1.5год</p>
            <p>3400₴</p>
          </div>
        </div>
        <div className={css.priceBox}>
          <p className={css.priceName}>Парний масаж:</p>
          <div className={css.prices}>
            <p>1год</p>
            <p>1500₴</p>
          </div>
        </div>
        <div className={css.priceBox}>
          <p className={css.priceName}>Масаж для трьох:</p>
          <div className={css.prices}>
            <p>1год</p>
            <p>2800₴</p>
            <p>1.5год</p>
            <p>3400₴</p>
          </div>
        </div>
        <div className={css.priceBox}>
          <span>🕊️Інколи найкраще — не кудись іти, а залишитись вдома</span>
          <span style={{ marginTop: "5px" }}>
            За виїзд — +300 грн до вартості сеансу
          </span>
        </div>
      </div>
    </>
  );
};

export default Price;
