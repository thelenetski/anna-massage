import "./App.css";
import { MdPhone } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { PiMoneyWavy } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Price from "./components/Price/Price";
import Logo from "./components/Logo/Logo";
import Main from "./components/Main/Main";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const modalRef = useRef(null);
  const priceRef = useRef(null);

  const modalHandler = () => {
    setModalActive(!modalActive);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !priceRef.current.contains(event.target)
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

  return (
    <div className="wrapper">
      <Logo />
      <Main />
      <div className="actions">
        <button ref={priceRef} onClick={modalHandler} className="price">
          <PiMoneyWavy size={30} />
        </button>
        <a href="tel:+380732052747" className="call">
          <MdPhone size={30} />
        </a>
      </div>
      <div
        ref={modalRef}
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
