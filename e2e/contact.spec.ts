import { expect, test, type Page } from "@playwright/test";
import {
  CLUB_ADDRESS,
  CLUB_EMAIL,
  CLUB_INSTAGRAM_URL,
  CLUB_PHONE,
} from "../app/_components/club-info";

const FORMSUBMIT = "https://formsubmit.co/**";

async function fillRequiredFields(page: Page): Promise<void> {
  const form = page.locator("#contacto form");
  await form.getByLabel("Nombre y apellido").fill("Prueba Automática");
  await form.getByLabel("Email").fill("prueba@example.com");
}

test.describe("contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("does not send when name or email are missing", async ({ page }) => {
    let sent = false;
    await page.route(FORMSUBMIT, (route) => {
      sent = true;
      return route.abort();
    });

    const form = page.locator("#contacto form");
    await form.getByRole("button", { name: "Enviar consulta" }).click();

    await expect(form.getByLabel("Nombre y apellido")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    await expect(form.getByLabel("Email")).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    expect(sent).toBe(false);
  });

  test("sends the inquiry to the club inbox and confirms it", async ({
    page,
  }) => {
    let payload: Record<string, string> = {};
    let url = "";
    await page.route(FORMSUBMIT, async (route) => {
      url = route.request().url();
      payload = route.request().postDataJSON();
      await route.fulfill({ json: { success: "true", message: "ok" } });
    });

    await fillRequiredFields(page);
    await page
      .locator("#contacto form")
      .getByLabel("Mensaje")
      .fill("Consulta de prueba");
    await page.getByRole("button", { name: "Enviar consulta" }).click();

    await expect(
      page.locator("#contacto form").getByRole("status"),
    ).toContainText("Recibimos tu consulta");
    expect(url).toBe(`https://formsubmit.co/ajax/${CLUB_EMAIL}`);
    expect(payload).toMatchObject({
      Nombre: "Prueba Automática",
      Email: "prueba@example.com",
      Mensaje: "Consulta de prueba",
      _replyto: "prueba@example.com",
    });
    await expect(
      page.locator("#contacto form").getByLabel("Nombre y apellido"),
    ).toHaveValue("");
  });

  test("offers WhatsApp when the form service fails", async ({ page }) => {
    await page.route(FORMSUBMIT, (route) =>
      route.fulfill({
        json: { success: "false", message: "This form needs Activation" },
      }),
    );

    await fillRequiredFields(page);
    await page.getByRole("button", { name: "Enviar consulta" }).click();

    const alert = page.locator("#contacto form").getByRole("alert");
    await expect(alert).toContainText("No pudimos enviar tu consulta");
    await expect(alert.getByRole("link")).toHaveAttribute(
      "href",
      new RegExp(`^https://wa\\.me/549${CLUB_PHONE.replace(/\D/g, "")}`),
    );
  });
});

test.describe("club details", () => {
  test("contact section and structured data use the shared club info", async ({
    page,
  }) => {
    await page.goto("/");
    const contact = page.locator("#contacto");

    await expect(contact).toContainText(CLUB_ADDRESS.street);
    await expect(contact).toContainText(CLUB_PHONE);
    await expect(contact).toContainText("No atendemos llamadas");
    await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);

    const data = JSON.parse(
      (await page
        .locator('script[type="application/ld+json"]')
        .textContent()) ?? "{}",
    );
    expect(data.email).toBe(CLUB_EMAIL);
    expect(data.address.streetAddress).toBe(CLUB_ADDRESS.street);
    expect(data.sameAs).toEqual([CLUB_INSTAGRAM_URL]);
  });
});
