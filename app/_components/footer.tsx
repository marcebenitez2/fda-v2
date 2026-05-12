export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <h3 className="foot-big">
              Fábrica de Armas.
              <br />
              <em>+80 años de barrio.</em>
            </h3>
          </div>
          <div className="foot-col">
            <h4>Club</h4>
            <a href="#pulmon">Quiénes somos</a>
            <a href="#disciplinas">Disciplinas</a>
            <a href="#instalaciones">Instalaciones</a>
            <a href="#comunidad">Comunidad</a>
          </div>
          <div className="foot-col">
            <h4>Socios</h4>
            <a href="#contacto">Asociarse</a>
            <a href="#">Cuotas</a>
            <a href="#">Reservas</a>
            <a href="#">Reglamento</a>
          </div>
          <div className="foot-col">
            <h4>Contacto</h4>
            <a href="tel:+5491100000000">+54 9 11 0000-0000</a>
            <a href="mailto:hola@fabricadearmas.club">
              hola@fabricadearmas.club
            </a>
            <a href="#">Cómo llegar</a>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© Club Fábrica de Armas</div>
          <div>+80 años · Hecho con orgullo en Zona Sur</div>
        </div>
      </div>
    </footer>
  );
}
