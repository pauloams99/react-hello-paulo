const Text = (props) => {
  return (
    <div className="container text-center">
      <div className="row mt-3 mx-5">
        <div className="col align-self-center bg-primary-subtle form-control">
          <p className="fs-2 text-start">Conoce a VLU Mkt & Comms</p>
          <p className="text-start">
            Somos una agencia de Marketing y Comunicaciones con más de 5 años de
            experiencia en el desarrollo de estrategias de mercadeo para marcas
            de distintos rubros, basados en el manejo de estrategias on y off
            line para el logro de los objetivos de cada marca.
          </p>
          <button className="btn btn-outline-secondary d-flex justify-content-start mb-2">
            <a
              href="https://www.instagram.com/vlu_ve/"
              type="button"
              className="card-link text-secondary-emphasis"
              target="_blank"
            >
              Conoce mas
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Text;
