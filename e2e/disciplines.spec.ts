import { expect, test } from "@playwright/test";
import { CLUB_PHONE } from "../app/_components/club-info";
import { DISCIPLINES } from "../app/_components/disciplines";

const digits = (phone: string): string => phone.replace(/\D/g, "");

test.describe("disciplines", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("the grid and the hero marquee list every discipline", async ({
    page,
  }) => {
    await expect(page.locator(".disc")).toHaveCount(DISCIPLINES.length);

    const marquee = await page.locator(".marquee-track").innerText();
    for (const discipline of DISCIPLINES) {
      expect(marquee).toContain(discipline.name);
    }
  });

  test("every card links to the right WhatsApp number", async ({ page }) => {
    for (const discipline of DISCIPLINES) {
      const card = page.locator(".disc", { hasText: discipline.name });
      const link = card.locator(".disc-contact-link");
      const href = (await link.getAttribute("href")) ?? "";

      expect(href).toMatch(
        new RegExp(
          `^https://wa\\.me/549${digits(discipline.phone ?? CLUB_PHONE)}\\?text=`,
        ),
      );
      expect(decodeURIComponent(href)).toContain(discipline.name);
    }
  });

  test("a card opens its contact panel, only one stays open, and it closes again", async ({
    page,
  }) => {
    const [first, second] = [
      page.locator(".disc").nth(0),
      page.locator(".disc").nth(1),
    ];

    await first.locator(".disc-trigger").click();
    await expect(first).toHaveClass(/is-open/);

    await second.locator(".disc-trigger").click();
    await expect(second).toHaveClass(/is-open/);
    await expect(first).not.toHaveClass(/is-open/);
    await expect(page.locator(".disc.is-open")).toHaveCount(1);

    // Tapping the panel anywhere except the WhatsApp button shows the photo again.
    await second.locator(".disc-contact-label").click();
    await expect(second).not.toHaveClass(/is-open/);

    await second.locator(".disc-trigger").click();
    await page.keyboard.press("Escape");
    await expect(page.locator(".disc.is-open")).toHaveCount(0);
  });

  test("the open panel covers the whole photo", async ({ page }) => {
    // Regression test: Safari used to size this panel to its content.
    const card = page.locator(".disc").nth(4);
    await card.locator(".disc-trigger").click();
    await expect(card).toHaveClass(/is-open/);

    const [panel, photo] = await Promise.all([
      card.locator(".disc-contact").boundingBox(),
      card.locator(".disc-photo").boundingBox(),
    ]);
    expect(panel?.width).toBeCloseTo(photo?.width ?? 0, 0);
    expect(panel?.height).toBeCloseTo(photo?.height ?? 0, 0);
  });
});
