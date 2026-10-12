"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Spotlight from "@/components/spotlight";

export default function Cta() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleOpenModal = () => {
      setIsOpen(true);
    };

    window.addEventListener("open-intake-modal", handleOpenModal);

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-intake-modal", handleOpenModal);
    };
  }, [isOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("info@flamingo-technology.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = "info@flamingo-technology.com";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-24">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2 opacity-60"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800/80 py-16 md:py-24">
          <Spotlight className="group/spotlight">
            <div className="group/item relative overflow-hidden rounded-3xl bg-gray-900/60 p-px before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-10 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:blur-2xl before:opacity-0 before:transition-opacity before:duration-500 group-hover/spotlight:before:opacity-100">
              <div className="relative z-20 overflow-hidden rounded-[inherit] bg-linear-to-b from-gray-900/90 to-gray-950/90 p-8 sm:p-12 md:p-16 text-center backdrop-blur-md shadow-2xl transition-all hover:bg-gray-900/90 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-10 after:h-96 after:w-96 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500/10 after:blur-3xl after:opacity-0 after:transition-opacity after:duration-500 group-hover/spotlight:after:opacity-100">
                <div className="absolute inset-0 bg-radial from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                  {/* Native Subtitle Header with Divider Lines */}
                  <div
                    className="inline-flex items-center gap-3 pb-3"
                    data-aos="fade-down"
                  >
                    <span
                      className="h-px w-8 bg-linear-to-r from-transparent to-indigo-500/60"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-indigo-400">
                      Enterprise Partnership Intake
                    </span>
                    <span
                      className="h-px w-8 bg-linear-to-l from-transparent to-indigo-500/60"
                      aria-hidden="true"
                    />
                  </div>

                  <h2
                    className="font-nacelle text-3xl font-bold tracking-tight text-white md:text-5xl pb-6"
                    data-aos="fade-up"
                  >
                    Ready to integrate resilient, compliant AI systems into your enterprise operations?
                  </h2>

                  <p
                    className="text-base md:text-lg text-indigo-200/65 leading-relaxed mb-8 max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay={150}
                  >
                    Connect directly with our senior software architects to audit workflows, establish verification benchmarks, or evaluate custom document parsing and semantic retrieval pipelines.
                  </p>

                  <div
                    className="flex justify-center"
                    data-aos="fade-up"
                    data-aos-delay={250}
                  >
                    <button
                      type="button"
                      onClick={() => setIsOpen(true)}
                      className="btn group w-full sm:w-auto bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-3.5 px-7 text-sm font-semibold text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] rounded-xl transition-all inline-flex items-center justify-center cursor-pointer"
                    >
                      <span>Schedule Technical Intake</span>
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>

      {/* Enterprise Intake Modal Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="intake-modal-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-gray-950/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 p-6 sm:p-8 shadow-2xl shadow-indigo-950/50 z-10 transition-all">
            {/* Ambient background glow */}
            <div
              className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-gray-800/60 focus:outline-hidden cursor-pointer"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">
                  Enterprise Communication
                </span>
              </div>
              <h3
                id="intake-modal-title"
                className="font-nacelle text-2xl font-bold tracking-tight text-white mb-2"
              >
                Direct Engineering Intake
              </h3>
              <p className="text-sm text-indigo-200/70 leading-relaxed">
                Connect directly with our systems architecture team in Abu Dhabi.
              </p>
            </div>

            {/* Direct Email Box */}
            <div className="rounded-xl border border-gray-800 bg-gray-900/70 p-3 sm:p-4 mb-6">
              <div className="text-xs font-medium text-gray-400 mb-1.5">Direct Channel</div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="font-mono text-sm text-white select-all truncate">
                    info@flamingo-technology.com
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 px-3.5 py-2 text-xs font-semibold text-white transition-all border border-gray-700/60 active:scale-95 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              {/* Primary: Open in Gmail */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@flamingo-technology.com&su=Enterprise%20Technical%20Briefing%20Intake"
                target="_blank"
                rel="noopener noreferrer"
                className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-3.5 px-5 text-sm font-semibold text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] rounded-xl transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
                <span>Open in Gmail</span>
                <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                  -&gt;
                </span>
              </a>

              {/* Secondary: Launch Default Mail Client */}
              <a
                href="mailto:info@flamingo-technology.com?subject=Enterprise%20Technical%20Briefing%20Intake&body=Hello%20Flamingo%20Engineering%20Team%2C%0A%0AWe%20would%20like%20to%20schedule%20a%20technical%20briefing%20regarding%20our%20enterprise%20workflows.%0A%0ACompany%3A%0ARequirements%3A"
                className="btn w-full bg-gray-900/90 hover:bg-gray-800/90 py-3 px-5 text-sm font-medium text-gray-200 hover:text-white rounded-xl border border-gray-800 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Launch Default Mail Client</span>
              </a>
            </div>

            {/* Footer entity note */}
            <div className="mt-5 pt-4 border-t border-gray-900 text-center">
              <span className="text-[11px] text-gray-400 font-mono">
                FLAMINGO EMERGING TECHNOLOGIES - L.L.C - S.P.C • Abu Dhabi, UAE
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
