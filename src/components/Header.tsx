import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <MessageCircle className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">微企聊</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:underline">首页</a></li>
            <li><a href="#contact" className="hover:underline">联系</a></li>
            <li><a href="#pricing" className="hover:underline">购买</a></li>
            <li><a href="#faq" className="hover:underline">常见问题</a></li>
            <li><a href="#download" className="hover:underline">下载</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-blue-700 px-4 py-2">
            <ul className="space-y-2">
              <li><a href="/" className="block py-2 hover:bg-blue-800">首页</a></li>
              <li><a href="#contact" className="block py-2 hover:bg-blue-800">联系</a></li>
              <li><a href="#pricing" className="block py-2 hover:bg-blue-800">购买</a></li>
              <li><a href="#faq" className="block py-2 hover:bg-blue-800">常见问题</a></li>
              <li><a href="#download" className="block py-2 hover:bg-blue-800">下载</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;