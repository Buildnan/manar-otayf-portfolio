import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpLeft, Image, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, type PortfolioProject } from "@/lib/portfolio";

const navigation = [
  { id: "home", title: "الرئيسية" },
  { id: "about", title: "نبذة عني" },
  { id: "experience", title: "الخبرات" },
  { id: "work", title: "الأعمال" },
  { id: "contact", title: "تواصل" },
];

export function PortfolioNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -55% 0px" });
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="portfolio-nav">
      <div className="nav-inner page-width">
        <Button asChild variant="editorial" className="brand-link"><a href="#home" aria-label="منار عطيف — الرئيسية">منار<span className="brand-dot">.</span></a></Button>
        <nav aria-label="التنقل الرئيسي" className="desktop-nav">
          {navigation.map((item) => <Button key={item.id} asChild variant="editorial" className={`nav-link ${active === item.id ? "is-active" : ""}`}><a href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}>{item.title}</a></Button>)}
        </nav>
        <span className="nav-year" dir="ltr">PORTFOLIO ’26</span>
        <Button variant="editorial" size="icon" className="mobile-toggle" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="التنقل للجوال">{navigation.map((item) => <Button key={item.id} asChild variant="editorial"><a href={`#${item.id}`} onClick={() => setOpen(false)}>{item.title}</a></Button>)}</nav>}
    </header>
  );
}

export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner page-width">
        <div className="hero-top"><span>التصميم يبدأ بحكاية</span><span dir="ltr">2026</span></div>
        <div className="hero-main">
          <div className="hero-name"><p className="hero-eyebrow" dir="ltr">PORTFOLIO &amp; RESUME</p><h1>منار يحيى<span>عطيف<span className="hero-asterisk" aria-hidden="true">✳</span></span></h1><p className="hero-description">مصممة جرافيك و مصممة منتجات</p></div>
          <div className="hero-side" aria-hidden="true"><span>فكرة</span><span className="side-line" /><span>هوية</span><span className="side-line" /><span>أثر</span></div>
        </div>
        <div className="hero-bottom"><Button asChild variant="editorial" className="explore-link"><a href="#work"><span className="scroll-icon"><ArrowDown size={18} /></span>استكشف الأعمال</a></Button><span className="hero-signature">من المعنى.. إلى التصميم</span><span className="hero-edition" dir="ltr">01 — 2026</span></div>
      </div>
    </section>
  );
}

export function SectionLabel({ number, text }: { number: string; text: string }) {
  return <div className="section-label"><span dir="ltr">{number}</span><span className="label-line" /><span>{text}</span></div>;
}

export function Chapter({ category }: { category: typeof categories[number] }) {
  return <div className="chapter reveal"><div className="page-width chapter-inner"><span className="chapter-number" dir="ltr">{category.number}</span><div><span className="chapter-kicker">من أعمالي / {category.label}</span><h2>{category.title}</h2></div><ArrowUpLeft className="chapter-arrow" aria-hidden="true" /></div></div>;
}

export function Artwork({ project, dark = false }: { project: PortfolioProject; dark?: boolean }) {
  return <div className={`artwork ${dark ? "artwork-dark" : ""}`}>
    {project.image ? <img src={project.image} alt={project.alt} loading="lazy" decoding="async" /> : <div className="artwork-placeholder" role="img" aria-label={`${project.alt} — بانتظار الصورة الأصلية`}><span className="corner corner-one" /><span className="corner corner-two" /><span className="corner corner-three" /><span className="corner corner-four" /><Image size={25} strokeWidth={0.85} aria-hidden="true" /><span className="placeholder-name">{project.name}</span><span className="placeholder-note">مساحة للعمل الأصلي</span></div>}
  </div>;
}

export function Gallery({ projects, layout = "logos" }: { projects: PortfolioProject[]; layout?: "logos" | "posters" | "prints" }) {
  return <div className={`page-width gallery gallery-${layout}`}>{projects.map((project, index) => <figure key={`${project.name}-${index}`} className="project reveal"><Artwork project={project} dark={layout === "posters"} /><figcaption><div className="project-title"><h3>{project.name}</h3>{project.subtitle && <p>{project.subtitle}</p>}</div><span className="project-index" dir="ltr">{String(index + 1).padStart(2, "0")}</span></figcaption></figure>)}</div>;
}