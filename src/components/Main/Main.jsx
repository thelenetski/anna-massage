import css from "./Main.module.css";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { PiMapPinAreaFill } from "react-icons/pi";

function Main() {
  return (
    <div className={css.main}>
      <h4 className={css.socialTitle}>Соціальні мережі</h4>
      <a
        href="https://www.instagram.com/massage_anna.kh"
        className={css.linkWrap}
        target="_blank"
      >
        <FaInstagram />
        <span>Instagram</span>
      </a>
      <a
        href="https://t.me/anna_yuriewna"
        className={css.linkWrap}
        target="_blank"
      >
        <FaTelegram />
        <span>Telegram</span>
      </a>
      <a
        href="viber://chat?number=+380732052747"
        className={css.linkWrap}
        target="_blank"
      >
        <FaViber />
        <span>Viber</span>
      </a>
      <a
        href="https://maps.app.goo.gl/udSc34exGSaXLemo8?g_st=com.google.maps.preview.copy"
        className={css.linkWrap}
        target="_blank"
      >
        <PiMapPinAreaFill />
        <span>Локація</span>
      </a>
    </div>
  );
}

export default Main;
