import styles from "./Footer.module.css"; // Import the CSS module
import ContactSection from "./ContactSection";
import MetaMuseFollowQuick from "./MetaMuseFollowQuick";
import Collapse from "./collapse/Collapse";
import Payments from "./payments/Payments";

export default function Footer() {
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <section className={styles.subscribe}>
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p className={styles.para}>Sign up for updates from mettā muse.</p>
                    <p className={styles.paramobile}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
                    <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
                        <input type="email" placeholder="Enter your email...." className={styles.input} />
                        <button className={styles.btn}>Subscribe</button>
                    </div>
                </section>
                <ContactSection />
                <Collapse id="contact" heading="CONTACT US"  alt="contact" text1="+44 221 133 5360" text2="customercare@mettamuse.com" />
                <Collapse id="currency" heading="CURRENCY"  alt="currency" img={"https://hatscripts.github.io/circle-flags/flags/us.svg"} text2="USD" />
                <Collapse id="mettāmuse" heading="mettā muse"  alt="mettā muse"  />
                <Collapse id="quicklinks" heading="QUICK LINKS"  alt="quicklinks"  />
                <Collapse id="socials" heading="FOLLOW US"  alt="socials"  />
            </div>
            <MetaMuseFollowQuick />
            <div className={styles.paymentsconatiner}>
            <Payments />
            </div>
            <section className={styles.copyright}>Copyright © 2023 mettamuse. All rights reserved.</section>
        </div>
    );
}
