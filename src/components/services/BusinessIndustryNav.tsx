import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface BusinessIndustryNavProps {
  currentId?: string;
}

export default function BusinessIndustryNav({ currentId }: BusinessIndustryNavProps) {
  return (
    <nav
      aria-label="사업자 세무 업종별 메뉴"
      className="bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex flex-wrap items-center gap-2">
        <Link
          href="/services/business-tax"
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
            !currentId
              ? "bg-blue-900 text-white shadow-xs"
              : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-900"
          }`}
        >
          사업자 세무 전체
        </Link>
        {siteConfig.businessTaxIndustries.map((industry) => {
          const isCurrent = currentId === industry.id;
          return (
            <Link
              key={industry.id}
              href={industry.href}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                isCurrent
                  ? "bg-blue-900 text-white shadow-xs"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-900"
              }`}
            >
              {industry.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
