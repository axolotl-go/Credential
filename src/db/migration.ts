import { createClient } from "@libsql/client";

export const migration = async (): Promise<void> => {
  const url = "";
  const authToken = "";
  if (!url || !authToken) {
    throw new Error(
      "Database URL or Auth Token is not defined in environment variables.",
    );
  }

  const db = createClient({
    url,
    authToken,
  });

  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id TEXT PRIMARY KEY,
        nombre TEXT NOT NULL,
        tipo_sangre TEXT,
        edad INTEGER,
        fecha_registro TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        descripcion_operado TEXT,
        equipo TEXT,
        apodo TEXT UNIQUE,
        credencial_valida INTEGER NOT NULL DEFAULT 1
          CHECK (credencial_valida IN (0, 1)),
        is_activo INTEGER NOT NULL DEFAULT 1
          CHECK (is_activo IN (0, 1))
      );
    `);

    console.log("Migración ejecutada correctamente.");
  } catch (error) {
    console.error("Error al ejecutar la migración:", error);
    throw error;
  } finally {
    db.close();
  }
};

await migration();
