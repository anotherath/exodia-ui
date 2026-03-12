import { useState } from "react";
import { Pagination } from "@/components/ui/pagination";

export interface PositionRecord {
  pair: string;
  side: string;
  entry: string;
  market: string;
  size: string;
  pnl: string;
  pnlPercent: string;
  isPositive: boolean;
}

interface ActivePositionsTableProps {
  records: PositionRecord[];
  itemsPerPage?: number;
}

export function ActivePositionsTable({
  records,
  itemsPerPage = 5,
}: ActivePositionsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(records.length / itemsPerPage);
  const paginatedRecords = records.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="flex flex-col flex-1 pb-4">
      <div className="flex-1 overflow-x-auto min-h-0 ">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 z-10">
            <tr className="border-b border-white/5 bg-white/2">
              <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap">
                Pair
              </th>
              <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap">
                Side
              </th>
              <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap">
                Entry_Price
              </th>
              <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap">
                Market_Price
              </th>
              <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap">
                Size
              </th>
              <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap">
                Unrealized_PnL
              </th>
              <th className="px-4 py-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80 whitespace-nowrap text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-xs font-mono ">
            {paginatedRecords.map((pos, idx) => (
              <tr
                key={idx}
                className="border-b border-white/5 hover:bg-white/2 transition-colors group"
              >
                <td className="px-4 py-6 font-bold tracking-tighter text-sm whitespace-nowrap">
                  {pos.pair}
                </td>
                <td className="px-4 py-6 whitespace-nowrap">
                  <span
                    className={`font-bold px-3 py-1 border text-xs ${pos.side.includes("LONG") ? "border-green-500/20 bg-green-500/5 text-green-500" : "border-red-500/20 bg-red-500/5 text-red-500"}`}
                  >
                    {pos.side}
                  </span>
                </td>
                <td className="px-4 py-6 text-muted-foreground text-sm whitespace-nowrap">
                  {pos.entry}
                </td>
                <td className="px-4 py-6 text-sm whitespace-nowrap">
                  {pos.market}
                </td>
                <td className="px-4 py-6 text-sm whitespace-nowrap">
                  {pos.size}{" "}
                  <span className="text-xs text-muted-foreground">USDT</span>
                </td>
                <td className="px-4 py-6 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span
                      className={`font-bold text-sm ${pos.isPositive ? "text-green-500" : "text-red-500"}`}
                    >
                      {pos.pnl}
                    </span>
                    <span className="text-xs text-muted-foreground opacity-70">
                      ({pos.pnlPercent})
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-right whitespace-nowrap">
                  <button className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-foreground hover:bg-primary transition-all border border-primary/20 bg-primary/5 px-4 py-1.5 cursor-pointer active:scale-95">
                    Close_Node
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
