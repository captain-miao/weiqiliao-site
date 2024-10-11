import React from 'react';
import { Smartphone, Apple, Monitor } from 'lucide-react';

const Download: React.FC = () => {
  const platforms = [
    { name: 'Android', icon: <Smartphone className="w-12 h-12" />, link: 'https://fir.xcxwo.com/wqliao' },
    { name: 'iOS', icon: <Apple className="w-12 h-12" />, link: '#' },
    { name: 'Windows', icon: <Monitor className="w-12 h-12" />, link: '#' },
    { name: 'macOS', icon: <Monitor className="w-12 h-12" />, link: '#' },
  ];

  return (
    <section id="download" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">下载微企聊</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {platform.icon}
              <span className="mt-2 text-lg font-semibold">{platform.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Download;