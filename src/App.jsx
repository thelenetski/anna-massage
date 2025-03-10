import "./App.css";
import { MdPhone } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { PiMoneyWavy } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Price from "./components/Price/Price";
import Logo from "./components/Logo/Logo";
import Main from "./components/Main/Main";
import { GiThreeLeaves } from "react-icons/gi";
import { PiFlowerLotusThin } from "react-icons/pi";

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
      <h4>
        Масаж - найкращий прояв любові до себе
        <div className="hr">
          <div className="hrLeft"></div>
          <GiThreeLeaves size={20} />
          <div className="hrRight"></div>
        </div>
      </h4>
      <Main />
      <div className="actions">
        <a ref={priceRef} onClick={modalHandler} className="price">
          <PiMoneyWavy size={20} />
          Прайс
        </a>
        <a href="tel:+380732052747" className="call">
          <MdPhone size={20} />
          Подзвонити
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
        <PiFlowerLotusThin className="flower" />
      </div>
      <div className="modalStock"></div>
    </div>
  );
}

export default App;
