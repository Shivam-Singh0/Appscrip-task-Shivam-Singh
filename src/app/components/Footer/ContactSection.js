import React from 'react'
import styles from "./Footer.module.css"; // Import the CSS module

const ContactSection = () => {
  return (
    <section className={styles.contact}>
                    <ul className={styles.list} style={{ listStyle: "none" }}>
                        <li><h3>CONTACT US</h3></li>
                        <li>+44 221 133 5360</li>
                        <li>customercare@mettamuse.com</li>
                        <li><h3>CURRENCY</h3></li>
                        <li className={styles.flag}>
                            <img src="https://hatscripts.github.io/circle-flags/flags/us.svg" alt="usd" />
                            <span className={styles.diamond}></span>
                            <span>USD</span>
                        </li>
                        <li>Transactions will be completed in Euros and a currency reference is available on hover.</li>
                    </ul>
    </section>
  )
}

export default ContactSection