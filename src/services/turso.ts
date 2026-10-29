import { db } from "../db/connection";

export const turso = {
  async execute(sql: string, args = []) {
    return db.execute({ sql, args });
  },

  async batch(statements: any[]) {
    return db.batch(statements, "write");
  },

  async Get(tableName: string) {
    const result = await db.execute({ sql: `SELECT * FROM ${tableName}` });
    return result.rows;
  },

  async close() {
    await db.close();
  },
};
