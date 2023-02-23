import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styles from '../../Styles/Products/Desclaimer.module.css'


export const Desclaimer = () => {

const [showDes,setShowDes]= React.useState(true)

  return (
    <div className={styles.container}>
        <div onClick={()=>setShowDes(!showDes)} className={styles.head}>
            <FontAwesomeIcon className={styles.up} icon={faChevronUp}/>
<span>Desclaimer</span>
        </div>
{
  showDes && 
        <div>
       <span className={styles.b}>Disclaimer:</span> Information and statements regarding the product/services have not been evaluated by the Food and Drug Administration or any government authority and not intended to diagnose, treat, cure, or prevent any disease. Product/Services reviews are provided by users based on their personal experiences & opinions, and do not reflect the opinion of HealthKart. Product/Services information provided by the seller on HealthKart is not exhaustive, please read the label on the product carefully for complete information provided by the manufacturer. The results from the products will vary from person to person. No individual result should be seen as typical.
        </div>
}
    </div>
  )
}



