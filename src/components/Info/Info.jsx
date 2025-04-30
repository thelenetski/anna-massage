import css from "./Info.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Vacuum from "../MassagesInfoPages/Vacuum/Vacuum";
import Honey from "../MassagesInfoPages/Honey/Honey";
import AntiCellulite from "../MassagesInfoPages/AntiCellulite/AntiCellulite";
import Spanish from "../MassagesInfoPages/Spanish/Spanish";
import General from "../MassagesInfoPages/General/General";
import Children from "../MassagesInfoPages/Children/Children";
import Sports from "../MassagesInfoPages/Sports/Sports";
import Fourhands from "../MassagesInfoPages/Fourhands/Fourhands";
import Breasts from "../MassagesInfoPages/Breasts/Breasts";

const styles = {
  overflowY: "scroll",
  zIndex: "999",
};

const Info = () => {
  return (
    <>
      <Swiper
        spaceBetween={40}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination]}
        className={css.sliderWrap}
      >
        <SwiperSlide style={styles}>
          <General />
        </SwiperSlide>
        <SwiperSlide style={styles}>
          <AntiCellulite />
        </SwiperSlide>
        <SwiperSlide style={styles}>
          <Breasts />
        </SwiperSlide>
        <SwiperSlide style={styles}>
          <Sports />
        </SwiperSlide>
        <SwiperSlide style={styles}>
          <Fourhands />
        </SwiperSlide>
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
          <Children />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Info;
