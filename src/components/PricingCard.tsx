import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigateToContact } from '@/hooks/useNavigateToContact';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

export function PricingCard({
  title,
  price,
  period,
  features,
  isPopular = false,
}: PricingCardProps) {
  const navigateToContact = useNavigateToContact();

  const handleSelect = () => {
    const planDetails = `
【選択プラン】${title}
【料金】${price}${period}
【サービス内容】
${features.map(feature => `・${feature.text}`).join('\n')}
    `.trim();
    
    navigateToContact(planDetails);
  };

  return (
    <div className={`card ${
      isPopular ? 'bg-primary text-primary-content' : 'bg-base-100'
    } shadow-xl`}>
      <div className="card-body">
        <h3 className="card-title justify-center text-2xl mb-4">{title}</h3>
        <div className="text-center mb-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className={isPopular ? 'text-primary-content/80' : 'text-gray-500'}>
            {period}
          </span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle2 className={`h-5 w-5 ${
                isPopular ? '' : 'text-primary'
              }`} />
              {feature.text}
            </li>
          ))}
        </ul>
        <div className="card-actions justify-center mt-6">
          <button
            onClick={handleSelect}
            className={`btn ${
              isPopular ? 'btn-secondary' : 'btn-primary btn-outline'
            }`}
          >
            選択する <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}