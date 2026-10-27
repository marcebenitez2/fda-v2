import Image from "next/image";
import {
  AGREEMENTS,
  NEW_AGREEMENT_WHATSAPP_MESSAGE,
  agreementWhatsappMessage,
  type Agreement,
} from "./agreements";
import { CLUB_PHONE } from "./club-info";
import { listNumber } from "./list-number";
import { Reveal } from "./reveal";
import { whatsappUrl } from "./whatsapp";

function AgreementCard({
  agreement,
  index,
}: {
  agreement: Agreement;
  index: number;
}) {
  return (
    <Reveal
      id={`convenio-${agreement.id}`}
      className="conv-card"
      delay={`${index * 0.1}s`}
    >
      <div className="conv-card-top">
        <div className="conv-logo">
          {agreement.logo ? (
            <Image
              src={agreement.logo}
              alt={`Logo de ${agreement.name}`}
              fill
              sizes="72px"
              className="conv-logo-img"
            />
          ) : (
            <span aria-hidden="true">{agreement.name}</span>
          )}
        </div>
        <span className="conv-num">{listNumber(index)}</span>
      </div>
      <div className="conv-body">
        <h3>{agreement.name}</h3>
        <p className="conv-full-name">{agreement.fullName}</p>
        <span className="conv-benefit">{agreement.benefit}</span>
        <p className="conv-description">{agreement.description}</p>
        {agreement.details.length > 0 && (
          <dl className="conv-details">
            {agreement.details.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
      <div className="conv-links">
        <a
          className="conv-link"
          href={whatsappUrl(CLUB_PHONE, agreementWhatsappMessage(agreement))}
          target="_blank"
          rel="noreferrer"
        >
          Consultar por el convenio
          <span aria-hidden="true">→</span>
        </a>
        {agreement.announcementUrl && (
          <a
            className="conv-link conv-link--soft"
            href={agreement.announcementUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ver el anuncio
          </a>
        )}
      </div>
    </Reveal>
  );
}

export function Convenios() {
  return (
    <section className="conv" id="convenios">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Convenios</div>
            <h2 className="display h-md">
              Beneficios para <em>afiliados</em>.
            </h2>
          </Reveal>
          <Reveal className="right" delay=".15s">
            Tenemos acuerdos con sindicatos e instituciones para que sus
            afiliados disfruten del club. Fijate si el tuyo está en la lista.
          </Reveal>
        </div>

        <div className="conv-grid">
          {AGREEMENTS.map((agreement, index) => (
            <AgreementCard
              key={agreement.id}
              agreement={agreement}
              index={index}
            />
          ))}

          <Reveal
            className="conv-card conv-join"
            delay={`${AGREEMENTS.length * 0.1}s`}
          >
            <div className="eyebrow">Nuevos convenios</div>
            <h3>¿Tu sindicato o empresa quiere sumarse?</h3>
            <p>
              Escribinos y vemos juntos cómo armar un convenio para tus
              afiliados o empleados.
            </p>
            <a
              className="conv-join-cta"
              href={whatsappUrl(CLUB_PHONE, NEW_AGREEMENT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noreferrer"
            >
              Escribinos
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
