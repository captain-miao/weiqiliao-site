import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "微企聊支持哪些平台？",
      answer: "微企聊 支持 iOS、Android、Windows和macOS，确保您可以在任何设备上使用我们的服务。"
    },
    {
      question: "如何保证我的消息安全？",
      answer: "我们使用端到端加密技术，确保只有您和您的通信对象能够读取消息内容。我们的服务器无法访问您的私密通信。"
    },
    {
      question: "微企聊是否支持群聊？",
      answer: "是的，微企聊支持创建和管理群聊，您可以轻松地与多人同时交流。"
    },
    {
      question: "如果我遇到技术问题，如何获得支持？",
      answer: "我们提供 24/7 的客户支持。您可以通过应用内的帮助中心、电子邮件或在线聊天获得技术支持。"
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">常见问题</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <HelpCircle className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">{faq.question}</h3>
              </div>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;