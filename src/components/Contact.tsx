import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">联系我们</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ContactItem
            icon={<MapPin className="w-6 h-6 text-blue-500" />}
            text="浙江省西湖区桃源大厦"
          />
          <ContactItem
            icon={<Mail className="w-6 h-6 text-blue-500" />}
            text="contact@qianxin.com"
          />
          <ContactItem
            icon={<Phone className="w-6 h-6 text-blue-500" />}
            text="+86 123 4567 8900"
          />
        </div>
      </div>
    </section>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-3">
        {icon}
        <span className="text-gray-700">{text}</span>
      </div>
    </div>
  );
};

export default Contact;