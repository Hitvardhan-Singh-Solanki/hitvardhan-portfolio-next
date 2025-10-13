"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ value, label, className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "group relative overflow-hidden border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg",
          className
        )}
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--card-border)",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--primary)";
          e.currentTarget.style.boxShadow = "0 12px 24px -10px var(--shadow)";
          const valueElement =
            e.currentTarget.querySelector("[data-stat-value]");
          if (valueElement) {
            valueElement.style.color = "var(--primary)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--card-border)";
          e.currentTarget.style.boxShadow =
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
          const valueElement =
            e.currentTarget.querySelector("[data-stat-value]");
          if (valueElement) {
            valueElement.style.color = "var(--foreground)";
          }
        }}
        {...props}
      >
        <CardContent className="p-6 text-center">
          <div
            className="mb-2 text-4xl font-bold transition-all duration-300 group-hover:scale-105"
            data-stat-value
            style={{
              color: "var(--foreground)",
              fontSize: "var(--text-4xl)",
              fontWeight: "var(--font-bold)",
              lineHeight: "1",
            }}
          >
            {value}
          </div>
          <div
            className="text-sm font-medium uppercase tracking-wider"
            style={{
              color: "var(--secondary)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-medium)",
              letterSpacing: "0.05em",
            }}
          >
            {label}
          </div>
        </CardContent>
      </Card>
    );
  }
);

StatsCard.displayName = "StatsCard";

export { StatsCard };
