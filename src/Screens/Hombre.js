import React from "react";
import styles from "./Hombre.module.css";


const hombre = () => {

  return (
    <div name="Hombre" className={styles.hombre}>
      <h2 className={styles.title}>Hombre</h2>
      <div className={styles.imageBox}>
        <div>
          <p>T-shirt iconic orange</p>
        <img
           className={styles.imageboxing}
           src={require("../assets/ImagesWoman/remerah3.png")}
       ></img>
       </div>
       <div>
        <p>Cap turquoise</p>
       <img
           className={styles.imageboxing}
           src={require("../assets/ImagesWoman/gorrah1.png")}
       ></img>
        </div>

      </div>
    
    </div>

  );
};

export default hombre;