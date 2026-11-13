"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  KakaoIcon,
  NaverIcon,
  PhoneIcon,
  MapPinIcon,
  ShieldCheckIcon,
  AwardIcon,
  BookOpenIcon,
  BuildingIcon,
  CalculatorIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  ScaleIcon,
  UsersIcon,
  ClockIcon
} from "@/components/ui/icons";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================
          1. HERO SECTION (메인 배너)
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#2b3545] text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* 세무·회계 오피스 데스크 배경 이미지 및 슬레이트 네이비 오버레이 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=85')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#232d3d]/90 via-[#2b3545]/82 to-[#2b3545]/75 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-6">
            {/* 메인 타이틀 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] text-white">
              세무의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">깊이가 다르면,</span><br />
              절세의 결과가 달라집니다.
            </h1>

            {/* 서브 타이틀 */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
              단순한 숫자 정리가 아닌, 대표 세무사가 직접 설계하는 1:1 정밀 절세 플랜.
              부동산 세무부터 상속·증여, 법인 컨설팅까지 사업의 든든한 내일을 함께 만듭니다.
            </p>

            {/* CTA 버튼 그룹 (카카오톡 비즈니스 채널 최우선 강조) */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* 카카오톡 1:1 상담 바로가기 */}
              <a
                href={siteConfig.kakaoChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-base shadow-xl hover:shadow-yellow-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <KakaoIcon className="w-5 h-5 text-[#191919]" />
                <span>카카오톡 1:1 실시간 상담</span>
                <span className="text-xs bg-black/10 px-2 py-0.5 rounded font-semibold ml-1">
                  빠른 답변
                </span>
              </a>

              {/* 상담 신청 (네이버 폼 바로가기) */}
              <a
                href={siteConfig.naverFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-lg hover:shadow-blue-600/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>상담 신청</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              {/* 전화 문의 */}
              <a
                href={`tel:${siteConfig.tel}`}
                className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 font-medium text-sm transition"
              >
                <PhoneIcon className="w-4 h-4 text-blue-400" />
                <span>{siteConfig.tel}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. CORE SERVICES GRID (3대 핵심 전문 세무 서비스)
      ========================================================= */}
      <section className="py-24 bg-slate-50" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-3">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                태윤 맞춤 세무 서비스
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                사업과 자산에 꼭 필요한 <br className="hidden sm:inline" />
                <span className="text-blue-900">3대 핵심 전문 세무 서비스</span>
              </h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              사업자 세무 관리부터 부동산 특화 세무, 상속·증여·양도까지 각 분야별 체계적인 시스템으로 세무 리스크를 방어합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((srv, idx) => (
              <div
                key={srv.id}
                className="rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between bg-white border border-slate-200/90 shadow-xs hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 font-black text-sm flex items-center justify-center border border-blue-100">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-lg text-slate-900 tracking-tight">
                      {srv.title}
                    </h3>
                  </div>

                  <p className="text-blue-900 font-semibold text-sm">
                    "{srv.summary}"
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={srv.href}
                    className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1 transition"
                  >
                    <span>상세 서비스 안내</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={siteConfig.kakaoChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#191919] bg-[#FEE500] hover:bg-[#FADA0A] px-2.5 py-1 rounded-md transition"
                  >
                    카톡 문의
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. WHY TAEYUN (차별화된 3대 강점)
      ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                태윤을 선택하는 이유
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                왜 수많은 사업자와 <br />
                자산가가 <span className="text-blue-900">태윤세무회계</span>를 선택할까요?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                세무는 단순히 과거의 영수증을 모아 세금을 신고하는 일이 아닙니다.
                사업의 리스크를 사전에 예방하고, 합법적인 테두리 안에서 기업의 이익을 극대화하는 종합 재무 전략입니다.
              </p>

              <div className="pt-2">
                <Link
                  href="/accountant"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition"
                >
                  <span>대표 회계사 소개 더보기</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {/* Feature 1 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0">
                  <AwardIcon className="w-6 h-6 text-amber-300" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-base text-slate-900">
                    직원에게만 미루지 않는 '대표 세무사 전담 시스템'
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    업무 채팅방을 개설하여 대표님과 담당자 및 대표 세무사가 함께 의사소통을 하고 업무 진행 상황을 공유하며 데이터가 자동 백업되므로 대형 세무법인이나 일반 사무소에서 흔히 겪는 직원 잦은 퇴사나 소통 단절 문제를 방지합니다.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0">
                  <ShieldCheckIcon className="w-6 h-6 text-emerald-300" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-base text-slate-900">
                    세무조사 위험을 사전에 차단하는 '선제적 모니터링'
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    세무 문제는 사후 대처보다 사전 방어가 중요합니다. 정기적인 매출·매입 비율 분석과 업종별 소득률 검토로 과세관청의 소명 요구를 미연에 방지합니다.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0">
                  <CalculatorIcon className="w-6 h-6 text-cyan-300" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-base text-slate-900">
                    20년 실무 경력의 '깊이 있는 절세 노하우와 전문성'
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    20년간 축적된 폭넓은 세무·회계 실무 경험과 세법에 대한 깊이 있는 이해를 바탕으로, 복잡한 세무 현안에도 빈틈없고 명쾌한 맞춤형 절세 해법을 제시합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. AUTHOR & CREDIBILITY SHOWCASE (베스트셀러 저자 & 공신력)
      ========================================================= */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide">
              <BookOpenIcon className="w-3.5 h-3.5" />
              <span>검증된 전문성과 연구 실적</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              세법 전문가들도 찾아 읽는 저서, <br />
              <span className="text-blue-900">대표 세무사가 직접 집필했습니다.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              오동욱 대표는 오랜 실무와 정책 연구를 바탕으로 복잡한 세법을 체계화한 저서를 출간하였으며, 국책연구기관 공동연구에 참여한 검증된 세무 전문가입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Book 1 */}
            <div className="rounded-2xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-blue-900 text-white text-xs font-bold">
                    부동산 세무 필독서
                  </span>
                  <BookOpenIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="h-44 rounded-xl bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 p-5 text-white flex flex-col justify-between shadow-md">
                  <div className="space-y-1">
                    <span className="text-[11px] text-blue-300 font-mono">BOOK 01</span>
                    <h3 className="font-bold text-lg leading-snug">
                      부동산매매사업자 세금 완전정복
                    </h3>
                  </div>
                  <div className="text-xs text-slate-400 flex justify-between items-center pt-4 border-t border-slate-800">
                    <span>저자 오동욱</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  부동산 매매사업자의 비교과세 검토, 부가가치세 및 종합소득세 과세 체계를 현장 실무에 맞춰 완벽히 정리한 국내 대표 전문 지침서입니다.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-700 group-hover:text-blue-900">
                <span>교보문고 및 주요 서점 출간 도서</span>
              </div>
            </div>

            {/* Book 2 */}
            <div className="rounded-2xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-800 text-white text-xs font-bold">
                    실전 절세 가이드
                  </span>
                  <BookOpenIcon className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="h-44 rounded-xl bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-900 p-5 text-white flex flex-col justify-between shadow-md">
                  <div className="space-y-1">
                    <span className="text-[11px] text-emerald-300 font-mono">BOOK 02</span>
                    <h3 className="font-bold text-lg leading-snug">
                      이렇게 쉬운데 왜 부동산절세를 하지 않았을까
                    </h3>
                  </div>
                  <div className="text-xs text-slate-400 flex justify-between items-center pt-4 border-t border-slate-800">
                    <span>저자 오동욱</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  양도소득세 1주택 비과세부터 증여세 합산 배제, 상속세 방어까지 누구나 쉽게 이해하고 적용할 수 있는 부동산 절세의 명쾌한 해법을 담았습니다.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-700 group-hover:text-emerald-900">
                <span>일반인 및 부동산 투자자 필독서</span>
              </div>
            </div>

            {/* Research & Policy */}
            <div className="rounded-2xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-amber-600 text-white text-xs font-bold">
                    국책연구기관 공동연구
                  </span>
                  <AwardIcon className="w-5 h-5 text-amber-600" />
                </div>
                <div className="h-44 rounded-xl bg-gradient-to-br from-amber-950 via-slate-900 to-slate-900 p-5 text-white flex flex-col justify-between shadow-md">
                  <div className="space-y-1">
                    <span className="text-[11px] text-amber-300 font-mono">RESEARCH</span>
                    <h3 className="font-bold text-base leading-snug">
                      국토연구원 공동연구 참여
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2">
                      «부동산 시장 안정을 위한 정책과제와 대응 방안»
                    </p>
                  </div>
                  <div className="text-xs text-slate-400 flex justify-between items-center pt-4 border-t border-slate-800">
                    <span>국토연구원 (KRIHS)</span>
                    <span>공동 집필 연구원</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  대한민국 국토 및 부동산 정책을 선도하는 국책연구기관 국토연구원의 국가적 세제 정책 연구에 직접 참여하여 학술적·정책적 깊이를 인정받았습니다.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-amber-700 group-hover:text-amber-900">
                <span>정책적 혜안과 실무의 결합</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. BLOG SHOWCASE (오회계사의 지식창고 연계)
      ========================================================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/60" id="blog">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                <NaverIcon className="w-3.5 h-3.5 text-emerald-500" />
                <span>네이버 공식 블로그</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                네이버 공식 블로그 <span className="text-emerald-600">《오회계사의 지식창고》</span>
              </h2>
              <p className="text-slate-600 text-sm">
                오동욱 회계사가 블로그를 통해 직접 기고하는 최신 세법 개정 분석과 부동산 절세 노하우입니다.
              </p>
            </div>

            <a
              href={siteConfig.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition shadow-sm"
            >
              <NaverIcon className="w-3.5 h-3.5" />
              <span>블로그 전체 칼럼 보기</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column Card 1 */}
            <a
              href={siteConfig.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-6 bg-white border border-slate-200/90 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                  부동산 세무
                </span>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition">
                  부동산 매매사업자, 종합소득세 vs 비교과세 어떻게 적용되나?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  주택 및 토지 매매사업을 영위할 때 종합소득세 기본세율과 양도소득세 중과세율 중 높은 세액을 납부하는 비교과세 제도의 실무 핵심 쟁점을 분석합니다.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>오회계사의 지식창고</span>
                <span className="group-hover:translate-x-1 transition text-emerald-600 font-semibold flex items-center gap-1">
                  글 읽기 <ChevronRightIcon className="w-3 h-3" />
                </span>
              </div>
            </a>

            {/* Column Card 2 */}
            <a
              href={siteConfig.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-6 bg-white border border-slate-200/90 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  상속 · 증여
                </span>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition">
                  10년 주기 증여세 공제를 활용한 가족 자산 이전 전략
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  배우자 6억 원, 직계존비속 5천만 원의 증여재산공제를 10년 단위로 전략적으로 활용하여 상속세 과세표준을 획기적으로 낮추는 실무 플랜을 공개합니다.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>오회계사의 지식창고</span>
                <span className="group-hover:translate-x-1 transition text-blue-600 font-semibold flex items-center gap-1">
                  글 읽기 <ChevronRightIcon className="w-3 h-3" />
                </span>
              </div>
            </a>

            {/* Column Card 3 */}
            <a
              href={siteConfig.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-6 bg-white border border-slate-200/90 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
                  법인 컨설팅
                </span>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-amber-700 transition">
                  개인사업자 법인전환, 언제 그리고 어떤 방식으로 해야 유리할까?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  성실신고확인대상 기준과 높은 종합소득세율을 피하고, 영업권 평가 및 세감면 포괄양수도를 통해 취득세를 절감하는 법인전환 실전 가이드입니다.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>오회계사의 지식창고</span>
                <span className="group-hover:translate-x-1 transition text-amber-600 font-semibold flex items-center gap-1">
                  글 읽기 <ChevronRightIcon className="w-3 h-3" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. QUICK CONSULTATION & LOCATION SECTION
      ========================================================= */}
      <section className="py-24 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* 좌측: 상담 신청 안내 (네이버 폼 & 카카오톡 연결) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-blue-700 font-bold text-xs uppercase tracking-wider">
                  CONSULTATION
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  상담 신청
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  세무기장 및 세무신고 문의부터 부동산 임대업·매매업, 상속·증여·양도 상담까지 온라인 신청서를 남겨주시면 확인 후 신속하게 연락드리겠습니다.
                </p>
              </div>

              {/* 네이버 폼 상담 신청 메인 박스 */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <NaverIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>네이버 폼 간편 접수</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    온라인 상담 신청서 작성하기
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    아래 버튼을 눌러 네이버 폼에 성함, 연락처, 상담 희망 분야 및 문의 내용을 남겨주시면 접수 내역이 즉시 전달됩니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-medium">사업자 기장 · 신고 문의</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-medium">부동산 임대업 · 매매업</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-medium">상속 · 증여 · 양도 상담</span>
                  </div>
                </div>

                <a
                  href={siteConfig.naverFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-lg transition flex items-center justify-center gap-2"
                >
                  <span>상담 신청서 작성하기 (네이버 폼)</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </div>

              {/* 카카오톡 비즈니스 채널 바로 연결 안내 박스 */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FEE500] text-[#191919] flex items-center justify-center shrink-0 shadow-xs">
                    <KakaoIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      카카오톡으로 문의하고 싶으신가요?
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600">
                      카카오톡 채널로 간편하게 문의를 남기실 수 있습니다.
                    </p>
                  </div>
                </div>
                <a
                  href={siteConfig.kakaoChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2.5 rounded-lg bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-xs shadow-xs transition"
                >
                  카톡으로 문의
                </a>
              </div>
            </div>

            {/* 우측: 오시는 길 & 사무실 안내 */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-2xl bg-slate-900 text-white space-y-6 shadow-xl">
                <div className="space-y-2">
                  <span className="text-blue-400 font-bold text-xs uppercase tracking-wider">
                    오시는 길 및 연락처
                  </span>
                  <h3 className="text-xl font-bold tracking-tight">
                    태윤세무회계 오시는 길
                  </h3>
                  <p className="text-xs text-slate-300">
                    새롭게 이전한 사무실에서 더욱 쾌적하고 편리한 세무 상담을 제공합니다.
                  </p>
                </div>

                {/* 주소 및 정보 카드 */}
                <div className="space-y-3.5 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {siteConfig.address}
                      </div>
                      <div className="text-slate-400 mt-0.5">
                        {siteConfig.locationDetail}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">
                        대표전화: {siteConfig.tel}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-white">
                        업무 시간 안내
                      </div>
                      <div className="text-slate-400 mt-0.5">
                        {siteConfig.businessHours}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 지도 프리뷰 카드 */}
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">교통편 안내</span>
                    <span className="text-blue-300">거제역 도보 5분</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                    <li><strong className="text-white">지하철:</strong> 3호선 거제역 / 동해선 거제해맞이역 인근</li>
                    <li><strong className="text-white">위치:</strong> 부산지방법원 및 검찰청 방향 월드컵대로변</li>
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/about/location"
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition"
                    >
                      <span>상세 위치 및 지도 보기</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
