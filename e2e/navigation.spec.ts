import { expect, test } from "@playwright/test";
import { scrollTo } from "./helpers";

test.describe("mobile menu", () => {
  test.skip(
    ({ isMobile }) => !isMobile,
    "the hamburger menu only exists on mobile",
  );

  test("opens, navigates to a section and closes", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator(".nav");
    const toggle = page.getByRole("button", { name: "Abrir menú" });

    await toggle.click();
    await expect(nav).toHaveClass(/is-open/);

    await page
      .locator(".nav-links")
      .getByRole("link", { name: "Instalaciones" })
      .click();
    await expect(nav).not.toHaveClass(/is-open/);
    await expect(page).toHaveURL(/#instalaciones$/);

    const navBottom = (await nav.boundingBox())?.height ?? 0;
    await expect
      .poll(async () => (await page.locator("#instalaciones").boundingBox())?.y)
      .toBeCloseTo(navBottom, -1);
  });

  test("closes with the Escape key", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Abrir menú" }).click();
    await expect(page.locator(".nav")).toHaveClass(/is-open/);

    await page.keyboard.press("Escape");
    await expect(page.locator(".nav")).not.toHaveClass(/is-open/);
  });
});

test.describe("logo flight", () => {
  test("the hero shield docks into the nav when scrolling and returns at the top", async ({
    page,
  }) => {
    await page.goto("/");
    const html = page.locator("html");
    const flyer = page.locator(".logo-fly");
    const slot = page.locator(".logo-slot");

    await expect(html).not.toHaveAttribute("data-logo-docked");

    await scrollTo(page, 600);
    await expect(html).toHaveAttribute("data-logo-docked", "");
    await expect(html).toHaveAttribute("data-scrolled", "");
    await expect(flyer).toBeVisible();
    await expect
      .poll(async () => {
        const [flyerBox, slotBox] = await Promise.all([
          flyer.boundingBox(),
          slot.boundingBox(),
        ]);
        if (!flyerBox || !slotBox) return Infinity;
        return (
          Math.abs(flyerBox.x - slotBox.x) + Math.abs(flyerBox.y - slotBox.y)
        );
      })
      .toBeLessThan(2);

    await scrollTo(page, 0);
    await expect(html).not.toHaveAttribute("data-logo-docked");
    await expect(page.locator(".hero-logo")).toBeVisible();
  });
});
