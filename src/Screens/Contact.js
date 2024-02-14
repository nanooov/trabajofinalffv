import React from "react";
import styles from "./Contact.module.css";
import { FaHandPointRight, FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <h2>Contacto</h2>
      <div>
        <p><FaHandPointRight /> Si solicitas un producto completa el mensaje con la siguiente información</p>
        <li>Nombre y talle de producto</li>
        <li>Dirección de envío</li>
        <li>DNI</li>
        <p>Recibirás un correo con los métodos de pago</p>
        <p><FaHandPointRight /> Si solicitas cambio de un producto completa el mesaje con la siguiete información</p>
        <li>Número de pedido (incluido en mail de recepción de pago)</li>
        <li>Fecha de compra</li>
        <li>DNI</li>
        <p><FaHandPointRight /> Para consultas, completa todos los datos del formulario</p>

      </div>
      <form
        className={styles.form}
        method="POST"
        action="https://getform.io/f/fd9ae733-cdfd-4676-ac5a-010f15de9272"
         // YOP MAIL ffv.curse@yopmail.com - para verificar que se envian los datos mediante form //
        >
        <label for="Name">Nombre</label>
        <input id="Name" name="Name" className={styles.input}></input>
        <label for="Email">Email</label>
        <input id="Email" name="Email" type="Email" className={styles.input}
        ></input>
        <label for="Message">Mensaje</label>
        <textarea id="Message" name="Mensaje" className={styles.textArea}></textarea>
        <button type="submit">Enviar</button>
      </form>

      <div>
        <h2>¿Queres recibir novedades?</h2>

        <form action="villalbd.php" method="POST" id="formffv">
          <label for="mail">Dejanos tus email:</label>
          <input id="mail" name="mail" type="mail" required className={styles.input}>
          </input>

          <label for="client_sex">Sexo(m/n)</label>
          <input id="client_sex" name="client_sex" required className={styles.input}>
          </input>

          <button type="submit" name="registro">Enviar</button>
        </form>
      </div>



      <div name="redes" className={styles.redesociales}>
        <h1>Tambén podes encontranos en nuestras redes sociales</h1>
        <div className={styles.socialicons}>

          <a href="http://www.facebook.com" target="blank" ><FaFacebookSquare color="black" /></a>
          <a href="http://www.instagram.com" target="_blank"><FaInstagramSquare color="black" /></a>
          <a href="http://www.twitter.com" target="_blank"><FaSquareXTwitter color="black" /></a>
          <a href="http://www.youtube.com" target="_blank"><FaYoutube color="black" /></a>

        </div>
      </div>
    </div>

  );
};

export default Contact;