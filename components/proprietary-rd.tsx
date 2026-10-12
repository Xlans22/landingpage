import Spotlight from "@/components/spotlight";

export default function ProprietaryRd() {
  return (
    <section id="products" className="relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-800/80 py-16 md:py-24">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <div
              className="inline-flex items-center gap-3 pb-3"
              data-aos="fade-down"
            >
              <span
                className="h-px w-8 bg-linear-to-r from-transparent to-indigo-500/60"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-indigo-400">
                Proprietary Engines
              </span>
              <span
                className="h-px w-8 bg-linear-to-l from-transparent to-indigo-500/60"
                aria-hidden="true"
              />
            </div>
            <h2
              className="font-nacelle text-3xl font-bold tracking-tight text-white md:text-4xl pb-4"
              data-aos="fade-up"
            >
              Safe, Enterprise-Grade Workflow Engines
            </h2>
            <p
              className="text-base md:text-lg text-indigo-200/65 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              Our in-house product studio develops specialized B2B software designed to eliminate administrative overhead while enforcing total transparency and operator control.
            </p>
          </div>

          {/* 2-Column Product Spotlight Showcase */}
          <Spotlight className="group/spotlight grid gap-8 lg:grid-cols-2">
            {/* Product A: Flamingo DocuVerify Engine */}
            <div
              className="group/item relative h-full overflow-hidden rounded-2xl bg-gray-900/60 p-px before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-10 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:blur-2xl before:opacity-0 before:transition-opacity before:duration-500 group-hover/spotlight:before:opacity-100"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="relative z-20 flex h-full flex-col justify-between overflow-hidden rounded-[inherit] bg-gray-950/90 p-6 sm:p-8 backdrop-blur-xs transition-all hover:bg-gray-900/90 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-10 after:h-96 after:w-96 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500/10 after:blur-3xl after:opacity-0 after:transition-opacity after:duration-500 group-hover/spotlight:after:opacity-100">
                <div>
                  <h3 className="font-nacelle text-2xl font-bold text-white">
                    Flamingo DocuVerify Engine™
                  </h3>
                  <p className="mt-1 text-sm font-medium text-indigo-400">
                    Structured Enterprise Document Parsing &amp; Diff Analysis
                  </p>
                  <p className="mt-1 text-xs text-gray-400 italic">
                    High-fidelity ingestion and extraction for complex enterprise documentation.
                  </p>

                  {/* Problem */}
                  <div className="mt-5 rounded-lg bg-gray-900/60 p-4 border border-gray-800/80">
                    <div className="text-xs uppercase text-indigo-400 font-semibold mb-1 flex items-center gap-1.5">
                      <span>•</span> Enterprise Challenge
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Enterprise back-offices process thousands of non-standard contracts, purchase orders, and technical specifications, risking human fatigue and costly manual data-entry errors.
                    </p>
                  </div>

                  {/* Architecture */}
                  <div className="mt-4 space-y-2">
                    <div className="text-xs uppercase text-gray-400 font-semibold">
                      Core Architecture:
                    </div>
                    <ul className="space-y-1.5 text-xs text-indigo-200/65 list-disc list-inside">
                      <li>Dual-phase OCR and multi-modal semantic layout analysis powered by frontier vision-language models.</li>
                      <li>Strict Schema Output Validation: Fields are extracted into strictly typed schemas with source bounding-box citations.</li>
                    </ul>
                  </div>

                  {/* HITL Protocol Gate */}
                  <div className="mt-5 rounded-xl border border-indigo-500/30 bg-gray-900/80 p-4 shadow-inner">
                    <div className="text-xs uppercase tracking-wide text-indigo-300 font-bold mb-1 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                      Human-in-the-Loop Protocol Gate
                    </div>
                    <p className="text-xs text-indigo-200/75 leading-relaxed">
                      Extracted data is routed to an operator verification dashboard. The engine highlights low-confidence anomalies and proposes side-by-side diffs. <strong className="text-white underline decoration-indigo-400/60">No data is committed to the enterprise database without explicit, authenticated operator approval and sign-off.</strong>
                    </p>
                  </div>
                </div>

                {/* Risk Profile */}
                <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                  <span className="text-gray-500">Risk Profile:</span>
                  <span className="text-indigo-300 font-medium">Advisory &amp; Human-Supervised Only</span>
                </div>
              </div>
            </div>

            {/* Product B: Flamingo SynapseSearch */}
            <div
              className="group/item relative h-full overflow-hidden rounded-2xl bg-gray-900/60 p-px before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-10 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:blur-2xl before:opacity-0 before:transition-opacity before:duration-500 group-hover/spotlight:before:opacity-100"
              data-aos="fade-up"
              data-aos-delay={350}
            >
              <div className="relative z-20 flex h-full flex-col justify-between overflow-hidden rounded-[inherit] bg-gray-950/90 p-6 sm:p-8 backdrop-blur-xs transition-all hover:bg-gray-900/90 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-10 after:h-96 after:w-96 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500/10 after:blur-3xl after:opacity-0 after:transition-opacity after:duration-500 group-hover/spotlight:after:opacity-100">
                <div>
                  <h3 className="font-nacelle text-2xl font-bold text-white">
                    Flamingo SynapseSearch™
                  </h3>
                  <p className="mt-1 text-sm font-medium text-indigo-400">
                    Grounded Enterprise Semantic Retrieval &amp; Advisory Copilot
                  </p>
                  <p className="mt-1 text-xs text-gray-400 italic">
                    Context-isolated neural knowledge search for engineering and operations manuals.
                  </p>

                  {/* Problem */}
                  <div className="mt-5 rounded-lg bg-gray-900/60 p-4 border border-gray-800/80">
                    <div className="text-xs uppercase text-indigo-400 font-semibold mb-1 flex items-center gap-1.5">
                      <span>•</span> Enterprise Challenge
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Internal enterprise documentation (SOPs, engineering logs, vendor contracts) is fragmented across disconnected data silos, leading to slow information retrieval and inconsistent protocol execution.
                    </p>
                  </div>

                  {/* Architecture */}
                  <div className="mt-4 space-y-2">
                    <div className="text-xs uppercase text-gray-400 font-semibold">
                      Core Architecture:
                    </div>
                    <ul className="space-y-1.5 text-xs text-indigo-200/65 list-disc list-inside">
                      <li>Hybrid lexical-dense vector indexing with tenant-isolated embeddings.</li>
                      <li>Contextual compression and strict attribution grounding: Every generated answer includes direct hyperlinked citations to source documents.</li>
                    </ul>
                  </div>

                  {/* HITL Protocol Gate */}
                  <div className="mt-5 rounded-xl border border-indigo-500/30 bg-gray-900/80 p-4 shadow-inner">
                    <div className="text-xs uppercase tracking-wide text-indigo-300 font-bold mb-1 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                      Human-in-the-Loop Protocol Gate
                    </div>
                    <p className="text-xs text-indigo-200/75 leading-relaxed">
                      Operates strictly as a read-only advisory tool. The system assists operators in synthesizing internal documentation but contains no write or execution privileges over external systems. <strong className="text-white underline decoration-indigo-400/60">Complex operational decisions require authenticated personnel review.</strong>
                    </p>
                  </div>
                </div>

                {/* Risk Profile */}
                <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                  <span className="text-gray-500">Risk Profile:</span>
                  <span className="text-indigo-300 font-medium">Informational &amp; Advisory Only</span>
                </div>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
