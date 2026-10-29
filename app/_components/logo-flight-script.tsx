import { initLogoFlight } from "./logo-flight";

// The script goes in as inner HTML so React never creates a <script> element
// itself: the browser runs it while parsing the server HTML, and after a
// client-side navigation it stays inert (and React does not warn about it)
// while the nav starts the flight instead.
export function LogoFlightScript() {
  return (
    <div
      hidden
      dangerouslySetInnerHTML={{
        __html: `<script>(${initLogoFlight.toString()})()</script>`,
      }}
    />
  );
}
