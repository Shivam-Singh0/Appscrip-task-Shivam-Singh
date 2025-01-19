"use client";

import { useState } from "react";
import arrowDown from "../images/arrow-down.png";
import styles from "./collapse.module.css";
import Image from "next/image";

const Collapse = ({id,heading, img, alt, text1, text2, }) => {
    const [expanded, setExpanded] = useState(false);
  return (
    <section id={id} className={styles.collapse}>
    <div style={{display: "flex", justifyContent: "space-between", cursor: "pointer"}} onClick={() => setExpanded(!expanded)}>
    <h3  >{heading}</h3>
    {!expanded && <Image src={arrowDown} alt="arrow" height={16} width={16} /> }
    </div>
   {expanded && <div className={styles.collapseDetails}>
    {img ? <Image src={img} alt={alt} height={20} width={20} /> : <p>{text1}</p> }
    <p>&#9670;</p>
    <p>{text2}</p>
    
    </div>}
</section>
  )
}

export default Collapse