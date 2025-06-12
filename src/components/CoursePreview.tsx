import   { Link } from 'react-router-dom';
import { CreditCard, BarChart } from 'lucide-react';

type Course = {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
  status: 'available' | 'coming-soon';
  popular?: boolean;
  whopLink?: string;
};

export default function CoursePreview() {
  const courses: Course[] = [
         {
      id: 1,
      slug: 'futures-trading',
      title: "Futures Trading Masterclass",
      description: "Master advanced cryptocurrency futures trading strategies and risk management techniques.",
      icon: <CreditCard className="h-8 w-8" />,
      features: [
        "Advanced technical analysis",
        "Futures contract fundamentals",
        "Leverage and risk management",
        "Trading psychology",
        "Market sentiment analysis"
      ],
      status: 'available',
      popular: true,
      whopLink: "https://whop.com/futures-trading-wl/"
    },
    {
      id: 2,
      slug: 'technical-analysis',
      title: "Technical Analysis 101",
      description: "Learn how to read charts, identify patterns, and make data-driven trading decisions.",
      icon: <BarChart className="h-8 w-8" />,
      features: [
        "Chart pattern recognition",
        "Key technical indicators",
        "Support and resistance levels",
        "Trend analysis techniques",
        "Risk management strategies"
      ],
      status: 'available',
      whopLink: "https://whop.com/trading-technical-analysis"
    }
    
  ];

  return (
    <section id="courses" className="section bg-primary-light">
      <div className="container">
        <h2 className="section-title text-center">Our Courses</h2>
        <p className="section-subtitle text-center">
          Comprehensive cryptocurrency education designed to take you from beginner to expert. All courses include lifetime access and community support.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="course-card relative"
            >
              {course.popular && (
                <div className="card-badge">
                  Most Popular
                </div>
              )}
              <div className="p-6 flex-grow">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${course.popular ? 'gradient-icon-bg' : 'bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 text-gradient-mid'}`}>
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{course.title}</h3>
                <p className="text-gray-400 mb-4">{course.description}</p>
                <ul className="space-y-2 mb-4">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-gradient-mid mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary p-6 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Available Now</span>
                  </div>
                  {course.whopLink && (
                    <a 
                      href={course.whopLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary px-4 py-2"
                    >
                      Enroll Now
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  