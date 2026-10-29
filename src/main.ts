import home from "./pages/home";
import about from "./pages/about";

type Page = () => string;

const routes: Record<string, Page> = {
  "/": home,
  "/about": about,
};

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App element not found");
}

const path = window.location.pathname;
const page = routes[path];

app.innerHTML = page ? page() : "<h1>404 - Page Not Found</h1>";
