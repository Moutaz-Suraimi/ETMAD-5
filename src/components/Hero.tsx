import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import logo from "@/assets/logo.jpg";
import { services } from "@/data/services";
import { ArrowDown, ShieldCheck, Zap, Award } from "lucide-react";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 bg-gradient-soft bg-gradient-hero overflow-x-hidden"
    >
      {/* animated grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* decorative blobs (static to prevent mobile lag) */}
      <div className="absolute top-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-[var(--teal)]/20 blur-3xl will-change-transform" />
      <div className="absolute bottom-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-[var(--emerald)]/20 blur-3xl will-change-transform" />

      <div className="relative container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content Side (Right on Desktop) */}
          <div className="text-center lg:text-right order-2 lg:order-1 flex flex-col items-center lg:items-start">
            {/* trust badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm font-semibold text-foreground shadow-soft"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--whatsapp)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--whatsapp)]" />
              </span>
              متاحون الآن — رد فوري عبر واتساب
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.15]"
            >
              <span className="text-gradient-brand">إعتماد</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-4 font-bold text-foreground">
                للتعقيب والخدمات العامة
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              نتولى معاملاتك الحكومية بسرعة واحترافية وبدقة متناهية — قوى، التجارة، مدد، بلدي، والجوازات.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex items-center gap-4 mb-12 w-full sm:w-auto"
            >
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand text-white px-8 py-4 text-lg font-bold shadow-glow hover:scale-105 transition-smooth"
              >
                استعرض الخدمات
                <ArrowDown className="w-5 h-5" />
              </a>
            </motion.div>

            {/* mini stats / trust */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg"
            >
              {[
                { icon: Zap, label: "إنجاز سريع", value: "خلال ساعات" },
                { icon: ShieldCheck, label: "موثوق", value: "100%" },
                { icon: Award, label: "خبرة", value: "+10 سنوات" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-3 sm:p-4 shadow-soft text-center hover:-translate-y-1 transition-transform cursor-default"
                >
                  <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-1.5" />
                  <div className="text-sm sm:text-base font-bold text-foreground">{s.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Graphic Side (Left on Desktop) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative flex justify-center w-full"
            >
              {/* Active Mobile Text */}
              <div className="absolute -top-16 inset-x-0 flex justify-center lg:hidden z-[60] pointer-events-none">
                <AnimatePresence mode="wait">
                  {activeTooltip && (
                    <motion.div
                      key={activeTooltip}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="glass px-5 py-2.5 rounded-full shadow-glow text-sm font-extrabold text-center whitespace-nowrap border border-primary/20 pointer-events-auto"
                    >
                      <span className="text-gradient-brand py-1 block">
                        {services.find(s => s.id === activeTooltip)?.title}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] flex items-center justify-center group hero-orbit-wrapper group-hover-pause mt-4 lg:mt-0">
                {/* rotating ring */}
                <div
                  className={`absolute inset-0 rounded-full border-2 border-dashed border-primary/30 ${reduceMotion ? '' : 'animate-orbit'}`}
                />
                <div
                  className={`absolute inset-6 rounded-full border-2 border-[var(--teal)]/20 ${reduceMotion ? '' : 'animate-counter-orbit'}`}
                />

                {/* orbiting service icons */}
                <div
                  className={`absolute inset-0 z-20 ${reduceMotion ? '' : 'animate-orbit'}`}
                >
                  {services.slice(0, 5).map((s, i) => {
                    const angle = (i / 5) * Math.PI * 2;
                    const r = 50; // % from center
                    const x = (50 + Math.cos(angle) * r).toFixed(3);
                    const y = (50 + Math.sin(angle) * r).toFixed(3);
                    const isTopHalf = Number(y) < 50;
                    return (
                      <div
                        key={s.id}
                        style={{ left: `${x}%`, top: `${y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group/item z-40 hover:z-50"
                      >
                        <div className={`${reduceMotion ? '' : 'animate-counter-orbit'}`}>
                          <div
                            className={`origin-center ${reduceMotion ? '' : 'animate-pulse-slow'}`}
                            style={{ animationDelay: `${i * 0.6}s` }}
                          >
                            <div 
                              className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-white shadow-glow hover:shadow-[0_0_25px_var(--color-primary)] ring-2 ring-primary/20 flex items-center justify-center p-2 cursor-pointer transition-all duration-300 hover:scale-[1.15] active:scale-95"
                              onClick={() => setActiveTooltip(activeTooltip === s.id ? null : s.id)}
                            >
                              <img
                                src={s.image}
                                alt={s.title}
                                loading="lazy"
                                className="w-full h-full object-contain pointer-events-none"
                              />

                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* center logo */}
                <div className="relative z-10 hover:scale-105 transition-transform duration-500 cursor-default">
                  <div className="absolute inset-0 bg-gradient-brand rounded-3xl blur-2xl opacity-50 pulse-anim" />
                  <img
                    src={logo}
                    alt="إعتماد للتعقيب والخدمات العامة"
                    className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-3xl object-cover shadow-glow ring-4 ring-white/60"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
