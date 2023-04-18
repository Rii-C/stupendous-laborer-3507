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
                <Link to="/products/wheyproteins">HealthKart HK Vitals</Link>
                <Link to="/products/wheyproteins">GNC</Link>
                <Link to="/products/wheyproteins">TrueBasics</Link>
                <Link to="/products/wheyproteins">Wow life Science</Link>
                <Link to="/products/wheyproteins">NOW</Link>
                <Link to="/products/wheyproteins">Healthvit</Link>
                <Link to="/products/wheyproteins">INLIFE</Link>
                <Link to="/products/wheyproteins">Natures Velvet</Link>
                <Link to="/products/wheyproteins">Swisse</Link>
                <Link to="/products/wheyproteins">NatureFirst</Link>
                <Link to="/products/wheyproteins">Boldfit</Link>
                <Link to="/products/wheyproteins">Plix Olena</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Health Food and Drinks</p>
                <Link to="/products/wheyproteins">Myfitness</Link>
                <Link to="/products/wheyproteins">healthKart HK Vitals</Link>
                <Link to="/products/wheyproteins">Bagrrys</Link>
                <Link to="/products/wheyproteins">True Elements</Link>
                <Link to="/products/wheyproteins">Yoga Bar</Link>
                <Link to="/products/wheyproteins">Gritzo</Link>
                <Link to="/products/wheyproteins">Alpino</Link>
                <Link to="/products/wheyproteins">RiteBite</Link>
                <Link to="/products/wheyproteins">Amway</Link>
                <Link to="/products/wheyproteins">The Whole Truth</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Fitness</p>
                <Link to="/products/wheyproteins">Strauss</Link>
                <Link to="/products/wheyproteins">Zebronics</Link>
                <Link to="/products/wheyproteins">Noise</Link>
                <Link to="/products/wheyproteins">beatXP</Link>
                <Link to="/products/wheyproteins">John Ally</Link>
                <Link to="/products/wheyproteins">Gionee</Link>
                <Link to="/products/wheyproteins">MuscleXP</Link>
                <Link to="/products/wheyproteins">B Fit USA</Link>
                <Link to="/products/wheyproteins">Omtex</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Wellness</p>
                <Link to="/products/wheyproteins">Ustraa</Link>
                <Link to="/products/wheyproteins">NutraFirst</Link>
                <Link to="/products/wheyproteins">Bold Care</Link>
                <Link to="/products/wheyproteins">Amway</Link>
                <Link to="/products/wheyproteins">Himalayan Organic</Link>
                <Link to="/products/wheyproteins">Kozicare</Link>
                <Link to="/products/wheyproteins">Organic Harvest</Link>
                <Link to="/products/wheyproteins">Man Arden</Link>
                <Link to="/products/wheyproteins">Man Arden</Link>
                <Link to="/products/wheyproteins">Hi9</Link>
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
                <Link to="/products/wheyproteins">Pure Nutrition</Link>
                <Link to="/products/wheyproteins">ANS Performance</Link>
                <Link to="/products/wheyproteins">INLIFE</Link>
                <Link to="/products/wheyproteins">Unifibe</Link>
                <br />
                <p className={styles.dropHeadings}>Herbs for hair Care</p>
                <Link to="/products/wheyproteins">How Sau Palmetto</Link>
                <Link to="/products/wheyproteins">Himalayan Organics</Link>
                <Link to="/products/wheyproteins">NatureLife</Link>
                <Link to="/products/wheyproteins">Himalayan Nutrition</Link>
                <Link to="/products/wheyproteins">Mahaved Aleovera</Link>
            <br />
                <p className={styles.dropHeadings}>AntiOxidants</p>
                <Link to="/products/wheyproteins">Upakarma Ayurveda</Link>
                <Link to="/products/wheyproteins">Morphema Remedies</Link>
                
              </div>
              <div>
                <p className={styles.dropHeadings}>Personal Care</p>
                <Link to="/products/wheyproteins">MuscleBlaze Ayurveda</Link>
                <Link to="/products/wheyproteins">HK Vitals Ashwagandha</Link>
                <Link to="/products/wheyproteins">Kapive Himalayan</Link>
                <Link to="/products/wheyproteins">Rasayanam</Link>
                <Link to="/products/wheyproteins">Neuherbs</Link>
                <Link to="/products/wheyproteins">Vubasil</Link>
                <Link to="/products/wheyproteins">ForMen</Link>
    <br />
                <p className={styles.dropHeadings}>Personal Care & Grooming</p>
                <Link to="/products/wheyproteins">Humming Herbs </Link>
                <p className={styles.dropHeadings}>Diabetic</p>
                <Link to="/products/wheyproteins">Vogue Wellness</Link>
                <p className={styles.dropHeadings}>Arjuna</p>
                <Link to="/products/wheyproteins">Biotrex</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Gym Accessories</p>
                <Link to="/products/wheyproteins">B fit USA</Link>
                <Link to="/products/wheyproteins">Muscle XP</Link>
                <Link to="/products/wheyproteins">Strauss Anti Slip</Link>
                <Link to="/products/wheyproteins">Strauss Yoga Block</Link>
                <Link to="/products/wheyproteins">Boldfit Abs</Link>
                <Link to="/products/wheyproteins">Love4ride</Link>
                <Link to="/products/wheyproteins">Biofit Ankle</Link>
                <Link to="/products/wheyproteins">Lycan </Link>
                <br />
                <p className={styles.dropHeadings}>Gym Essentials</p>
                <Link to="/products/wheyproteins">BOldfit Resistance</Link>
                <Link to="/products/wheyproteins">Fitness Gadgets</Link>
                <Link to="/products/wheyproteins">beatXP</Link>
                <Link to="/products/wheyproteins">Pro Grip</Link>
                <Link to="/products/wheyproteins">Boldfit Abs</Link>
                <Link to="/products/wheyproteins">Love4ride</Link>
                <Link to="/products/wheyproteins">Biofit Ankle</Link>
                <Link to="/products/wheyproteins">Lycan </Link>
                <Link to="/products/wheyproteins">Vogue Wellness</Link>
                <Link to="/products/wheyproteins">Biotrex</Link>
                
              </div>
              <div>
                <p className={styles.dropHeadings}>Multivitamin</p>
                <Link to="/products/wheyproteins">TrueBasics</Link>
                <Link to="/products/wheyproteins">GNC Mega</Link>
                <Link to="/products/wheyproteins">Nature Valt</Link>
                <Link to="/products/wheyproteins">NOW</Link>
                <Link to="/products/wheyproteins">Gritoz</Link>
                <Link to="/products/wheyproteins">Giones</Link>
                <Link to="/products/wheyproteins">Kozicare</Link>
                <Link to="/products/wheyproteins">Zabronics </Link>
                <Link to="/products/wheyproteins">Swisse</Link>
                <Link to="/products/wheyproteins">NatureFirst</Link>
                <Link to="/products/wheyproteins">Labadra</Link>
                <Link to="/products/wheyproteins">Plix</Link>
             <br />
        
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