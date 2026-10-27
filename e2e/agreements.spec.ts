import { expect, test } from "@playwright/test";
import {
  AGREEMENTS,
  NEW_AGREEMENT_WHATSAPP_MESSAGE,
  agreementWhatsappMessage,
} from "../app/_components/agreements";
import { CLUB_PHONE } from "../app/_components/club-info";
import { whatsappUrl } from "../app/_components/whatsapp";

test.describe("agreements section", () => {
  test("lists each agreement with its WhatsApp link and invites new ones", async ({
    page,
  }) => {
    await page.goto("/");
    const section = page.locator("#convenios");

    for (const agreement of AGREEMENTS) {
      const card = section
        .locator(".conv-card")
        .filter({ hasText: agreement.fullName });
      await expect(card).toContainText(agreement.name);
      await expect(card).toContainText(agreement.benefit);
      await expect(
        card.getByRole("link", { name: "Consultar por el convenio" }),
      ).toHaveAttribute(
        "href",
        whatsappUrl(CLUB_PHONE, agreementWhatsappMessage(agreement)),
      );
    }

    await expect(
      section.getByRole("link", { name: "Escribinos" }),
    ).toHaveAttribute(
      "href",
      whatsappUrl(CLUB_PHONE, NEW_AGREEMENT_WHATSAPP_MESSAGE),
    );
  });
});
