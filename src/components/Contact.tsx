import { motion } from "framer-motion";
import { Phone, Clock } from "lucide-react";
import { WHATSAPP_URL } from "@/data/services";
import logo from "@/assets/logo.jpg";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

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
                <WhatsappIcon className="w-6 h-6" />
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
