import { db } from "../db/connection";

export const turso = {
  async execute(sql: string, args = []) {
    return db.execute({ sql, args });
  },

  async batch(statements: any[]) {
    return db.batch(statements, "write");
  },

  async close() {
    await db.close();
  },
};
