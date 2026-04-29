import { motion } from "framer-motion";
import { Star, BadgeCheck, Quote } from "lucide-react";
import { reviews } from "@/data/services";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export function Reviews() {
  // Use Embla Carousel with RTL direction, loop capability, and drag-free continuous scroll
  const [emblaRef] = useEmblaCarousel(
    { direction: "rtl", loop: true, dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false, direction: "backward" })]
  );

  const loop = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-soft">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-semibold mb-4">
            شهادات حقيقية
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 leading-relaxed">
            <span className="text-gradient-brand py-2">آراء عملائنا</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ثقة عملائنا هي أساس نجاحنا — اقرأ ماذا يقولون عن خدماتنا
          </p>
        </motion.div>

        {/* User Interactive Carousel */}
        <div className="relative" dir="rtl">
          {/* Side Fades for Aesthetics */}
          <div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
          
          <div 
            className="overflow-hidden cursor-grab active:cursor-grabbing w-full pb-4" 
            ref={emblaRef}
          >
            <div className="flex gap-8 sm:gap-10 md:gap-12 touch-pan-y">
              {loop.map((r, i) => (
                <div key={i} className="flex-none w-[280px] sm:w-[320px] md:w-[380px] ml-4 sm:ml-6 md:ml-8">
                  <ReviewCard {...r} className="h-full" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
            <span className="inline-block w-6 h-1 rounded-full bg-primary/40" />
            <span>اسحب لليمين أو اليسار للتنقل</span>
            <span className="inline-block w-6 h-1 rounded-full bg-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  name,
  rating,
  text,
  verified,
  className = "",
}: {
  name: string;
  rating: number;
  text: string;
  verified: boolean;
  className?: string;
}) {
  return (
    <div
      className={`group relative glass rounded-3xl p-6 shadow-card hover:shadow-glow hover:-translate-y-1 transition-smooth ${className}`}
    >
      <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/15" />

      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-[var(--accent)] text-[var(--accent)]" : "text-muted"
            }`}
          />
        ))}
      </div>

      <p className="text-foreground/90 leading-relaxed mb-6 text-sm sm:text-base">
        "{text}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-border/60">
        <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-foreground text-sm">{name}</span>
            {verified && <BadgeCheck className="w-4 h-4 text-[var(--teal)] fill-[var(--teal)]/20" />}
          </div>
          <span className="text-xs text-muted-foreground">عميل موثّق</span>
        </div>
      </div>
    </div>
  );
}
