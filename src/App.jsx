import "./App.css";
import { MdPhone } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { PiMoneyWavy } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Price from "./components/Price/Price";
import Logo from "./components/Logo/Logo";
import Main from "./components/Main/Main";
import { PiFlowerLotusThin } from "react-icons/pi";
import { TiInfoLargeOutline } from "react-icons/ti";
import { BsChatSquareHeart } from "react-icons/bs";
import { GrUserFemale } from "react-icons/gr";
import Info from "./components/Info/Info";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Reviews from "./components/Reviews/Reviews";
import About from "./components/About/About";
import Promo from "./components/Promo/Promo";
import Promotions from "./components/Promotions/Promotions";
import HrLine from "./components/HrLine/HrLine";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState("");
  const modalRef = useRef(null);
  const priceRef = useRef(null);
  const promoRef = useRef(null);

  const modalHandler = (type) => {
    setModalType(type);
    setModalActive(!modalActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !priceRef.current.contains(event.target) &&
        !promoRef.current.contains(event.target)
      ) {
        setModalActive(false);
      }
    };

    if (modalActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalActive]);

  useEffect(() => {
    modalActive
      ? document.body.classList.add("modal-open")
      : document.body.classList.remove("modal-open");
  }, [modalActive]);

  return (
    <div className="wrapper">
      <header className="header">
        <Logo />
        <div>
          <h1>Aura Balance</h1>
          <h4>Масаж - найкращий прояв любові до себе</h4>
        </div>
      </header>
      <div style={{ width: "100%", margin: "10% 0" }}>
        <HrLine color={"#ffffff47"} />
      </div>

      <Main />
      <div className="actions bg2">
        <a
          ref={priceRef}
          onClick={() => modalHandler("price")}
          className="price"
        >
          <PiMoneyWavy size={20} />
          Прайс
        </a>
        <a ref={priceRef} onClick={() => modalHandler("info")} className="info">
          <TiInfoLargeOutline size={20} />
          Інфо
        </a>
        <a href="tel:+380732052747" className="call">
          <MdPhone size={20} />
        </a>
      </div>
      <Promo ref={promoRef} func={modalHandler} />
      <div className="actions bg1">
        <a
          ref={priceRef}
          onClick={() => modalHandler("reviews")}
          className="info"
          style={{ width: "45%" }}
        >
          <BsChatSquareHeart size={20} />
          Відгуки
        </a>
        <a
          ref={priceRef}
          onClick={() => modalHandler("about")}
          className="info"
          style={{ width: "45%" }}
        >
          <GrUserFemale size={20} />
          Про мене
        </a>
      </div>
      <AnimatePresence initial={false}>
        {modalActive ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            key="box"
            ref={modalRef}
            className={clsx("modalPrice", {
              // active: modalActive === true,
            })}
          >
            <CgClose className="close" onClick={modalHandler} />
            {modalType === "price" && <Price />}
            {modalType === "info" && <Info />}
            {modalType === "reviews" && <Reviews />}
            {modalType === "about" && <About />}
            {modalType === "promo" && <Promotions />}
            <PiFlowerLotusThin className="flower" />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="modalStock"></div>
    </div>
  );
}

export default App;
