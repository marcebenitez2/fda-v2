import type { Page } from "@playwright/test";

// WebKit logs these when its own native video controls cannot load their
// icons in the test browser; they do not come from the site.
const BROWSER_NOISE = /^Button failed to load, iconName = /;

// Collects console errors, uncaught exceptions and failed same-origin
// requests so a test can assert the page loaded cleanly.
export function trackPageProblems(page: Page): string[] {
  const problems: string[] = [];
  const origin = (url: string): string => new URL(url).origin;

  page.on("console", (message) => {
    if (message.type() === "error" && !BROWSER_NOISE.test(message.text())) {
      problems.push(`console: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => problems.push(`exception: ${error.message}`));
  page.on("requestfailed", (request) => {
    if (origin(request.url()) === origin(page.url())) {
      problems.push(`request failed: ${request.url()}`);
    }
  });
  page.on("response", (response) => {
    const sameOrigin = origin(response.url()) === origin(page.url());
    if (
      sameOrigin &&
      response.status() >= 400 &&
      response.url() !== page.url()
    ) {
      problems.push(`HTTP ${response.status()}: ${response.url()}`);
    }
  });

  return problems;
}

export async function scrollTo(page: Page, y: number): Promise<void> {
  await page.evaluate(
    (top) => window.scrollTo({ top, behavior: "instant" }),
    y,
  );
}
