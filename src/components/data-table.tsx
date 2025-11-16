const alignmentMap = {
  left: "justify-start text-left",
  right: "justify-end text-right",
  center: "justify-center text-center",
} as const;

interface Column {
  key: string;
  header: string;
  align?: keyof typeof alignmentMap;
}

interface Row {
  id: string;
  cells: Record<string, React.ReactNode>;
}

interface DataTableProps {
  caption: string;
  columns: Column[];
  rows: Row[];
}

export function DataTable({ caption, columns, rows }: DataTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5">
      <table className="w-full min-w-[640px] text-left text-sm" role="grid">
        <caption className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
          {caption}
        </caption>
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="px-6 py-3 font-semibold text-slate-500">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => (
            <tr key={row.id} className="bg-white/90 transition hover:bg-slate-50">
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 text-sm text-slate-600">
                  <div className={alignmentMap[column.align ?? "left"]}>{row.cells[column.key]}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
