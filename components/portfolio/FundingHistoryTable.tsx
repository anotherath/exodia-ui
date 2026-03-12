"use client";

import { useState } from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";

export interface FundingRecord {
  asset: string;
  action: "Deposit" | "Withdraw";
  amount: string;
  status: string;
  date: string;
}

interface FundingHistoryTableProps {
  records: FundingRecord[];
  filterAction?: "all" | "deposits" | "withdrawals";
  itemsPerPage?: number;
}

export function FundingHistoryTable({
  records,
  filterAction = "all",
  itemsPerPage = 5,
}: FundingHistoryTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRecords = records.filter((record) => {
    if (filterAction === "deposits") return record.action === "Deposit";
    if (filterAction === "withdrawals") return record.action === "Withdraw";
    return true;
  });

  const totalPages = Math.ceil(filteredRecords.length / itemsPerPage);
  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  if (filteredRecords.length === 0) {
    return (
      <EmptyState
        message={`No ${filterAction !== "all" ? filterAction.slice(0, -1) : "funding"} records found`}
      />
    );
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
                Action
              </th>
              <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Amount
              </th>
              <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Status
              </th>
              <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] text-right">
                Date
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
                  <div className="flex items-center gap-2">
                    {record.action === "Deposit" ? (
                      <ArrowDownLeft className="w-3.5 h-3.5 text-green-500" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 text-red-500" />
                    )}
                    {record.action}
                  </div>
                </td>
                <td className="py-6 text-xs font-mono font-bold text-foreground">
                  {record.amount}
                </td>
                <td className="py-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {record.status}
                  </span>
                </td>
                <td className="py-6 text-xs font-mono text-muted-foreground text-right uppercase tracking-wider">
                  {record.date}
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
