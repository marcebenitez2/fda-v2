import { expect, test } from "@playwright/test";
import { FAQ_GROUPS, type FaqBlock } from "../app/_components/faqs";

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

test.describe("faq section", () => {
  test("groups the questions by topic with an index to each one", async ({
    page,
  }) => {
    await page.goto("/");
    const section = page.locator("#preguntas");

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
    await page.goto("/");

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
});
