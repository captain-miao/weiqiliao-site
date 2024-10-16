import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "小微版",
      price: "¥35/人/月",
      features: [
        "最多 300 个用户",
        "IM 消息功能",
        "客户支持"
      ]
    },
    {
      name: "基础版",
      price: "¥25/人/月",
      features: [
        "最多 600 个用户",
        "IM 消息功能",
        "客户支持"
      ]
    },
    {
      name: "企业版",
      price: "联系我们",
      features: [
        "定制化解决方案",
        "专属服务器",
        "24/7 专属支持"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">价格方案</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="text-left mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                选择方案
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;