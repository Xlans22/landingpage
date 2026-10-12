import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800 bg-gray-950/90">
      {/* Footer illustration */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 opacity-30"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={FooterIllustration}
          width={1076}
          height={378}
          alt="Footer illustration"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        {/* Brand header */}
        <div className="pb-8 mb-10 border-b border-gray-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Logo />
          <p className="text-xs text-gray-400 font-sans max-w-md sm:text-right">
            Deterministic AI Orchestration &amp; B2B Software Engineering.
          </p>
        </div>

        {/* 4-Column Corporate Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-12">
          {/* Column 1: Solutions / Capabilities */}
          <div className="space-y-3">
            <h4 className="font-nacelle text-sm font-semibold text-white tracking-wide">
              Solutions / Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-sans">
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  High-Throughput Systems
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Foundation Model Evaluation
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Production Telemetry &amp; Testing
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Human-in-the-Loop Orchestration
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Proprietary Engines */}
          <div className="space-y-3">
            <h4 className="font-nacelle text-sm font-semibold text-white tracking-wide">
              Proprietary Engines
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-sans">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Flamingo DocuVerify Engine™
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Flamingo SynapseSearch™
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-white transition-colors">
                  Advisory Sandboxing
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-white transition-colors">
                  Audit Governance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Governance */}
          <div className="space-y-3">
            <h4 className="font-nacelle text-sm font-semibold text-white tracking-wide">
              Company &amp; Governance
            </h4>
            <div className="space-y-2 text-xs text-gray-400 font-sans">
              <div className="text-gray-200 font-medium leading-relaxed">
                FLAMINGO EMERGING TECHNOLOGIES - L.L.C - S.P.C
              </div>
              <div className="font-mono text-gray-300">
                License: 101-2024-200009262
              </div>
              <div className="text-gray-400">
                Mussafah M-11, Abu Dhabi, UAE
              </div>
              <div>
                <a
                  href="mailto:info@flamingo-technology.com"
                  className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
                >
                  Contact: info@flamingo-technology.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Compliance & Security */}
          <div className="space-y-3">
            <h4 className="font-nacelle text-sm font-semibold text-white tracking-wide">
              Compliance &amp; Security
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-sans">
              <li className="text-gray-300">
                Deterministic Validation
              </li>
              <li className="text-gray-300">
                Advisory-Only Execution Gates
              </li>
              <li className="text-gray-300">
                Immutable Audit Logging
              </li>
              <li className="text-gray-300">
                Human-in-the-Loop Protocol
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <div>
            © 2026 FLAMINGO EMERGING TECHNOLOGIES - L.L.C - S.P.C. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="#capabilities" className="hover:text-gray-300 transition-colors">
              Capabilities
            </a>
            <span className="text-gray-700">•</span>
            <a href="#products" className="hover:text-gray-300 transition-colors">
              Proprietary Engines
            </a>
            <span className="text-gray-700">•</span>
            <a href="#governance" className="hover:text-gray-300 transition-colors">
              Safety Governance
            </a>
            <span className="text-gray-700">•</span>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
