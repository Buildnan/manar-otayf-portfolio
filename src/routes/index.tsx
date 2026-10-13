import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Artwork, Chapter, Gallery, Hero, PortfolioNav, RevealObserver, SectionLabel } from "@/components/portfolio";
import { aboutText, campaigns, categories, closingText, logos, posters, prints } from "@/lib/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "منار يحيى عطيف | تصميم الجرافيك والمنتجات" },
    { name: "description", content: "ملف أعمال منار يحيى عطيف — مصممة جرافيك ومصممة منتجات. شعارات، سوشال ميديا، تصاميم بتقنيات Ai، واستكرات ومطبوعات." },
    { property: "og:title", content: "منار يحيى عطيف | ملف الأعمال 2026" },
    { property: "og:description", content: "تصميم يحكي قصصاً ويجمع بين المعنى والجمال والأثر العملي. ملف أعمال منار عطيف في تصميم الجرافيك والمنتجات." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <div dir="rtl">
    <PortfolioNav />
    <main>
      <Hero />
      <section id="about" className="page-width section-spacing reveal">
        <SectionLabel number="01" text="نبذة عني" />
        <div className="about-layout"><div className="about-title"><h2 className="section-heading">أهلاً.. أنا<br />منار عطيف</h2><span className="about-asterisk" aria-hidden="true">✳</span></div><p className="about-copy">{aboutText}</p></div>
      </section>
      <section id="experience" className="resume section-spacing">
        <div className="page-width reveal"><div className="resume-header"><div><SectionLabel number="02" text="السيرة والمهارات" /><h2 className="section-heading">الفكرة، وأدواتها.</h2></div></div>
          <div className="resume-grid">
            <div className="resume-column"><h3>الأهداف</h3><ul className="goals"><li>التصميم الإبداعي وتطوير الأفكار المبتكرة</li><li>تصميم المنتجات والهدايا التذكارية</li><li>تصميم الهوية البصرية والعناصر الترويجية</li></ul></div>
            <div className="resume-column"><h3>المهارات التصميمية</h3><div className="skills">{["Photoshop", "Illustrator", "AutoCAD", "Rhinoceros", "Canva", "SketchUp", "Sketchbook"].map((skill) => <span key={skill}>{skill}</span>)}</div></div>
            <div className="resume-column"><h3>التعليم</h3><p className="education">بكالوريوس فنون تطبيقية</p><div className="experience-placeholder"><h4>الخبرات — قيد المراجعة</h4><p>مساحة لإضافة جهات العمل، المسميات الوظيفية والفترات بعد تأكيدها.</p></div></div>
          </div>
        </div>
      </section>
      <section id="work" className="work-index section-spacing"><div className="page-width reveal"><SectionLabel number="03" text="أعمال مختارة" /><h2 className="section-heading">لكل فكرة.. حكاية بصرية.</h2><nav aria-label="فئات الأعمال">{categories.map((category) => <Button key={category.id} asChild variant="editorial" className="category-link"><a href={`#${category.id}`}><span className="category-number" dir="ltr">{category.number}</span><h3>{category.title}</h3><ArrowUpLeft aria-hidden="true" /></a></Button>)}</nav></div></section>
      <section id="logos" aria-label="تصاميم شعارات"><Chapter category={categories[0]} /><Gallery projects={logos} /></section>
      <section id="social" aria-label="تصاميم سوشال ميديا"><Chapter category={categories[1]} /><div className="campaigns page-width">{campaigns.map((campaign, index) => <div className="campaign reveal" key={campaign.name}><div className="campaign-header"><div><h3>{campaign.name}</h3>{campaign.subtitle && <p>{campaign.subtitle}</p>}</div><span dir="ltr">{String(index + 1).padStart(2, "0")}</span></div><div className="campaign-images">{[0,1,2].map((slot) => <Artwork key={slot} project={{ ...campaign, alt: `${campaign.alt} — مساحة ${slot + 1}` }} />)}</div></div>)}</div></section>
      <section id="ai" aria-label="تصاميم باستخدام تقنيات Ai"><Chapter category={categories[2]} /><Gallery projects={posters} layout="posters" /></section>
      <section id="print" aria-label="تصاميم الاستكرات والمطبوعات"><Chapter category={categories[3]} /><Gallery projects={prints} layout="prints" /></section>
      <section id="contact" className="closing"><div className="page-width"><SectionLabel number="04" text="تواصل" /><div className="closing-layout reveal"><h2>ختاماً..</h2><p className="closing-text">{closingText}</p></div><div className="contact-row">
        <Button asChild variant="editorial" className="contact-link"><a href="mailto:manaryo99@gmail.com"><span className="contact-link-label">البريد الإلكتروني</span><span className="contact-link-value"><span dir="ltr">manaryo99@gmail.com</span><ArrowUpLeft aria-hidden="true" /></span></a></Button>
        <Button asChild variant="editorial" className="contact-link"><a href="tel:0557742382"><span className="contact-link-label">الهاتف</span><span className="contact-link-value"><span dir="ltr">0557742382</span><ArrowUpLeft aria-hidden="true" /></span></a></Button>
        <Button asChild variant="editorial" className="contact-link"><a href="https://www.linkedin.com/in/manar_otayf/" target="_blank" rel="noopener noreferrer"><span className="contact-link-label">لينكدإن</span><span className="contact-link-value"><span dir="ltr">manar_otayf</span><ArrowUpLeft aria-hidden="true" /></span></a></Button>
      </div><footer className="footer"><span className="footer-name">منار عطيف</span><span>ملف الأعمال والسيرة الذاتية © 2026</span></footer></div></section>
    </main>
    <RevealObserver />
  </div>;
}
