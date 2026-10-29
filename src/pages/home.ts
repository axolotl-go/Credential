import { turso } from "../services/turso";

export type User = {
  id: number;
  nombre: string;
  apodo: string | null;
  equipo: string | null;
  is_activo: boolean;
};

export default async function home(): Promise<string> {
  const result = await turso.execute(
    "SELECT id, nombre, apodo, equipo, is_activo FROM usuarios",
  );

  const usuarios = result.rows as unknown as User[];

  return `
    <h1>Usuarios registrados</h1>
    <ul>
      ${usuarios
        .map(
          (usuario) => `
            <li>
              ${usuario.nombre} - ${usuario.apodo ?? "Sin apodo"}
            </li>
            <li>
            ${usuario.id}
            </li>
          `,
        )
        .join("")}
    </ul>
  `;
}
