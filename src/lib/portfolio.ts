export type PortfolioProject = {
  name: string;
  subtitle?: string;
  image?: string;
  alt: string;
  artworks?: PortfolioProject[];
};

const artworkPath = (file: string) => `${import.meta.env.BASE_URL}artworks/${file}`;

export const aboutText = "أجمع بين تصميم المنتجات والجرافيك بتفاصيل تحكي قصصاً؛ بخبرة تتجاوز العامين. أبحث دائماً عن القصة خلف كل خامة والبداية في كل فكرة. أؤمن أن التصميم وسيلة لحفظ الثقافة وإعادة تقديمها بلغة عصرية تواكب الجيل الجديد. أصنع حلولاً وتجارب بصرية مبتكرة تشبه المكان والناس، وتجمع بين المعنى، الجمال، والأثر العملي. أعتمد على أدواتي من برامج Adobe إلى النمذجة ثلاثية الأبعاد (3D Modeling) لتحويل الأفكار إلى واقع يُحكى، يُشعر به، ولا يُنسى.";
export const closingText = "هذه ليست كل الحكاية، بل هي جزء مما أستطيع تقديمه. خلف كل عمل فكرة، وخلف كل فكرة شغف، وحرص على أن يخرج التصميم بصورة تحمل قيمة وهوية خاصة. حرصاً على خصوصية عملائي واحتراماً لحقوقهم، لم أستعرض جميع أعمالي في هذا الملف، واكتفيت بعرض نماذج مختارة تعكس أسلوبي وقدراتي في التصميم. وإن لفتت هذه الأعمال انتباهكم، فأؤمن أن القادم سيكون أجمل بإذن الله، وستكون الفرصة خير دليل على ما أستطيع تقديمه.";

export const categories = [
  { id: "logos", number: "01", title: "تصاميم شعارات", label: "الشعارات" },
  { id: "social", number: "02", title: "تصاميم سوشال ميديا", label: "السوشال ميديا" },
  { id: "ai", number: "03", title: "تصاميم باستخدام تقنيات Ai", label: "تقنيات Ai" },
  { id: "print", number: "04", title: "تصاميم الاستكرات والمطبوعات", label: "الاستكرات والمطبوعات" },
] as const;

export const logos: PortfolioProject[] = [
  { name: "بساطها أحمدي", subtitle: "ABAYAS STORE", image: artworkPath("logos/basatha.webp"), alt: "هوية بساطها أحمدي الأصلية وتطبيقها على بطاقات متجر العبايات" },
  { name: "مخلاف", image: artworkPath("logos/mikhlaf.webp"), alt: "شعار مخلاف الأصلي وتطبيقاته على تغليف المنتجات" },
  { name: "بنّاز", image: artworkPath("logos/bannaz.webp"), alt: "هوية قهوة بنّاز الأصلية وتطبيقاتها على الأكواب والتغليف" },
  { name: "اقرأ", image: artworkPath("logos/iqraa.webp"), alt: "شعار اقرأ الأصلي وتطبيقاته على اللافتات والبطاقات" },
];

const campaign = (name: string, subtitle: string, file: string, descriptions: string[]): PortfolioProject => ({
  name, subtitle, alt: `تصاميم حملة ${name} الأصلية`,
  artworks: descriptions.map((description, index) => ({
    name, image: artworkPath(`social/${file}-${index + 1}.webp`),
    alt: `${name} — ${description}`,
  })),
});

export const campaigns: PortfolioProject[] = [
  campaign("مخلاف", "محتوى ثقافي", "mikhlaf", ["القطن", "الزخارف التراثية", "ألوان الهوية"]),
  campaign("الموارد البشرية", "HR", "hr", ["تحدي تطوير المهارات", "معسكر الموارد البشرية", "تطوير المهارة المهنية", "إعلان الدفعة السابعة", "مواعيد المعسكر"]),
  campaign("بنّاز", "قهوة", "bannaz", ["أنواع البن", "تغليف البن البرازيلي", "إعلان المنتج الجديد", "قهوة تبدأ يومك", "قهوة مختصة", "الشوكولاتة الساخنة"]),
  campaign("بودكاست", "عالم الفن بالألوان الصريحة", "podcast", ["غلاف البودكاست", "ضيف الحلقة", "قائمة الحلقات", "إعلان حلقة جديدة", "هوية البودكاست", "الاستماع عبر الهاتف"]),
  campaign("اليوم العالمي للغة الأم", "نادي ريادة الأعمال", "mother-language", ["قالب الحملة", "التفكير التصميمي", "لغتك هويتك"]),
];

export const posters: PortfolioProject[] = [
  { name: "جبنة", image: artworkPath("ai/poster-1.webp"), alt: "ملصق جبنة بتكوين بصري مستوحى من الفخار" },
  { name: "الذاكرة والتراث", image: artworkPath("ai/poster-2.webp"), alt: "ملصق إبداعي بالذكاء الاصطناعي يجمع الساعة الرملية والتراث" },
  { name: "التراث والحاضر", image: artworkPath("ai/poster-3.webp"), alt: "ملصق بالذكاء الاصطناعي يجمع الدماغ والشجرة في تكوين واحد" },
  { name: "الإبداع والأفكار", image: artworkPath("ai/poster-4.webp"), alt: "ملصق بالذكاء الاصطناعي لشخص تحيط به الأفكار والعناصر الإبداعية" },
];

export const prints: PortfolioProject[] = [
  { name: "عروض وتنسيقات المنتجات", image: artworkPath("prints/products.webp"), alt: "تنسيق وعرض المنتجات الورقية وهوية مخلاف الأصلية" },
  { name: "استكرات سعودية وهندسية وماتشا", image: artworkPath("prints/saudi-engineering-matcha.webp"), alt: "أوراق الاستكرات الأصلية بطابع سعودي وهندسي وماتشا" },
  { name: "استكرات الشخصيات", image: artworkPath("prints/characters.webp"), alt: "ثلاث مجموعات أصلية من استكرات الشخصيات والأبطال" },
  { name: "استكرات أنثوية", image: artworkPath("prints/feminine.webp"), alt: "مجموعات الاستكرات الأنثوية الأصلية بالألوان الوردي والبنفسجي" },
  { name: "تقويم 2025 ومخطط المهام", image: artworkPath("prints/calendar-planner.webp"), alt: "تصميم التقويم السنوي 2025 ومخطط المهام والدفاتر الأصلية" },
];
