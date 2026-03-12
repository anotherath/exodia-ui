"use client";

import { useState } from "react";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";

export interface AssetRecord {
  asset: string;
  total: string;
  available: string;
  inOrder: string;
}

interface AssetBreakdownTableProps {
  records: AssetRecord[];
  itemsPerPage?: number;
}

export function AssetBreakdownTable({
  records,
  itemsPerPage = 5,
}: AssetBreakdownTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(records.length / itemsPerPage);
  const paginatedRecords = records.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  if (records.length === 0) {
    return <EmptyState message="No assets found" />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b border-white/5">
              <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Asset
              </th>
              <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Total
              </th>
              <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Available
              </th>
              <th className="pb-6 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] text-right">
                In Order
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {paginatedRecords.map((record, index) => (
              <tr
                key={index}
                className="group hover:bg-white/2 transition-colors"
              >
                <td className="py-6 text-sm font-bold text-foreground uppercase tracking-tight">
                  {record.asset}
                </td>
                <td className="py-6 text-sm font-mono font-bold text-foreground">
                  {record.total}
                </td>
                <td className="py-6 text-sm font-mono font-bold text-foreground">
                  {record.available}
                </td>
                <td className="py-6 text-sm font-mono font-bold text-muted-foreground text-right">
                  {record.inOrder}
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
