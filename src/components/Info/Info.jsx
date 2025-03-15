import css from "./Info.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Vacuum from "../MassagesInfoPages/Vacuum/Vacuum";
import Honey from "../MassagesInfoPages/Honey/Honey";
import AntiCellulite from "../MassagesInfoPages/AntiCellulite/AntiCellulite";
import Spanish from "../MassagesInfoPages/Spanish/Spanish";

const styles = {
  overflowY: "scroll",
  zIndex: "999",
};

const Info = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={css.sliderWrap}
      >
        <SwiperSlide style={styles}>
          <Spanish />
        </SwiperSlide>
        <SwiperSlide style={styles}>
          <Vacuum />
        </SwiperSlide>
        <SwiperSlide style={styles}>
          <Honey />
        </SwiperSlide>
        <SwiperSlide style={styles}>
          <AntiCellulite />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Info;
