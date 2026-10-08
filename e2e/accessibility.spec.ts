import { expect, test } from "@playwright/test";

// WebKit does not move keyboard focus to links with Tab by default, so the
// keyboard tests run in Chromium only.
test.describe("keyboard navigation", () => {
  test.skip(
    ({ browserName }) => browserName !== "chromium",
    "Tab only focuses links in Chromium by default",
  );

  test("the first Tab reveals a skip link that jumps to the content", async ({
    page,
  }) => {
    await page.goto("/");
    const skipLink = page.getByRole("link", { name: "Saltar al contenido" });

    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeInViewport();

    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#contenido$/);
    await expect(page.locator("main#contenido")).toBeFocused();
  });

  test("focused elements show a visible outline", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");

    const outline = await page.evaluate(() => {
      const style = getComputedStyle(document.activeElement as Element);
      return `${style.outlineStyle} ${style.outlineWidth}`;
    });
    expect(outline).toBe("solid 2px");
  });

  test.describe("mobile menu", () => {
    test.use({ viewport: { width: 390, height: 844 } });

    test("keeps focus inside while open and returns it when closed", async ({
      page,
    }) => {
      await page.goto("/");
      const toggle = page.locator(".nav-toggle");
      const links = page.locator(".nav-links a");

      await toggle.focus();
      await page.keyboard.press("Enter");
      await expect(links.first()).toBeFocused();

      // Shift+Tab from the first link wraps to the last focusable item.
      await page.keyboard.press("Shift+Tab");
      await expect(toggle).toBeFocused();
      await page.keyboard.press("Tab");
      await expect(links.first()).toBeFocused();

      await page.keyboard.press("Escape");
      await expect(page.locator(".nav")).not.toHaveClass(/is-open/);
      await expect(toggle).toBeFocused();
    });
  });
});
