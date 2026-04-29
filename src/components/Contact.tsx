import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock } from "lucide-react";
import { WHATSAPP_URL } from "@/data/services";
import logo from "@/assets/logo.jpg";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] bg-gradient-brand text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-glow"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[var(--emerald)]/30 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                جاهزون لخدمتك في أي وقت
              </h2>
              <p className="text-white/85 text-lg mb-8">
                تواصل معنا مباشرة عبر واتساب وسنقوم بإنجاز معاملتك بأسرع وقت ممكن
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white text-primary px-8 py-4 text-lg font-bold shadow-glow hover:scale-105 transition-smooth"
              >
                <MessageCircle className="w-6 h-6" />
                تواصل عبر واتساب
              </a>
            </div>

            <div className="space-y-4">
              <ContactItem icon={Phone} label="واتساب" value="‎+966 59 879 5336" />
              <ContactItem icon={Clock} label="ساعات العمل" value="طوال الوقت 24/7" />
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 pt-8 border-t border-border/60 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground text-center">
          <div className="flex items-center justify-center gap-3">
            <img src={logo} alt="إعتماد" className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-cover shadow-soft" />
            <span className="font-extrabold text-base sm:text-lg text-gradient-brand">
              إعتماد للتعقيب والخدمات العامة
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <span>© {new Date().getFullYear()} جميع الحقوق محفوظة.</span>
            <span className="hidden sm:inline opacity-50">•</span>
            <span>
              تصميم وتطوير{" "}
              <a
                href="https://wa.me/967780930635"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:text-[var(--whatsapp)] transition-smooth"
              >
                شركة Suraimi
              </a>
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="text-xs text-white/70">{label}</div>
        <div className="font-bold text-white" dir="ltr">{value}</div>
      </div>
    </div>
  );
}
