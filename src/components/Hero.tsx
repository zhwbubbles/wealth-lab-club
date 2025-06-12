import  { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-28 lg:pt-32 pb-20 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay bg-gradient-to-br from-gradient-start/20 via-gradient-mid/20 to-gradient-end/20"></div>
      
      <div className="container relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left text-white mb-12 md:mb-0">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 text-gradient-mid rounded-full text-sm font-semibold mb-6">
              Transform Your Trading Skills
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Master Cryptocurrency <span className="gradient-text">Trading & Investment</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Learn from experts, build your crypto portfolio, and navigate the future of finance with confidence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a 
                href="https://whop.com/futures-trading-wl/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="/about" className="btn btn-outline">
                About Wealth Lab
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform md:translate-x-8 border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent z-10"></div>
              <img 
                src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/d4843f11-4b72-48c7-9c4d-d0e707daff00/public" 
                alt="Trading chart analysis with magnifying glass" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div className="p-4 bg-primary-light/80 rounded-lg backdrop-blur-sm border border-gray-800">
            <div className="text-4xl font-bold mb-1 gradient-text">100+</div>
            <div className="text-sm opacity-80">Students Enrolled</div>
          </div>
          <div className="p-4 bg-primary-light/80 rounded-lg backdrop-blur-sm border border-gray-800">
            <div className="text-4xl font-bold mb-1 gradient-text">4</div>
            <div className="text-sm opacity-80">Expert Courses</div>
          </div>
          <div className="p-4 bg-primary-light/80 rounded-lg backdrop-blur-sm border border-gray-800">
            <div className="text-4xl font-bold mb-1 gradient-text">97%</div>
            <div className="text-sm opacity-80">Satisfaction Rate</div>
          </div>
          <div className="p-4 bg-primary-light/80 rounded-lg backdrop-blur-sm border border-gray-800">
            <div className="text-4xl font-bold mb-1 gradient-text">24/7</div>
            <div className="text-sm opacity-80">Community Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
  