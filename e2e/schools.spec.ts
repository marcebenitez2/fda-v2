import { expect, test } from "@playwright/test";
import { CLUB_PHONE } from "../app/_components/club-info";
import {
  SCHOOL_ACTIVITIES,
  SCHOOL_PHOTOS,
  SCHOOL_WHATSAPP_MESSAGE,
} from "../app/_components/school-visits";
import { whatsappUrl } from "../app/_components/whatsapp";

test.describe("schools section", () => {
  test("lists the activities, shows the photos and links to WhatsApp", async ({
    page,
  }) => {
    await page.goto("/");
    const section = page.locator("#escuelas");

    for (const activity of SCHOOL_ACTIVITIES) {
      await expect(section).toContainText(activity.title);
    }
    await expect(section.locator(".escuelas-photo img")).toHaveCount(
      SCHOOL_PHOTOS.length,
    );
    await expect(
      section.getByRole("link", { name: "Coordiná una visita" }),
    ).toHaveAttribute("href", whatsappUrl(CLUB_PHONE, SCHOOL_WHATSAPP_MESSAGE));
  });
});
