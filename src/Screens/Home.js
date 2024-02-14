import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
          Bienvenidos a <br />
          <b>ffv.com house</b>
        </p>
        <p>
          Iconic style <br />
          <b>by Francisco</b>
        </p>

      </div>
   
    </div>
  );
};

export default Home;