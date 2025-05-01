import css from "./HrLine.module.css";
import { GiThreeLeaves } from "react-icons/gi";

function HrLine({ color }) {
  return (
    <div className={css.hr}>
      <div className={css.hrLeft} style={{ background: color }}></div>
      <GiThreeLeaves size={20} />
      <div className={css.hrRight} style={{ background: color }}></div>
    </div>
  );
}

export default HrLine;
