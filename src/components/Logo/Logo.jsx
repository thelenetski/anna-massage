import css from "./Logo.module.css";
import runa from "../../assets/runa.png";

const Logo = () => {
  return <img className={css.runa} src={runa} alt="runa" />;
};

export default Logo;
