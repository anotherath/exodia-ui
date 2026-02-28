"use client";

import { useState, useRef, useEffect } from "react";
import { Zap, Lock, Briefcase } from "lucide-react";
import TerminalTab from "./TerminalTab";
import TerminalInput from "./TerminalInput";

export default function TradeSidebar() {
  const [side, setSide] = useState<"long" | "short">("long");
  const [orderType, setOrderType] = useState<"market" | "limit">("market");
  const [leverage, setLeverage] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const value = Math.round(percentage * 99) + 1;
    setLeverage(value);
  };

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    handleSliderChange(e);
    const moveHandler = (moveEvent: MouseEvent | TouchEvent) => {
      setIsDragging(true);
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const clientX =
        "touches" in moveEvent
          ? moveEvent.touches[0].clientX
          : (moveEvent as MouseEvent).clientX;
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = x / rect.width;
      const value = Math.round(percentage * 99) + 1;
      setLeverage(value);
    };
    const stopHandler = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", stopHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("touchend", stopHandler);
    };
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", stopHandler);
    window.addEventListener("touchmove", moveHandler);
    window.addEventListener("touchend", stopHandler);
  };

  return (
    <div className="w-full lg:w-[400px] lg:flex-none flex flex-col backdrop-blur-sm no-scrollbar border-l border-white/5 bg-black/40 shrink-0">
      {/* Order Form */}
      <div className="p-8 space-y-10">
        <div className="flex gap-px bg-white/5 border border-white/10 p-1">
          <button
            onClick={() => setSide("long")}
            className={`flex-1 h-14 text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer active:scale-[0.98] ${
              side === "long"
                ? "bg-green-600 text-white active:bg-green-500"
                : "text-muted-foreground hover:bg-white/5 active:bg-green-500/20"
            }`}
          >
            Long
          </button>
          <button
            onClick={() => setSide("short")}
            className={`flex-1 h-14 text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer active:scale-[0.98] ${
              side === "short"
                ? "bg-red-600 text-white active:bg-red-500"
                : "text-muted-foreground hover:bg-white/5 active:bg-red-500/20"
            }`}
          >
            Short
          </button>
        </div>

        <div className="space-y-8">
          <div className="w-full">
            <div className="flex items-center text-muted-foreground bg-transparent gap-10 w-full justify-between mb-10 border-b border-white/5">
              <TerminalTab
                label="Market_Order"
                isActive={orderType === "market"}
                onClick={() => setOrderType("market")}
                className="pb-2.5"
              />
              <TerminalTab
                label="Limit_Order"
                isActive={orderType === "limit"}
                onClick={() => setOrderType("limit")}
                className="pb-2.5"
              />
            </div>

            <div className="space-y-10">
              {orderType === "limit" && (
                <TerminalInput
                  label="Limit_Price (USDT)"
                  suffix="USDT"
                  placeholder="0.00"
                />
              )}

              <TerminalInput
                label="Order_Size (USDT)"
                suffix="USDT"
                placeholder="0.00"
                action={
                  <span className="text-xs font-bold text-primary cursor-pointer hover:underline active:opacity-80 active:scale-95 transition-all inline-block">
                    MAX_AVAIL
                  </span>
                }
              />

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-80">
                    Leverage
                  </label>
                  <span className="text-sm font-mono font-bold text-primary">
                    {leverage}x
                  </span>
                </div>
                {/* Interactive Slider */}
                <div
                  ref={sliderRef}
                  onMouseDown={startDragging}
                  onTouchStart={startDragging}
                  className="relative flex w-full touch-none select-none items-center py-3 cursor-pointer"
                >
                  <div className="relative h-1.5 w-full grow overflow-hidden rounded-none bg-secondary">
                    <div
                      className={`absolute h-full bg-primary ${!isDragging ? "transition-all duration-300 ease-out" : ""}`}
                      style={{
                        left: 0,
                        width: `${((leverage - 1) / 99) * 100}%`,
                      }}
                    />
                  </div>
                  <div
                    className={`absolute h-4 w-4 rounded-none border-2 border-primary bg-background -translate-x-1/2 ${!isDragging ? "transition-all duration-300 ease-out" : ""}`}
                    style={{ left: `${((leverage - 1) / 99) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  <span>1x</span>
                  <span>25x</span>
                  <span>50x</span>
                  <span>75x</span>
                  <span>100x</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-2">
                <TerminalInput
                  label="Take_Profit"
                  placeholder="0.00"
                  className="h-12"
                />
                <TerminalInput
                  label="Stop_Loss"
                  placeholder="0.00"
                  className="h-12"
                />
              </div>
            </div>
          </div>

          <div className="pt-8 space-y-5 border-t border-white/5 font-mono">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
              <span className="text-muted-foreground">Liquidation_Price</span>
              <span className="text-foreground">58,124.50</span>
            </div>
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
              <span className="text-muted-foreground">Protocol_Fees</span>
              <span className="text-foreground">0.12 USDT</span>
            </div>
          </div>

          <button
            className={`w-full h-18 rounded-none font-bold uppercase tracking-[0.3em] text-xs transition-all border py-6 cursor-pointer active:scale-[0.98] active:brightness-90 ${
              side === "long"
                ? "bg-green-600/10 border-green-600/50 text-green-500 hover:bg-green-600 hover:text-white"
                : "bg-red-600/10 border-red-600/50 text-red-500 hover:bg-red-600 hover:text-white"
            }`}
          >
            Execute_{side === "long" ? "LONG" : "SHORT"}
          </button>
        </div>
      </div>

      {/* Account Summary */}
      <div className="p-8 border-b border-white/5 ">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            <Briefcase size={16} />
            Account_Summary
          </div>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-3 py-1 border border-white/10">
            ID: EX-9442
          </span>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-end border-b border-white/5 pb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-80">
              Total Equity
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-mono font-bold text-foreground">
                25,124.50
              </span>
              <span className="text-xs font-mono text-muted-foreground uppercase opacity-70">
                USDT
              </span>
            </div>
          </div>
          <div className="flex justify-between items-end border-b border-white/5 pb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-80">
              Unrealized PnL
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-mono font-bold text-green-500">
                +333.65
              </span>
              <span className="text-xs font-mono text-muted-foreground uppercase opacity-70">
                USDT
              </span>
            </div>
          </div>
          <div className="flex justify-between items-end border-b border-white/5 pb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-80">
              Realized PnL
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-mono font-bold text-green-500">
                +1,240.12
              </span>
              <span className="text-xs font-mono text-muted-foreground uppercase opacity-70">
                USDT
              </span>
            </div>
          </div>
          <div className="flex justify-between items-end border-b border-white/5 pb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-80">
              Margin Buffer
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-mono font-bold text-foreground">
                22,824.50
              </span>
              <span className="text-xs font-mono text-muted-foreground uppercase opacity-70">
                USDT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
