import styles from "./banner.module.css"

const Banner = () => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div className={styles.banner}>
        <h1 className={styles.bannerHeading}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.bannerParagraph}>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
    </div>
    </div>
  )
}

export default Banner