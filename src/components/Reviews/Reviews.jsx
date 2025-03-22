import link from "../../assets/reviews/1.jpg";
import link2 from "../../assets/reviews/2.jpg";
import { GiThreeLeaves } from "react-icons/gi";
import css from "./Reviews.module.css";
import Poster from "../Poster/Poster";

const Reviews = () => {
  return (
    <div className={css.reviewsWrap}>
      <h4>Відгуки</h4>
      <Poster link={link} alt={"review1 image"} />
      <div className={css.hr}>
        <div className={css.hrLeft}></div>
        <GiThreeLeaves size={20} />
        <div className={css.hrRight}></div>
      </div>
      <Poster link={link2} alt={"review2 image"} />
    </div>
  );
};

export default Reviews;
