import { expect, test } from "@playwright/test";
import { FAQ_GROUPS, type FaqBlock } from "../app/_components/faqs";

const FAQ_PATH = "/preguntas-frecuentes";

const blockTexts = (block: FaqBlock): string[] => {
  switch (block.type) {
    case "text":
      return [block.text];
    case "table":
      return block.rows.flat();
    default:
      return block.items;
  }
};

test.describe("faq page", () => {
  test("groups the questions by topic with an index to each one", async ({
    page,
  }) => {
    await page.goto(FAQ_PATH);
    const section = page.locator(".faq");

    for (const group of FAQ_GROUPS) {
      await expect(
        section.locator(".faq-index").getByRole("link", { name: group.title }),
      ).toHaveAttribute("href", `#faq-${group.id}`);

      const block = section.locator(`#faq-${group.id}`);
      await expect(block.locator("h3")).toHaveText(group.title);
      await expect(block.locator(".faq-item summary")).toHaveText(
        group.faqs.map((faq) => faq.question),
      );
    }
  });

  test("each question opens its full answer and links", async ({ page }) => {
    await page.goto(FAQ_PATH);

    for (const faq of FAQ_GROUPS.flatMap((group) => group.faqs)) {
      const item = page
        .locator(".faq-item")
        .filter({ has: page.getByText(faq.question, { exact: true }) });
      const answer = item.locator(".faq-answer");

      await expect(answer).toBeHidden();
      await item.locator("summary").click();
      await expect(answer).toBeVisible();

      for (const text of faq.answer.flatMap(blockTexts)) {
        await expect(answer).toContainText(text);
      }
      for (const link of faq.links ?? []) {
        await expect(
          answer.getByRole("link", { name: link.label }),
        ).toHaveAttribute("href", link.href);
      }
    }
  });

  test("links to home sections point to sections that exist", async ({
    page,
  }) => {
    await page.goto(FAQ_PATH);
    const ids = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLAnchorElement>('a[href^="/#"]')].map(
        (link) => link.getAttribute("href")?.slice(2) ?? "",
      ),
    );
    expect(ids.length).toBeGreaterThan(0);

    await page.goto("/");
    for (const id of new Set(ids)) {
      await expect(page.locator(`[id="${id}"]`)).toHaveCount(1);
    }
  });

  test("the header takes you back to the home page", async ({ page }) => {
    await page.goto(FAQ_PATH);
    await page.getByRole("link", { name: "Volver al inicio" }).click();

    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator("h1")).toContainText("DOMINGO MATHEU");
  });

  test("the home page links to it instead of listing the questions", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.locator(".faq-item")).toHaveCount(0);
    await expect(
      page
        .locator("#preguntas")
        .getByRole("link", { name: "Ver preguntas frecuentes" }),
    ).toHaveAttribute("href", FAQ_PATH);
    await expect(
      page
        .locator("footer")
        .getByRole("link", { name: "Preguntas frecuentes" }),
    ).toHaveAttribute("href", FAQ_PATH);
  });
});
