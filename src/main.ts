import about from "./pages/about";
import home from "./pages/home";

type Page = () => string | Promise<string>;

const routes: Record<string, Page> = {
  "/": home,
  "/about": about,
};

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App element not found");
}

const render = async (): Promise<void> => {
  const path = window.location.pathname;
  const page = routes[path];

  app.innerHTML = page ? await page() : "<h1>404 - Page Not Found</h1>";
};

render();
