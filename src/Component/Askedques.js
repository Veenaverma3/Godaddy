 import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // icons

const Askedques = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does GoDaddy help small business owners succeed?",
      answer:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional email helps you build a professional image, while our online marketing tools empower entrepreneurs to get online with an SEO-friendly website. GoDaddy is an all-in-one solution provider to get your idea online, backed with expert, personalized support from GoDaddy Guides.",
    },
    {
      question: "Why do I need a domain name?",
      answer:
        "A domain name is your unique online identity, making it easier for people to find and remember your website. Without one, customers might struggle to locate your business online.",
    },
    {
      question: "What makes GoDaddy the best choice for domains?",
      answer:
        "GoDaddy is the world’s largest domain registrar, offering competitive pricing, excellent support, and a huge selection of domain extensions for businesses of all sizes.",
    },
    {
      question: "Can I transfer my existing domain to GoDaddy?",
      answer:
        "Yes, transferring your domain to GoDaddy is quick and simple. You’ll enjoy our easy-to-use platform, affordable renewals, and world-class customer support.",
    },
    {
      question: "Does GoDaddy offer website hosting?",
      answer:
        "Absolutely. Our hosting plans are fast, secure, and reliable. We provide 24/7 monitoring, daily backups, and easy scalability to grow with your business.",
    },
    {
      question: "Can I build a website without technical skills?",
      answer:
        "Yes! With GoDaddy’s Website Builder and WordPress hosting, you can create a professional site without coding. Drag-and-drop tools make building your site simple.",
    },
    {
      question: "What is GoDaddy Pro?",
      answer:
        "GoDaddy Pro is a program for web designers and developers, offering free tools to manage multiple clients’ sites, domains, and hosting accounts in one place.",
    },
    {
      question: "Does GoDaddy provide email services?",
      answer:
        "Yes, GoDaddy offers professional email powered by Microsoft 365. It builds trust with customers and improves communication with a domain-based email address.",
    },
  ];

  return (
    <div className="w-full">
      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-serif text-center mb-6">
          Millions of customers rely on our domains and web hosting to get their ideas online.
        </h2>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-10">
          Frequently asked questions
        </p>

        {/* FAQ List */}
        <div className="space-y-6 mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full text-left text-lg sm:text-2xl font-medium focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-5 h-5 shrink-0 ml-2" />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="px-4 sm:px-6 lg:px-8 mt-10 text-xs sm:text-base font-semibold text-gray-600 text-left space-y-2">
        <span>*- , _ **** , - ** , - ↑ _1</span>
        <span className="underline cursor-pointer">
          View product limitations and legal policies
        </span>
        <p>
          Third-party logos and marks are registered trademarks of their respective owners.  
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Askedques;
