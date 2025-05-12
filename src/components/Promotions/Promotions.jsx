import css from "./Promotions.module.css";

const Promotions = () => {
  return (
    <div className={css.promotionWrap}>
      <div className={css.promotion}>
        <div className={css.promotionTitle}>
          <h4>Знайомство</h4>
        </div>
        <div className={css.promotionContent}>
          <p>
            <b>-30% на перший масаж</b>
            <br />
            Познайомтеся з моїм підходом до турботи про тіло — з приємною
            знижкою для нових клієнтів. <br />
            М’яко, дбайливо, з увагою саме до вас.
          </p>
        </div>
      </div>
      <div className={css.promotion}>
        <div className={css.promotionTitle}>
          <h4>Приведи друга</h4>
        </div>
        <div className={css.promotionContent}>
          <p>
            <b>-40% турбота, якою хочеться ділитися</b>
            <br />
            Приведи подругу (чи друга) — отримай 40% знижки на наступний масаж.
            Ділися турботою й отримуй бонуси.
          </p>
        </div>
      </div>
      <div className={css.promotion}>
        <div className={css.promotionTitle}>
          <h4>Пакет “Турбота про себе” + подарунок</h4>
        </div>
        <div className={css.promotionContent}>
          <p>
            • Купуй 5 сеансів — і отримай 6-й з 50% знижкою
            <br />• Купуй 10 сеансів — і 11-й масаж отримуй у подарунок
          </p>
        </div>
      </div>
      <div className={css.promotion}>
        <div className={css.promotionContent}>
          <p>* знижки не діють при замовлені масаж надім</p>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
