import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.foto} class="card-img-top object-fit-contain" alt="..." />
      <div className="card-body">
        <h5 classNamess="card-title">{props.titulo}</h5>
        <p className="card-text">{props.texto}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.line1}</li>
        <li className="list-group-item">{props.line2}</li>
        <li className="list-group-item">{props.line3}</li>
      </ul>
      <div className="card-body">
        <a href={props.link1} className="card-link" target="_blank">
          {props.boton1}
        </a>
        <a href={props.link2} className="card-link" target="_blank">
          {props.boton2}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  texto: PropTypes.string,
  titulo: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  boton1: PropTypes.string,
  boton2: PropTypes.string,
  foto: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
};

export default Card;
