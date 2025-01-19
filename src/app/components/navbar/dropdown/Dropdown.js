// Dropdown.js
"use client";
import { useState } from "react";
import styles from "./dropdown.module.css";
import Modal from "./Modal";
import { CiMenuBurger } from "react-icons/ci";
const Dropdown = () => {
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
      <button onClick={handleButtonClick}><CiMenuBurger size={22} /></button>
      {show && (
        <Modal
          top={buttonPosition.top}
          left={buttonPosition.left}
        />
      )}
    </div>
  );
};

export default Dropdown;