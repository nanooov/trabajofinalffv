import React from "react";
import styles from "./Locales.module.css";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";



const Locales = () => {
  return (
    <div name="Locales" className={styles.Locales}>

      <h2 className={styles.LocalesTitle}>
        Encontranos en las siguientes ubicaciones
      </h2>
      <div className={styles.gralLocales}>
        <div className={styles.boxLocales}>
          <p>
            NSO Abasto
          </p>
          <p>
          <FaMapMarkerAlt /> Avenida Corrientes 3247, CABA
          </p>
          <p>
          <IoTime /> Lunes a domingos de 10 a 21hs
          </p>
        </div>
        <div className={styles.boxLocales}>
          <p>
            NSO Alto Palermo
          </p>
          <p>
          <FaMapMarkerAlt /> Arenales 3360, CABA
          </p>
          <p>
          <IoTime /> Lunes a domingos de 10 a 21hs
          </p>
        </div><div className={styles.boxLocales}>
          <p>
          Factory Arcos
          </p>
          <p>
          <FaMapMarkerAlt /> Paraguay 4979,CABA
          </p>
          <p>
          <IoTime /> Lunes a domingos de 10 a 21hs
          </p>
        </div><div className={styles.boxLocales}>
          <p>
          Factory Chacarita
          </p>
          <p>
          <FaMapMarkerAlt /> Salguero 3172, CABA
          </p>
          <p>
          <IoTime /> Lunes a domingos de 10 a 21hs
         </p>
        </div><div className={styles.boxLocales}>
          <p>
          Nike Avenida Santa Fe
          </p>
          <p>
          <FaMapMarkerAlt />  Avenida Corrientes 3247, CABA
          </p>
          <p>
          <IoTime /> Lunes a domingos de 10 a 21hs
          </p>
        </div><div className={styles.boxLocales}>
          <p>
          Factory Rivadavia
          </p>
          <p>
          <FaMapMarkerAlt /> Avenida Rivadavia 8961, CABA
          </p>
          <p>
          <IoTime /> Lunes a domingos de 10 a 21hs
          </p>
        </div>
       
      </div>

    </div>
  );
};

export default Locales;
