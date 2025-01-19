import ReactDOM from "react-dom";
import styles from "./dropdown.module.css";
import profile from "../images/profile.png";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Modal = ({ top, left, setShow }) => {
    const NavLinks = ["SHOP", "SKILLS","STORIES" ,"ABOUT", "CONTACT"];
  const closeModal = (e) => {
    e.stopPropagation();
    setShow(false);
  };

  const buttonClickHandler = (e) => {
    e.stopPropagation(); // Prevents triggering the parent's onClick
    console.log("Button clicked!"); // Optional: Debugging purpose
  };

  return ReactDOM.createPortal(
    <div
      className={styles.modalContainer}
      style={{
        top: `${top}px`,
        left: `${left}px`,
      }}
      onClick={closeModal} // Handles click outside buttons
    >
      <button
        className={styles.icon_btn}
        onClick={buttonClickHandler} // Button-specific click handler
      >
        <Image src={profile} alt="Profile" height={24} width={24} />
      </button>
      <button
        className={styles.icon_btn}
        onClick={buttonClickHandler} // Button-specific click handler
      >
        <p>ENG</p> <IoIosArrowDown />
      </button>
      {NavLinks.map((item, index) => (
         <Link className={styles.nav_link} href="#" key={index} >{item}</Link>
       ))}
    </div>,
    document.body // Render at the document root to avoid clipping
  );
};

export default Modal;
