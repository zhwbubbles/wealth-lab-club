import  { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-primary-dark to-primary-light rounded-xl overflow-hidden border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?cs=srgb&dl=pexels-alesiakozik-6770610.jpg&fm=jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary-dark"></div>
              </div>
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Master Cryptocurrency Trading?</h2>
                <p className="text-gray-300 mb-8">
                  Join thousands of students who have transformed their trading skills with our expert-led courses. Get lifetime access to comprehensive training material and community support.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gradient-mid flex-shrink-0 mr-3" />
                    <span>Expert-led instruction from professional traders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gradient-mid flex-shrink-0 mr-3" />
                    <span>Step-by-step practical trading strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gradient-mid flex-shrink-0 mr-3" />
                    <span>Risk management techniques to protect your capital</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-gradient-mid flex-shrink-0 mr-3" />
                    <span>Access to our private trading community</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="https://whop.com/futures-trading-wl/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    Start Learning Today
                  </a>
                  <Link to="/about" className="btn btn-outline">
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  