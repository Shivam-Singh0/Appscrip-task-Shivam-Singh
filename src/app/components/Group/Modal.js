import ReactDOM from "react-dom";
import styles from "./group.module.css";
import { FaCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const Modal = ({ DropDownItems, top, left, setShow, setSelected,selected }) => {
  const router = useRouter();
  const selectHandler = (item) => {
    setSelected(item)
    router.push(`?sort=${item.order}`);
  }
  return ReactDOM.createPortal(
    <div
      className={styles.modalContainer}
      style={{
        top: `${top}px`,
        left: `${left}px`,
      }}
      onClick={() => setShow(false)}
    >
      {DropDownItems.map((item, index) => (
       selected.title === item.title ? (
        <div className={styles.dropdownItem} key={index}>
          <p style={{fontWeight: "700"}}> <FaCheck /> {item.title}</p>
         
        </div>
      ) : (
        <p key={index} className={styles.dropdownItem} onClick={() => selectHandler(item)}>
        {item.title}
      </p>
      )
      ))}
    </div>,
    document.body // Render at the document root to avoid clipping
  );
};

export default Modal;