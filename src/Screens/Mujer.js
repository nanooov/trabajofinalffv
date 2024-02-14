import React from "react";
import styles from "./Mujer.module.css";



const Mujer = () => {

  return (
    <div name="Mujer" className={styles.Mujer}>
      <h2 className={styles.title}>Mujer</h2>
      <div className={styles.imageBox}>
        <div>
          <p>T-shirt iconic dark grey</p>
        <img
           className={styles.imageboxing}
           src={require("../assets/ImagesWoman/remerah1.png")}
       ></img>
       </div>
       <div>
        <p>Short LB</p>
       <img
           className={styles.imageboxingp}
           src={require("../assets/ImagesWoman/pant1.png")}
       ></img>
        </div>


    </div>
    
    </div >

  );
};

export default Mujer;
