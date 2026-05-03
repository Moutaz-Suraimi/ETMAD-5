import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  IdCard,
  Syringe,
  ShieldCheck,
  FileCheck2,
  Car,
  Sparkles,
} from "lucide-react";
import { buildWhatsAppLink } from "@/data/services";

const popular = [
  { title: "سكليف أعذار طبية", icon: Stethoscope },
  { title: "فحوصات طبية معتمدة", icon: HeartPulse },
  { title: "إقامة + جوازات + هنقر ستيشن + رخصة القيادة", icon: IdCard },
  { title: "ختم دفتر تطعيمات الأطفال", icon: Syringe },
  { title: "لقاحات كوفيد-19 وغيرها", icon: ShieldCheck },
  { title: "شهادات صحية بلدي", icon: FileCheck2 },
  { title: "تجديد استمارة بدون فحص", icon: Car },
];

export function PopularServices() {
  return (
    <div id="popular-services" className="mb-16 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-soft text-primary text-sm font-semibold border border-border mb-4">
          <Sparkles className="w-4 h-4" />
          الأكثر طلباً
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient-brand leading-tight">
          خدماتنا الأكثر طلباً
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {popular.map((item, i) => {
          const Icon = item.icon;
          const href = buildWhatsAppLink({ mainTitle: item.title });
          return (
            <motion.a
              key={item.title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="group relative flex items-center gap-3 p-4 rounded-2xl bg-card border border-border shadow-soft hover:shadow-glow hover:border-primary/40 transition-smooth text-right"
            >
              <div className="flex-shrink-0">
                <div 
                  className="animate-pulse-slow origin-center"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <span className="text-sm sm:text-base font-semibold text-foreground flex-1 leading-snug">
                {item.title}
              </span>
              <span className="w-2 h-2 rounded-full bg-[var(--whatsapp)] flex-shrink-0 animate-pulse" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
