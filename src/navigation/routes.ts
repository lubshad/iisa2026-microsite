export const routes = {
  home: "/",
  callForPapers: "/call-for-papers",
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];

export const primaryNavigation = [
  { href: routes.home, label: "Home" },
  { href: routes.callForPapers, label: "Call for Papers" },
  { href: "#", label: "Registration" },
  { href: "#", label: "Committee" },
  { href: "#", label: "Venue" },
  { href: "#", label: "Kerala Culture" },
] as const;
