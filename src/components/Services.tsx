import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { services, type MainService } from "@/data/services";
import { ServiceOverlay } from "./ServiceOverlay";
import { PopularServices } from "@/components/PopularServices";

export function Services() {
  const [active, setActive] = useState<MainService | null>(null);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const s = services.find((x) => x.id === customEvent.detail);
      if (s) {
        setActive(s);
        setTimeout(() => {
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    };
    window.addEventListener("openService", handleOpen);
    return () => window.removeEventListener("openService", handleOpen);
  }, []);

  return (
    <section id="services" className="py-20 sm:py-28 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <PopularServices />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-soft text-primary text-sm font-semibold border border-border mb-4">
            خدماتنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gradient-brand leading-tight">
            خدمات شاملة بين يديك
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اختر الفئة المناسبة لمعاملتك واترك الباقي علينا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => {
            return (
              <motion.button
                key={service.id}
                layoutId={`service-${service.id}`}
                onClick={() => setActive(service)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative text-right rounded-3xl bg-card border border-border shadow-soft hover:shadow-glow transition-smooth overflow-hidden flex flex-col"
              >
                {/* image header */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-gradient-soft flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/0 dark:from-white/5" />
                  <div 
                    className="relative animate-pulse-slow origin-center drop-shadow-md"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="max-h-28 sm:max-h-32 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* content */}
                <div className="relative p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/60">
                    <span className="text-xs text-muted-foreground">
                      {service.subServices.length} خدمة فرعية
                    </span>
                    <span className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      عرض التفاصيل
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <ServiceOverlay service={active} onClose={() => setActive(null)} />
    </section>
  );
}
