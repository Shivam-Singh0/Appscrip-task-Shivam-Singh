// Dropdown.js
"use client";
import { useState } from "react";
import styles from "./group.module.css";
import Modal from "./Modal";
import arrowLeft from "./arrow-left.png"
import Image from "next/image";

const Dropdown = ({}) => {
  const [selected, setSelected] = useState( { title: "RECOMMENDED", order: "recommended" });
  const DropDownItems = [
    { title: "RECOMMENDED", order: "recommended" },
    { title: "NEWEST FIRST", order: "newestfirst" },
    { title: "POPULAR", order: "popular" },
    { title: "PRICE: HIGH TO LOW", order: "pricehightolow" },
    { title: "PRICE: LOW TO HIGH", order: "pricelowtohigh" },
  ];
  
  const [show, setShow] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

  const handleButtonClick = (e) => {
    setShow(!show);
    const rect = e.target.getBoundingClientRect();
    setButtonPosition({
      top: rect.bottom + window.scrollY, // Include vertical scroll offset
      left: rect.left + window.scrollX, // Include horizontal scroll offset
    });
  };

  return (
    <div style={{ position: "relative" }} className={styles.dropdown}>
      <button onClick={handleButtonClick}><span>{selected.title}</span> <Image style={{transform: "rotate(-90deg)"}} src={arrowLeft} alt="arrow left" height={16} width={16} /></button>
      {show && (
        <Modal
          DropDownItems={DropDownItems}
          top={buttonPosition.top}
          left={buttonPosition.left}
          setShow={setShow}
          setSelected={setSelected}
          selected={selected}
        />
      )}
    </div>
  );
};

export default Dropdown;