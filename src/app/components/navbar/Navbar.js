import Image from "next/image"
import style from "./navbar.module.css"
import Logo from './images/Logo.png';
import Search from './images/search-normal.png';
import Heart from './images/heart.png';
import Bag from './images/shopping-bag.png';
import profile from './images/profile.png';
import Link from "next/link";
import {Inter} from 'next/font/google'
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./dropdown/Dropdown";
import pattern from './images/pattern.png';

const inter = Inter({ subsets: ['latin'], weight: ['800'] });


const Navbar = () => {
  const NavBtns = [{icon: Search, alt: "search"}, {icon: Heart, alt: "heart"}, {icon: Bag, alt: "bag"}, {icon: profile, alt: "profile"}];
  const NavLinks = ["SHOP", "SKILLS","STORIES" ,"ABOUT", "CONTACT"];
  
  return (
   <nav style={{borderBottom: "1px solid #E5E5E5"}}>
    <div className={style.topStrip}>
    <span  ><Image height={16} width={16} src={pattern} className={style.pattern} alt="pattern" /> Lorem ipsum dolor</span>
    <span  ><Image height={16} width={16} src={pattern} className={style.pattern} alt="pattern" /> Lorem ipsum dolor</span>
    <span  ><Image height={16} width={16} src={pattern} className={style.pattern} alt="pattern" /> Lorem ipsum dolor</span>
       
       
      </div>
     <div className={style.nav} >
      <div>
      <Dropdown />
      <Image className={style.logoimage} src={Logo} alt="Logo" height={36} width={36}  />
      </div>
        <h1 className={`${inter.className} ${style.logo}`}>LOGO</h1>
       <div className={style.navbtns}>
        {NavBtns.map((item, index) => (
          <button key={index} className={style[item.alt]}>
            <Image className={style.icon} src={item.icon} alt={item.alt} height={24} width={24}  />
            </button>
        ))}
         <button className={style.lang}>
      <p>ENG</p> <IoIosArrowDown />
    </button>
       </div>

    </div>
    <div className={style.nav2} style={{marginTop: "1.5rem", marginBottom: "1rem"}}>
       <div className={style.navbtns} style={{gap: "4rem"}}>
       {NavLinks.map((item, index) => (
         <Link className={style.nav_link} href="#" key={index} >{item}</Link>
       ))}
       </div>
    </div>
   </nav>
  )
}

export default Navbar