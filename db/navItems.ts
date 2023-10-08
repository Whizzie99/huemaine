interface NavItem {
  id: number;
  title: string;
  path: string;
}

export const navItems: NavItem[] = [
  {
    id: 1,
    title: "home",
    path: "/",
  },
  {
    id: 2,
    title: "our story",
    path: "/about",
  },
  {
    id: 3,
    title: "projects",
    path: "/projects",
  },
  {
    id: 4,
    title: "services",
    path: "/services",
  },
  {
    id: 4,
    title: "blog",
    path: "/blog",
  },
  {
    id: 5,
    title: "contact",
    path: "/#contact",
  },
];
