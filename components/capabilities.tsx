import Spotlight from "@/components/spotlight";

export default function Capabilities() {
  const disciplines = [
    {
      title: "Computer Systems & Software Designing",
      scope:
        "High-throughput backend engineering, distributed event pipelines, and zero-trust API architecture.",
      implementation:
        "We architect scalable microservices, resilient database topologies, and secure middleware that bridge proprietary enterprise ERP/CRM systems with modern inference gateways. Every system is built around strict data isolation, end-to-end encryption, and role-based access control (RBAC).",
    },
    {
      title: "Innovation & Artificial Intelligence Research & Consultancies",
      scope:
        "Foundation model evaluation, custom retrieval architectures, prompt verification harnesses, and alignment governance.",
      implementation:
        "We audit enterprise workflows to isolate high-friction bottlenecks and evaluate where models provide tangible, quantifiable ROI. We design customized Retrieval-Augmented Generation (RAG) benchmarks, context caching strategies, and safety filter topologies that ensure models operate strictly within defined organizational boundaries.",
    },
    {
      title: "Technological Projects Management & AI Developing Services",
      scope:
        "Full-lifecycle software delivery, deterministic integration testing, and production runtime telemetry.",
      implementation:
        "From technical requirements specification to CI/CD automated test suites and production deployment, we govern end-to-end delivery of mission-critical AI-augmented applications. Our engineers implement comprehensive distributed telemetry, automated schema regression suites, and real-time inference monitoring to guarantee deterministic reliability.",
    },
  ];

  return (
    <section id="capabilities" className="relative scroll-mt-24">
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
                Engineering Disciplines
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
              Core Engineering Disciplines
            </h2>
            <p
              className="text-base md:text-lg text-indigo-200/65 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              Directly aligned with licensed technical activities in computer systems design, AI research, and technological project management.
            </p>
          </div>

          {/* 3-Card Spotlight Grid */}
          <Spotlight className="group/spotlight grid gap-6 lg:grid-cols-3">
            {disciplines.map((item, index) => (
              <div
                key={item.title}
                className="group/item relative h-full overflow-hidden rounded-2xl bg-gray-900/60 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:blur-2xl before:opacity-0 before:transition-opacity before:duration-500 group-hover/spotlight:before:opacity-100"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="relative z-20 flex h-full flex-col justify-between overflow-hidden rounded-[inherit] bg-gray-950/90 p-6 sm:p-8 backdrop-blur-xs transition-all hover:bg-gray-900/90 after:pointer-events-none after:absolute after:-left-40 after:-top-40 after:z-10 after:h-80 after:w-80 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500/10 after:blur-3xl after:opacity-0 after:transition-opacity after:duration-500 group-hover/spotlight:after:opacity-100">
                  <div>
                    <h3 className="font-nacelle text-xl font-bold text-gray-100 leading-snug">
                      {item.title}
                    </h3>

                    {/* Scope */}
                    <div className="mt-5 rounded-lg bg-gray-900/60 p-3.5 border border-gray-800/80">
                      <div className="text-[11px] font-medium uppercase tracking-wider text-indigo-400 mb-1">
                        Engineering Scope
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {item.scope}
                      </p>
                    </div>

                    {/* Implementation */}
                    <div className="mt-4">
                      <div className="text-[11px] font-medium uppercase tracking-wider text-gray-400 mb-1.5">
                        Production Implementation
                      </div>
                      <p className="text-sm text-indigo-200/65 leading-relaxed">
                        {item.implementation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
