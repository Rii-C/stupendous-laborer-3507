import React, { Fragment, useState } from 'react'
import styles from "./Dropdown.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Flex, Image } from '@chakra-ui/react';



const Dropdown = () => {


  const [hover1, setHover1] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

  window.onscroll = ()=>{

           if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            let drop =       document.getElementById("drop")
  
              drop.style.display = "none"
            }
            else {
              let drop =       document.getElementById("drop")
  
              drop.style.display = "block"
              }
        }


  return (
    <div className={styles.navMainDiv} id='drop' >
  <div className={styles.navSubDiv2}>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover1 && styles.tabStyles}`}>
            Shop by Category
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>Sports Nutrition</p>
                <Link to="/products/wheyproteins">Whey Proteins</Link>
                <Link to="/products/wheyproteins">MB Fuel One</Link>
                <Link to="/products/wheyproteins">bGREEN</Link>
                <Link to="/products/wheyproteins">Optimum Nutrition</Link>
                <Link to="/products/wheyproteins">Ultimate Nutrition</Link>
                <Link to="/products/wheyproteins">MuscleTech</Link>
                <Link to="/products/wheyproteins">MyProtein</Link>
                <Link to="/products/wheyproteins">Isopure</Link>
                <Link to="/products/wheyproteins">Dymatize</Link>
                <Link to="/products/wheyproteins">GNC</Link>
                <Link to="/products/wheyproteins">Labrada</Link>
                <Link to="/products/wheyproteins">MusclePharm</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Vitamins & Supplements</p>
                <a href="/">HealthKart HK Vitals </a>
                <a href="/">GNC</a>
                <a href="/">TrueBasics</a>
                <a href="/">Wow life Science</a>
                <a href="/">NOW</a>
                <a href="/">Healthvit</a>
                <a href="/">INLIFE</a>
                <a href="/">Natures Velvet</a>
                <a href="/">Swisse</a>
                <a href="/">NaturaFirst</a>
                <a href="/">Boldfit</a>
                <a href="/">Plix Olena</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Health Food and Drinks</p>
                <a href="/">Myfitness</a>
                <a href="/">healthkart HK Vitals</a>
                <a href="/">Bagrrys</a>
                <a href="/">True Elements</a>
                <a href="/">Yoga Bar</a>
                <a href="/">Gritzo</a>
                <a href="/">Alpino</a>
                <a href="/">RiteBite</a>
                <a href="/">Amway</a>
                <a href="/">The Whole Truth</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Fitness</p>
                <a href="/">Strauss </a>
                <a href="/">Boldfit</a>
                <a href="/">Zebronics</a>
                <a href="/">Noise</a>
                <a href="/">beatXP</a>
                <a href="/">John Ally</a>
                <a href="/">Gionee</a>
                <a href="/">MuscleXP</a>
                <a href="/">B Fit USA</a>
                <a href="/">Omtex</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Wellness</p>
                <a href="/">Ustraa</a>
                <a href="/">NutraFirst</a>
                <a href="/">Bold Care</a>
                <a href="/">Amway</a>
                <a href="/">Himalayan Organic</a>
                <a href="/">Kozicare</a>
                <a href="/">Organic Harvest</a>
                <a href="/">Man Arden</a>
                <a href="/">INLIFE</a>
                <a href="/">Hi9</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p 
          className={`${styles.dropbtn} ${ styles.tabStyles}`}
          >
            Best Sellers
          </p>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover3 && styles.tabStyles}`}>
            Brands
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>Herbs For Weight Loss</p>
                <Link to="/products/wheyproteins">Green Coffee Bean Extracts</Link>
                <Link to="/products/wheyproteins">Garcinia Cambogia</Link>
                <Link to="/products/wheyproteins">Guggul</Link>
                <Link to="/products/wheyproteins">Milk Thistle</Link>
                <Link to="/products/wheyproteins">Amway</Link>
                <Link to="/products/wheyproteins">Himalayan Organic</Link>
                <Link to="/products/wheyproteins">Amla</Link>
                <Link to="/products/wheyproteins">Organic Harvest </Link>
                <Link to="/products/wheyproteins">Man Arden</Link><br />
                <p className={styles.dropHeadings}>Vital Herbs</p>
                <Link to="/products/wheyproteins">Lutein</Link>
                <Link to="/products/wheyproteins">Women health</Link>
                <Link to="/products/wheyproteins">Boldfit</Link>
                <Link to="/products/wheyproteins">Noise</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Herbal Oils</p>
                <a href="/">Pure Nutrition</a>
                <a href="/">ANS Performance</a>
                <a href="/">INLIFE</a>
                <a href="/">Unifibe </a><br />
                <p className={styles.dropHeadings}>Herbs for hair Care</p>
                <a href="/">Now Saw Palmetto</a>
                <a href="/">Himalayan Organics</a>
                <a href="/">NatureLife</a>
                <a href="/">Himalyan Nutrition</a>
                <a href="/">Mahaved Aleovera </a><br />
                <p className={styles.dropHeadings}>AntiOxidants</p>
                <a href="/">Upakarma Ayurveda</a>
                <a href="/">Morpheme Remedies</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Personal Care</p>
                <a href="/">MuscleBlaze Ayurveda </a>
                <a href="/">HK Vitals Ashwagandha</a>
                <a href="/">Kapiva Himalayan</a>
                <a href="/">Rasayanam</a>
                <a href="/">Neuherbs</a>
                <a href="/">Vubasil</a>
                <a href="/">ForMen</a><br />
                <p className={styles.dropHeadings}>Personal Care & Grooming</p>
                <a href="/">Humming Herbs </a>
                <p className={styles.dropHeadings}>Diabetic</p>
                <a href="/">Vogue Wellness</a>
                <p className={styles.dropHeadings}>Arjuna</p>
                <a href="/">Biotrex</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Gym Accessories</p>
                <a href="/">B fit USA</a>
                <a href="/">MuscleXP</a>
                <a href="/">Strauss Anti Slip</a>
                <a href="/">Strauss Yoga Block</a>
                <a href="/">Boldfit Abs</a>
                <a href="/">Love4ride</a>
                <a href="/">Biofit Ankle</a>
                <a href="/">Lycan</a><br />
                <p className={styles.dropHeadings}>Gym Essentials</p>
                <a href="/">Boldfit Resistance</a>
                <a href="/">Fitness Gadgets</a>
                <a href="/">beatXP</a>
                <a href="/">Pro Grip</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Multivitamin</p>
                <a href="/">TrueBasics</a>
                <a href="/">GNC Mega</a>
                <a href="/">Nature Valt</a>
                <a href="/">NOW</a>
                <a href="/">Gritoz</a>
                <a href="/">Giones</a>
                <a href="/">Kozicare</a>
                <a href="/">Zabronics</a>
                <a href="/">Swisse</a>
                <a href="/">NaturFirst</a>
                <a href="/">Labadra</a>
                <a href="/">Plix</a><br />
                <p className={styles.dropHeadings}>Fitness Tracker</p><br />
                <p className={styles.dropHeadings}>Fitness Ckothing</p><br />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover4 && styles.tabStyles}`}>
            Deals
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover4(true)}
            onMouseLeave={() => setHover4(false)}
          >
            <div className={styles.dropdownFlex}>
              <Flex justifyContent={"center"} gap="10px">
                <Image w={"10%"} src="https://img5.hkrtcdn.com/20091/smn_image_2009054_o.png" alt="offer"/>
                <Image w={"10%"} src="https://img7.hkrtcdn.com/20091/smn_image_2009056_o.png" alt="offer"/>
                <Image w={"10%"} src="https://img3.hkrtcdn.com/20091/smn_image_2009062_o.png" alt="offer"/>
                <Image w={"10%"} src="https://img9.hkrtcdn.com/20091/smn_image_2009058_o.png" alt="offer"/>
                <Image w={"10%"} src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/crazy.svg" alt="offer"/>
                <Image w={"10%"} src="https://img5.hkrtcdn.com/20091/smn_image_2009054_o.png" alt="offer"/>
              </Flex>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p >
            Blogs
          </p>
        </div>
        <div className={styles.dropdown}>
          <Link
            style={{
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
            }}
            to="/Men"
          >
            Gift Cards
          </Link>
        </div>
      </div>
    
    </div>
  );
};

export { Dropdown };