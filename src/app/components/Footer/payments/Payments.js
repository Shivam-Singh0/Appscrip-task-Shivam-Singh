import gpay from "../images/gpay.png";
import mastercard from "../images/mastercard.png";
import pp from "../images/pp.png";
import amex from "../images/amex.png";
import apple from "../images/apple.png";
import opay from "../images/opay.png";
import Image from 'next/image';
import styles from "./payments.module.css"
const Payments = () => {
        const pays = [{img: gpay, alt: "gpay"}, {img: mastercard, alt: "mastercard"}, {img: pp, alt: "pp"}, {img: amex, alt: "amex"}, {img: apple, alt: "apple"}, {img: opay, alt: "opay"}]
    
  return (
    <div className={styles.container}>
        <h3>mettā muse ACCEPTS</h3>
        <div className={styles.payments} >
            {pays.map((item, idx) => (
                <Image key={idx} src={item.img} alt={item.alt} height={35} width={56} />
            ))}
        </div>
    </div>
  )
}

export default Payments