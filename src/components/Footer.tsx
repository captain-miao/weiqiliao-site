import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center mb-4 md:mb-0">
          <img src="/icon.svg" alt="微企聊图标" className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">微企聊</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/app-agreement.html" target="_blank" className="hover:text-blue-400">软件购买及服务协议</a></li>
              <li><a href="/app-privacy.html" target="_blank" className="hover:text-blue-400">隐私保护指引</a></li>
            </ul>
          </nav>
        </div>
        <div className="text-center text-gray-400">
          <p>&copy; 2024 微企聊. 无间道科技 | 浙ICP 备2023054567号</p>
          <p>浙公网安备 350283020000163</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;