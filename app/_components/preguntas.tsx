import { CLUB_PHONE } from "./club-info";
import {
  FAQ_GROUPS,
  FAQ_WHATSAPP_MESSAGE,
  type Faq,
  type FaqBlock,
} from "./faqs";
import { listNumber } from "./list-number";
import { Reveal } from "./reveal";
import { whatsappUrl } from "./whatsapp";

function AnswerBlock({ block }: { block: FaqBlock }) {
  switch (block.type) {
    case "text":
      return <p>{block.text}</p>;
    case "list":
      return (
        <ul className="faq-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="faq-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="faq-table-wrap">
          <table className="faq-table">
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} scope="col">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={index}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

function FaqItem({ faq }: { faq: Faq }) {
  return (
    <details className="faq-item">
      <summary>
        <span className="faq-question">{faq.question}</span>
        <span className="faq-icon" aria-hidden="true" />
      </summary>
      <div className="faq-answer">
        {faq.answer.map((block, index) => (
          <AnswerBlock key={index} block={block} />
        ))}
        {faq.links && (
          <div className="faq-links">
            {faq.links.map((link) => (
              <a
                key={link.href}
                className="faq-link"
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </details>
  );
}

export function Preguntas() {
  return (
    <section className="faq">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Preguntas frecuentes</div>
            <h1 className="display h-lg">
              Lo que <em>más nos preguntan</em>.
            </h1>
          </Reveal>
          <Reveal className="right" delay=".15s">
            Visitas, cuotas, quinchos, salón y actividades. Si no encontrás lo
            que buscás,{" "}
            <a
              href={whatsappUrl(CLUB_PHONE, FAQ_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noreferrer"
            >
              escribinos por WhatsApp
            </a>
            .
          </Reveal>
        </div>

        <div className="faq-layout">
          <nav className="faq-index" aria-label="Temas">
            {FAQ_GROUPS.map((group, index) => (
              <a key={group.id} href={`#faq-${group.id}`}>
                <span className="n">{listNumber(index)}</span>
                {group.title}
              </a>
            ))}
          </nav>

          <div className="faq-groups">
            {FAQ_GROUPS.map((group) => (
              <Reveal
                key={group.id}
                id={`faq-${group.id}`}
                className="faq-group"
              >
                <h3>{group.title}</h3>
                {group.faqs.map((faq) => (
                  <FaqItem key={faq.question} faq={faq} />
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
