import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { Services } from './components/Services';
import { ClientSlider } from './components/ClientSlider';
import { PricingCard } from './components/PricingCard';
import { CompanyInfo } from './components/CompanyInfo';
import { ContactForm } from './components/ContactForm';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

function App() {
  const pricingPlans = [
    {
      title: "メンテナンス",
      price: "¥50,000",
      period: "/月",
      features: [
        { text: "1システム" },
        { text: "Java, PHP, Python, JavaScript" },
        { text: "AWS, GCP, Azure, Linux" },
        { text: "MySQL, PostgreSQL" },
        { text: "12ヶ月契約" },
        { text: "リモート対応" },
      ],
    },
    {
      title: "プレミアム",
      price: "¥100,000",
      period: "/日",
      features: [
        { text: "1案件" },
        { text: "Java, PHP, Python, JavaScript" },
        { text: "AWS, GCP, Azure, Linux" },
        { text: "Oracle, MySQL, PostgreSQL" },
        { text: "12ヶ月契約" },
        { text: "リモート対応" },
      ],
      isPopular: true,
    },
    {
      title: "スポット",
      price: "¥200,000",
      period: "/日",
      features: [
        { text: "1案件" },
        { text: "Java, PHP, Python, JavaScript" },
        { text: "AWS, GCP, Azure, Linux" },
        { text: "Oracle, MySQL, PostgreSQL" },
        { text: "1日契約" },
        { text: "リモート対応" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <HeroSlider />
      <Services />
      <ClientSlider />
      
      <section id="pricing" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            料金プラン
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            会社概要
          </h2>
          <CompanyInfo />
        </div>
      </section>

      <section id="contact" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            お問い合わせ
          </h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;