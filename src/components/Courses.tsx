import  { CreditCard, FileText, Book } from 'lucide-react';

type Course = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
  price: string;
  popular?: boolean;
};

export default function Courses() {
  const courses: Course[] = [
    {
      id: 1,
      title: "Futures Trading Masterclass",
      description: "Master advanced cryptocurrency futures trading strategies and risk management techniques.",
      icon: <CreditCard className="h-8 w-8" />,
      features: [
        "Advanced technical analysis",
        "Futures contract fundamentals",
        "Leverage and risk management",
        "Trading psychology",
        "Market sentiment analysis",
        "Live trading demonstrations"
      ],
      price: "$499",
      popular: true
    },
    {
      id: 2,
      title: "Bitcoin & Crypto 101",
      description: "A comprehensive introduction to Bitcoin, blockchain technology, and the cryptocurrency ecosystem.",
      icon: <Book className="h-8 w-8" />,
      features: [
        "Bitcoin history and fundamentals",
        "Blockchain technology explained",
        "Altcoins and tokenomics",
        "Security best practices",
        "Understanding market cycles",
        "Building your first portfolio"
      ],
      price: "$299"
    },
    {
      id: 3,
      title: "Wallets and Exchanges 101",
      description: "Learn how to safely store, trade, and manage your cryptocurrency assets.",
      icon: <FileText className="h-8 w-8" />,
      features: [
        "Wallet types and security",
        "Exchange selection criteria",
        "KYC and regulatory compliance",
        "DeFi platforms introduction",
        "Cold storage solutions",
        "Tax implications and tracking"
      ],
      price: "$199"
    }
  ];

  return (
    <section id="courses" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center">Our Courses</h2>
        <p className="section-subtitle text-center">
          Comprehensive cryptocurrency education designed to take you from beginner to expert. All courses include lifetime access and community support.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`bg-white rounded-lg shadow-md overflow-hidden border transition-all hover:shadow-lg ${course.popular ? 'border-secondary relative' : 'border-gray-200'}`}
            >
              {course.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${course.popular ? 'bg-secondary text-white' : 'bg-secondary/10 text-secondary'}`}>
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                </div>
                <a 
                  href="#" 
                  className={`btn px-4 py-2 ${course.popular ? 'btn-primary' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  