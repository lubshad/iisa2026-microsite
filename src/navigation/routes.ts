export const routes = {
  home: "/",
  callForPapers: "/call-for-papers",
  registration: "/registration",
  committee: "/committee",
  venue: "/venue",
  keralaCulture: "/kerala-culture",
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];

export const primaryNavigation = [
  { href: routes.home, label: "Home" },
  { href: routes.callForPapers, label: "Call for Papers" },
  { href: routes.registration, label: "Registration" },
  { href: routes.committee, label: "Committee" },
  { href: routes.venue, label: "Venue" },
  { href: routes.keralaCulture, label: "Kerala Culture" },
] as const;
