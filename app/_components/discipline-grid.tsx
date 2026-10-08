"use client";

import { DisciplineCard } from "./discipline-card";
import { DISCIPLINES } from "./disciplines";
import { Reveal } from "./reveal";
import { useOpenItem } from "./use-open-item";

export function DisciplineGrid() {
  const contact = useOpenItem();

  return (
    <Reveal className="disc-grid">
      {DISCIPLINES.map((discipline) => (
        <DisciplineCard
          key={discipline.name}
          discipline={discipline}
          isOpen={contact.openId === discipline.name}
          onToggle={() => contact.toggle(discipline.name)}
          onClose={contact.close}
        />
      ))}
    </Reveal>
  );
}
