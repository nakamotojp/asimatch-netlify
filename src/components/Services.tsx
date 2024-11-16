import {
  Brain,
  ShoppingCart,
  Code,
  Target,
  BookCopy,
  Bot, // Changed from Robot to Bot which is the correct icon name
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI開発社員研修',
    description:
      'プログラミング未経験社員からGoogleのTensorFlowを使用したAI開発社員へ。全社員がAIノウハウを習得し、既存事業をAI活用することで、社長も社員もみんな幸せな新しいビジネスモデルを実現します。',
  },
  {
    icon: ShoppingCart,
    title: 'ネットショップ売り上げ10倍計画！',
    description:
      '楽天・アマゾン・ヤフーショッピングでの売上を10倍に。他社の売れ筋をAIで自動取得し、商品ページをAIが自動生成。オーソリ処理までAIが自動受付、発送代行すればEC担当者は1人で月間売上1億円を実現できます。',
  },
  {
    icon: Code,
    title: '企業向けプログラミング教育',
    description:
      '小学生でプログラミング教育が始まる中、社会人のプログラミングスキルは必須となっています。アジマッチのプログラミング研修で、全社員がプログラミングできる体制を整えましょう。',
  },
  {
    icon: Target,
    title: '御社課題を経営者視点で解決',
    description:
      '社内の課題を年収600万円の社員に任せるのではなく、結果にコミットするアジマッチに相談することで、効率的な課題解決を実現します。',
  },
  {
    icon: BookCopy,
    title: '孫へ伝える事業継承',
    description:
      '貴方の生き方を専任コンサルタントが聞き取り、成功談と失敗談から転換点を抽出。孫が事業開始・引継する際の相談役としてAIデータベースを構築し、貴方の全てを孫へ伝えます。',
  },
  {
    icon: Bot, // Using Bot instead of Robot
    title: '業務自動化システム',
    description:
      '経営者の考え方を小さなタスクに分け、パートさんにできる仕事にし、仕事を仕組化。業務をAIが自動処理することで、仕事に余裕が生まれ、人生が楽しくなり、社員から愛される社長になれます。',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          サービス一覧
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="card-body">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="card-title text-xl mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}