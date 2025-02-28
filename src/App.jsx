import "./App.css";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { PiMapPinAreaFill } from "react-icons/pi";
import runa from "./assets/runa.png";

function App() {
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
      <a href="tel:+380732052747" className="call">
        <MdPhone />
      </a>
    </div>
  );
}

export default App;
