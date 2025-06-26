import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import logoVLU from "../../img/LOGO-VLU.png";
import agrotur from "../../img/agrotur.png";
import sanford from "../../img/sanford.png";
import add from "../../img/add.png";
import vitaplast from "../../img/vitaplast.png";
import Card from "./Card";
import Text from "./Text";

//create your first component
const Home = () => {
  return (
    <div>
      <ul className="nav justify-content-center mt-3">
        <li className="nav-item mt-4">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item mt-4">
          <a className="nav-link" href="#">
            Service
          </a>
        </li>
        <li className="nav-item px-3">
          <a className="navbar-brand" href="#">
            <img src={logoVLU} alt="Bootstrap" width="75" height="75" />
          </a>
        </li>
        <li className="nav-item mt-4">
          <a className="nav-link" href="#">
            About us
          </a>
        </li>
        <li className="nav-item mt-4">
          <a className="nav-link disabled" aria-disabled="true">
            Works
          </a>
        </li>
      </ul>
      <Text />
      <div className="d-flex d-grid gap-0 column-gap-3 justify-content-center mt-5 mb-5">
        <Card
          titulo="Distribuidor Agrotur C.A."
          line1="Diseño responsive"
          line2="Catalogo de productos"
          line3="Alcance nacional"
          boton1="Web"
          link1="https://distribuidoragrotur.com/"
          boton2="Instagram"
          link2="https://www.instagram.com/agroturca/"
          foto={agrotur}
        />
        <Card
          titulo="Sanford Brands Venezuela LLC"
          line1="Articulos todas las semanas"
          line2="Distribuidores por estado"
          line3="Alcance internacional"
          boton1="Web"
          link1="https://sanfordbrandsvzla.com/"
          boton2="Instagram"
          link2="https://www.instagram.com/mongol_vzla/"
          foto={sanford}
        />
        <Card
          titulo="Alimentos Doña Digna C.A."
          line1="Catalogo de productos"
          line2="Mas de 18 años de trayectoria"
          line3="Postulaciones directas"
          boton1="Web"
          link1="https://productosadd.com/"
          boton2="Instagram"
          link2="https://www.instagram.com/addproductos/"
          foto={add}
        />

        <Card
          titulo="Inversiones Vitaplast"
          line1="Plastico reciclado"
          line2="Fabrica de productos plasticos"
          line3="Envios gratis a nivel estatal"
          boton1="Web"
          link1="https://vitaplast.com.ve/"
          boton2="Instagram"
          link2="https://www.instagram.com/vitaplastve_/"
          foto={vitaplast}
        />
      </div>
    </div>
  );
};

export default Home;
