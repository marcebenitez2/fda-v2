export function Recorrido() {
  return (
    <section className="recorrido" id="recorrido" aria-labelledby="recorrido-title">
      <div className="wrap recorrido-layout">
        <div className="recorrido-copy">
          <div className="eyebrow">El club en movimiento</div>
          <h2 className="display" id="recorrido-title">
            Así se vive <em>Domingo Matheu.</em>
          </h2>
          <p>
            Un recorrido por el predio, los deportes y la gente que le da vida
            al club. Dale play y conocelo desde adentro.
          </p>
          <span className="recorrido-duration">00:34 · Un recorrido completo</span>
        </div>

        <div className="recorrido-media">
          <div className="recorrido-frame">
            <video
              aria-label="Video de presentación del CLUB S&D F.A. DOMINGO MATHEU"
              controls
              playsInline
              preload="none"
              poster="/club/video-poster.jpg"
              width="540"
              height="960"
            >
              <source src="/club/recorrido-club.mp4" type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
          </div>
          <div className="recorrido-caption">
            <span>CLUB S&amp;D F.A. DOMINGO MATHEU</span>
            <span>Rosario · Zona Sur</span>
          </div>
        </div>
      </div>
    </section>
  );
}
