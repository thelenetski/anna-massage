import link from "../../assets/reviews/1.jpg";
import link2 from "../../assets/reviews/2.jpg";
import link3 from "../../assets/reviews/3.jpg";
import link4 from "../../assets/reviews/4.jpg";
import css from "./Reviews.module.css";
import Poster from "../Poster/Poster";
import HrLine from "../HrLine/HrLine";

const Reviews = () => {
  return (
    <div className={css.reviewsWrap}>
      <h4>Відгуки</h4>
      <Poster link={link} alt={"review1 image"} />
      <HrLine color={"#17382a"} />
      <Poster link={link2} alt={"review2 image"} />
      <HrLine color={"#17382a"} />
      <Poster link={link3} alt={"review3 image"} />
      <HrLine color={"#17382a"} />
      <Poster link={link4} alt={"review4 image"} />
    </div>
  );
};

export default Reviews;
