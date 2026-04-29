import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { WHATSAPP_URL } from "@/data/services";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#services", label: "الخدمات" },
  { href: "#reviews", label: "آراء العملاء" },
  { href: "#contact", label: "تواصل معنا" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-smooth ${
          scrolled || open ? "glass shadow-soft py-2" : "bg-transparent py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between gap-3">
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 min-w-0"
            onClick={() => setOpen(false)}
          >
            <img
              src={logo}
              alt="إعتماد"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover shadow-soft flex-shrink-0"
            />
            <div className="flex flex-col min-w-0 leading-tight">
              <span className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-lg text-gradient-brand truncate">
                  إعتماد
                </span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-[var(--teal)] truncate">
                للتعقيب والخدمات العامة
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-primary hover:text-[var(--teal)] transition-smooth"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold shadow-soft hover:scale-105 transition-smooth"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">واتساب</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl glass text-foreground shadow-soft"
              aria-label="القائمة"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-foreground/30 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[64px] inset-x-3 z-40 lg:hidden glass rounded-2xl shadow-glow p-3"
            >
              <nav className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-smooth text-right"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
