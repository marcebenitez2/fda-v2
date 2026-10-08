import { initLogoFlight } from "./logo-flight";

export function LogoFlightScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: `(${initLogoFlight.toString()})()` }}
    />
  );
}
