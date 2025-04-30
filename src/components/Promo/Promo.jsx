import clsx from "clsx";
import css from "./Promo.module.css";
import { SlPresent } from "react-icons/sl";

const Promo = ({ ref, func }) => {
  return (
    <div className={clsx("actions bg3", css.promoWrap)}>
      <a ref={ref} onClick={() => func("promo")} className={css.promo}>
        <SlPresent size={22} />
        Нові Акції
      </a>
    </div>
  );
};

export default Promo;
