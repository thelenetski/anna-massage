import "./App.css";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { PiMapPinAreaFill } from "react-icons/pi";
import { PiMoneyWavy } from "react-icons/pi";
import { CgClose } from "react-icons/cg";
import runa from "./assets/runa.png";
import { useState } from "react";
import clsx from "clsx";
import Price from "./components/Price/Price";

function App() {
  const [modalActive, setModalActive] = useState(false);

  const modalHandler = () => {
    setModalActive(!modalActive);
  };

  return (
    <div className="wrapper">
      <img className="runa" src={runa} alt="runa" />
      {/* <h1 className="title">Найкращий массаж у всесвіті</h1> */}
      {/* <h1 className="title">Масаж - найкращий прояв любові до себе!</h1> */}
      <div className="main">
        <a
          href="https://www.instagram.com/massage_anna.kh"
          className="linkWrap"
          target="_blank"
        >
          <FaInstagram />
          <span>Instagram</span>
        </a>
        <a
          href="https://t.me/anna_yuriewna"
          className="linkWrap"
          target="_blank"
        >
          <FaTelegram />
          <span>Telegram</span>
        </a>
        <a
          href="viber://chat?number=+380732052747"
          className="linkWrap"
          target="_blank"
        >
          <FaViber />
          <span>Viber</span>
        </a>
        {/* <a href="#" className="linkWrap">
          <MdPhone />
          <span>Зателефонувати</span>
        </a> */}
        <a
          href="https://maps.app.goo.gl/udSc34exGSaXLemo8?g_st=com.google.maps.preview.copy"
          className="linkWrap"
          target="_blank"
        >
          <PiMapPinAreaFill />
          <span>Локація</span>
        </a>
      </div>
      <div className="actions">
        <button onClick={modalHandler} className="price">
          <PiMoneyWavy />
        </button>
        <a href="tel:+380732052747" className="call">
          <MdPhone />
        </a>
      </div>
      <div
        className={clsx("modalPrice", {
          active: modalActive === true,
        })}
      >
        <CgClose className="close" onClick={modalHandler} />
        <Price />
      </div>
      <div className="modalStock"></div>
    </div>
  );
}

export default App;
