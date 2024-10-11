import React from 'react';
import { Zap, Shield, Users, Wine, Clock, Support } from 'lucide-react';

const ProductIntro: React.FC = () => {
  return (
    <section id="product" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">微企聊：私有化即时通讯解决方案</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Wine className="w-12 h-12 text-orange-500" />}
          title="易用界面"
          description="简洁明了的使用者介面，让每个人都能轻松上手。"
        />
        <FeatureCard
          icon={<Shield className="w-12 h-12 text-green-500" />}
          title="安全与隐私"
          description="您的隐私至关重要。我们使用最先进的加密技术保护您的通信。"
        />
        <FeatureCard
          icon={<Users className="w-12 h-12 text-blue-500" />}
          title="多平台支持"
          description="无论是在桌面还是移动设备上，微企聊都能完美运行。"
        />
        <FeatureCard
          icon={<Zap className="w-12 h-12 text-yellow-500" />}
          title="后台管理"
          description="后台管理软件，通过物理级防护确保企业数据主权，提升您的管理效率，助力业务成功。"
        />
        <FeatureCard
          icon={<Clock className="w-12 h-12 text-purple-500" />}
          title="高效性能"
          description="我们的系统经过优化，确保在任何情况下都能提供高效的性能。"
        />

        <FeatureCard
          icon={<Support className="w-12 h-12 text-red-500" />}
          title="24/7 支持"
          description="我们提供全天候的技术支持，确保您在任何时候都能获得帮助。"
        />
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProductIntro;