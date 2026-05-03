import { useEffect, useState, useMemo, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle, Search, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { services, buildWhatsAppLink, DEFAULT_WHATSAPP_LINK, EMAIL_URL } from "@/data/services";
import { WhatsAppConfirm, type ConfirmPayload } from "@/components/WhatsAppConfirm";
import { useTone, getSkipConfirm, incrementServiceStat } from "@/hooks/use-whatsapp-prefs";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#services", label: "الخدمات" },
  { href: "#reviews", label: "آراء العملاء" },
  { href: "#contact", label: "تواصل معنا" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const [tone, setTone] = useTone();
  const [pending, setPending] = useState<ConfirmPayload | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const matched: any[] = [];

    if (
      "الخدمات الأكثر طلبا".includes(q) ||
      "الاكثر طلبا".includes(q) ||
      "الأكثر طلبا".includes(q) ||
      "اكثر طلب".includes(q) ||
      "الأكثر طلب".includes(q)
    ) {
      matched.push({
        id: "popular-services-section",
        type: "section",
        title: "الخدمات الأكثر طلباً",
        mainTitle: "قسم الخدمات الشائعة",
        serviceId: "popular-services",
        link: "#popular-services",
      });
    }

    services.forEach((ms) => {
      if (ms.title.toLowerCase().includes(q) || ms.description.toLowerCase().includes(q)) {
        matched.push({
          id: ms.id,
          type: "main",
          title: ms.title,
          serviceId: ms.id,
        });
      }
      ms.subServices.forEach((sub, i) => {
        if (sub.title.toLowerCase().includes(q) || sub.description.toLowerCase().includes(q)) {
          matched.push({
            id: `${ms.id}-sub-${i}`,
            type: "sub",
            title: sub.title,
            mainTitle: ms.title,
            subDescription: sub.description,
            serviceId: ms.id,
            link: buildWhatsAppLink({ mainTitle: ms.title, subTitle: sub.title, subDescription: sub.description, tone }),
          });
        }
      });
    });
    return matched.slice(0, 6);
  }, [query, tone]);

  const handleResultClick = (e: React.MouseEvent, res: any) => {
    e.preventDefault();
    setShowResults(false);
    setOpen(false);
    setQuery("");

    if (res.type === "main") {
      window.dispatchEvent(new CustomEvent("openService", { detail: res.serviceId }));
    } else if (res.type === "section") {
      window.location.hash = res.link;
    } else {
      const payload: ConfirmPayload = {
        mainTitle: res.mainTitle,
        subTitle: res.title,
        subDescription: res.subDescription,
        serviceId: res.serviceId,
      };
      if (getSkipConfirm()) {
        incrementServiceStat(payload.serviceId);
        window.open(res.link, "_blank");
      } else {
        setPending(payload);
      }
    }
  };

  const ResultsDropdown = () => {
    if (!showResults || !query.trim()) return null;

    return (
      <div className="absolute top-full mt-2 w-full lg:w-[150%] right-0 bg-white rounded-xl shadow-glow border border-border/50 overflow-hidden z-50">
        {searchResults.length > 0 ? (
          <div className="max-h-80 overflow-y-auto py-2">
            {searchResults.map((res) => (
              <a
                key={res.id}
                href={res.type === "sub" ? res.link : (res.type === "section" ? res.link : "#services")}
                target={res.type === "sub" ? "_blank" : undefined}
                rel="noopener noreferrer"
                onMouseDown={(e) => handleResultClick(e, res)}
                onClick={(e) => e.preventDefault()}
                className="block px-4 py-3 hover:bg-primary/5 transition-smooth border-b border-border/40 last:border-0"
              >
                <div className="text-sm font-semibold text-foreground leading-tight">{res.title}</div>
                {res.mainTitle && (
                  <div className="text-xs text-[var(--teal)] mt-1.5 font-medium">❖ {res.mainTitle}</div>
                )}
              </a>
            ))}
          </div>
        ) : (
          <div className="px-4 py-6 text-center text-sm text-muted-foreground">
            لا توجد نتائج لـ "{query}"
          </div>
        )}
      </div>
    );
  };

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

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:flex relative group items-center" ref={searchRef}>
              <input 
                type="text" 
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                placeholder="ابحث عن خدمة..." 
                className="pl-4 pr-10 py-2 rounded-full border border-border/50 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)] transition-all w-48 focus:w-64 text-sm shadow-soft placeholder:text-muted-foreground/70" 
              />
              <Search className="absolute right-3 w-4 h-4 text-muted-foreground pointer-events-none" />
              <ResultsDropdown />
            </div>

            <a
              href={EMAIL_URL}
              title="تواصل عبر البريد الإلكتروني"
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-800 hover:text-white hover:bg-slate-800 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold shadow-soft hover:scale-105 transition-smooth"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">إيميل</span>
            </a>

            <a
              href={DEFAULT_WHATSAPP_LINK}
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
                <div className="relative mb-3 px-2">
                  <input 
                    type="text" 
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setShowResults(true);
                    }}
                    onFocus={() => setShowResults(true)}
                    placeholder="ابحث عن خدمة..." 
                    className="w-full pl-4 pr-10 py-3 rounded-xl border border-border/50 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)] transition-all text-sm shadow-soft placeholder:text-muted-foreground/70" 
                  />
                  <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <ResultsDropdown />
                </div>
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

      <WhatsAppConfirm
        payload={pending}
        tone={tone}
        onTone={setTone}
        onConfirm={(p) => {
          incrementServiceStat(p.serviceId);
          setPending(null);
        }}
        onClose={() => setPending(null)}
      />
    </>
  );
}
