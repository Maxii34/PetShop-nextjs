import { MOCK_USUARIOS, type RolUsuario } from "@/mocks/admin";

const pill: Record<RolUsuario, string> = {
  admin: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
  moderador: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
  usuario: "bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300",
};

export default function AdminUsuarios() {
  return (
    <div className="rounded-3xl border border-zinc-200/70 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h1 className="text-xl font-extrabold text-zinc-900 dark:text-white">Usuarios</h1>
      <p className="text-sm text-zinc-500">{MOCK_USUARIOS.length} cuentas registradas (mock)</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-150 text-left text-sm">
          <thead>
            <tr className="text-xs tracking-wide text-zinc-400 uppercase">
              <th className="px-3 py-2 font-bold">Usuario</th>
              <th className="px-3 py-2 font-bold">Email</th>
              <th className="px-3 py-2 font-bold">Rol</th>
              <th className="px-3 py-2 font-bold">Último acceso</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {MOCK_USUARIOS.map((u) => (
              <tr key={u._id} className="transition hover:bg-zinc-50 dark:hover:bg-zinc-950/60">
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600/10 text-sm font-extrabold text-indigo-600 dark:text-indigo-300">
                      {u.nombre.charAt(0)}
                    </span>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      {u.nombre} {u.apellido}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2.5 text-zinc-600 dark:text-zinc-300">{u.email}</td>
                <td className="px-3 py-2.5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-bold capitalize ${pill[u.rol]}`}>
                    {u.rol}
                  </span>
                </td>
                <td className="px-3 py-2.5 text-xs text-zinc-500">{u.ultimoAcceso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-zinc-400">Maqueta: la gestión de roles pegará a <code>/api/usuarios</code>.</p>
    </div>
  );
}
