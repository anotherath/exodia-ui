"use client";

import { useState } from "react";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";

export interface TransactionRecord {
  asset: string;
  type: string;
  amount: string;
  status: string;
  time: string;
}

interface TransactionHistoryTableProps {
  records: TransactionRecord[];
  itemsPerPage?: number;
}

export function TransactionHistoryTable({
  records,
  itemsPerPage = 5,
}: TransactionHistoryTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(records.length / itemsPerPage);
  const paginatedRecords = records.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  if (records.length === 0) {
    return <EmptyState message="No transactions found" />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left">
              <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Asset
              </th>
              <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Type
              </th>
              <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Amount
              </th>
              <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Status
              </th>
              <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] text-right">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {paginatedRecords.map((record, index) => (
              <tr
                key={index}
                className="group hover:bg-white/2 transition-colors"
              >
                <td className="py-6 text-xs font-bold text-foreground uppercase tracking-tight">
                  {record.asset}
                </td>
                <td className="py-6 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  {record.type}
                </td>
                <td className="py-6 text-xs font-mono font-bold text-foreground">
                  {record.amount}
                </td>
                <td className="py-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-green-500">
                    {record.status}
                  </span>
                </td>
                <td className="py-6 text-xs font-mono text-muted-foreground text-right uppercase tracking-wider">
                  {record.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
