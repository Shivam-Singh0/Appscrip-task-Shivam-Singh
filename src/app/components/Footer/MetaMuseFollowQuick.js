import React from 'react'
import styles from "./Footer.module.css"; // Import the CSS module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Payments from './payments/Payments';



const MetaMuseFollowQuick = () => {
    const metamuse = ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"]
    const quicklinks = ["Orders & Shipping",
       "Join/Login as a Seller",
       "Payment & Pricing",
       "Return & Refunds",
       "FAQs",
        "Privacy Policy",
        "Terms & Conditions"]
  return (
    <div className={styles.grid_container}>
                <section className={styles.mettāmuse}>
                    <ul className={styles.list}>
                        <li><h3>mettā muse</h3></li>
                        {metamuse.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
                <section className={styles.quicklinks}>
                    <ul className={styles.list}>
                        <li><h3>QUICK LINKS</h3></li>
                        {quicklinks.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
                <section className={styles.socials}>
                    <ul className={styles.list}>
                        <li><h3>FOLLOW US</h3></li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} style={{ width: "36px", height: "36px" }} />
                            <FontAwesomeIcon icon={faLinkedin} style={{ width: "36px", height: "36px" }} />
                        </li>
                        <li><Payments /></li>
                    </ul>
                </section>
            </div>
  )
}

export default MetaMuseFollowQuick