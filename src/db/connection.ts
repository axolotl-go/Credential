import { createClient } from "@libsql/client";

const url = import.meta.env.VITE_TURSO_DATABASE_URL;
const authToken = import.meta.env.VITE_TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  throw new Error(
    "Database URL or Auth Token is not defined in environment variables.",
  );
}

export const db = createClient({
  url,
  authToken,
});
