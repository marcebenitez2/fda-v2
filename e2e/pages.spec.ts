import { expect, test } from "@playwright/test";
import { DISCIPLINES } from "../app/_components/disciplines";
import { trackPageProblems } from "./helpers";

test.describe("pages", () => {
  test("home loads without errors", async ({ page }) => {
    const problems = trackPageProblems(page);
    const response = await page.goto("/");

    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Club Domingo Matheu/);
    await expect(page.locator("h1")).toContainText("DOMINGO MATHEU");
    await page.waitForLoadState("networkidle");
    expect(problems).toEqual([]);
  });

  test("novedades loads without errors", async ({ page }) => {
    const problems = trackPageProblems(page);
    const response = await page.goto("/novedades");

    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toContainText("muy pronto acá");
    await page.waitForLoadState("networkidle");
    expect(problems).toEqual([]);
  });

  test("unknown routes show the club 404 page", async ({ page }) => {
    const response = await page.goto("/esta-pagina-no-existe");

    expect(response?.status()).toBe(404);
    await expect(page.locator("h1")).toContainText("no existe");
    await expect(
      page.getByRole("link", { name: "Volver al inicio" }),
    ).toHaveAttribute("href", "/");
  });

  test("sitemap and robots are published", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    expect(await sitemap.text()).toContain("<urlset");

    const robots = await request.get("/robots.txt");
    expect(await robots.text()).toContain("Sitemap:");
  });

  test("hero counters ship the real values in the HTML", async ({
    request,
  }) => {
    const html = await (await request.get("/")).text();

    expect(html).toContain(`class="n">${DISCIPLINES.length}<`);
    expect(html).toContain('class="n">9,5<');
    expect(html).not.toContain('class="n">0<');
  });

  test("every in-page link points to an existing section", async ({ page }) => {
    await page.goto("/");
    const missing = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')]
        .map((link) => link.getAttribute("href") ?? "")
        .filter(
          (href) => href.length > 1 && !document.getElementById(href.slice(1)),
        ),
    );

    expect(missing).toEqual([]);
  });

  test("external links open in a new tab", async ({ page }) => {
    await page.goto("/");
    const sameTab = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]')]
        .filter((link) => link.target !== "_blank")
        .map((link) => link.href),
    );

    expect(sameTab).toEqual([]);
  });
});
