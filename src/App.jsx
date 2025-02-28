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
      <h1 className="title">Найкращий массаж у всесвіті</h1>
      <div className="main">
        <a href="#" className="linkWrap">
          <FaTelegram />
          <span>Telegram</span>
        </a>
        <a href="#" className="linkWrap">
          <FaInstagram />
          <span>Instagram</span>
        </a>
        <a href="#" className="linkWrap">
          <FaViber />
          <span>Viber</span>
        </a>
        {/* <a href="#" className="linkWrap">
          <MdPhone />
          <span>Зателефонувати</span>
        </a> */}
        <a href="#" className="linkWrap">
          <PiMapPinAreaFill />
          <span>Локація</span>
        </a>
      </div>
      <a href="#" className="call">
        <MdPhone />
      </a>
    </div>
  );
}

export default App;
