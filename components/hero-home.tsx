"use client";

export default function HeroHome() {
  const handleCtaClick = () => {
    window.dispatchEvent(new CustomEvent("open-intake-modal"));
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-8 text-center md:pb-12">
            {/* Technical Headline */}
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-100),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-100))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl mx-auto"
              data-aos="fade-up"
            >
              Deterministic AI Orchestration and Human-in-the-Loop Workflow Infrastructure
            </h1>

            {/* Sub-Headline */}
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-base md:text-lg text-indigo-200/75 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We design and deploy mission-critical software architectures and human-in-the-loop intelligence systems for enterprise operations. Built on deterministic validation, verifiable auditability, and zero unmonitored execution.
              </p>

              {/* CTAs */}
              <div className="mx-auto flex justify-center">
                <div data-aos="fade-up" data-aos-delay={300} className="w-full sm:w-auto">
                  <a
                    className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-3.5 px-7 text-sm font-semibold text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] rounded-xl transition-all inline-flex items-center justify-center cursor-pointer"
                    href="#contact"
                    onClick={handleCtaClick}
                  >
                    <span>Schedule Technical Briefing</span>
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
