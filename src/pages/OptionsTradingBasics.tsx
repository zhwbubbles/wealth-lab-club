import  { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Clock, Shield, Users, Layout } from 'lucide-react';

export default function OptionsTradingBasics() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay bg-gradient-to-br from-gradient-start to-gradient-end"></div>
        
        <div className="container relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 text-gradient-mid rounded-full text-sm font-medium mb-4">
                Cryptocurrency Options
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Options Trading 101</h1>
              <p className="text-xl text-gray-300 mb-8">
                Learn the fundamentals of options trading in the cryptocurrency market. This beginner-friendly course breaks down complex concepts into easy-to-understand lessons.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-gradient-mid mr-2" />
                  <span className="text-gray-300">Coming Soon</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gradient-mid mr-2" />
                  <span className="text-gray-300">All Skill Levels</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-gradient-mid mr-2" />
                  <span className="text-gray-300">Lifetime Access</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <span className="bg-gradient-to-r from-gradient-start to-gradient-end text-white rounded-md py-3 px-6 text-center inline-flex items-center justify-center disabled:opacity-50 transition-all hover:opacity-90 text-base font-medium opacity-50 cursor-not-allowed">
                  Coming Soon
                </span>
                <Link to="/options-trading-masterclass" className="btn btn-outline">
                  View Masterclass
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-gradient-start/20 to-gradient-end/20 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxvcHRpb25zJTIwdHJhZGluZyUyMGNoYXJ0cyUyMGNyeXB0byUyMGZpbmFuY2V8ZW58MHx8fHwxNzQ4NjE5MzA0fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                  alt="Options Trading Basics" 
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Overview */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 text-gradient-mid rounded-full text-sm font-medium mb-4">
              Course Overview
            </span>
            <h2 className="text-3xl font-bold mb-6 text-white">What You'll Learn</h2>
            <p className="text-gray-300 mb-12">
              This course is designed to introduce you to the world of options trading in cryptocurrency markets, giving you a solid foundation to build upon.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-dark p-6 rounded-lg border border-gray-800">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-gradient-mid" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Options Fundamentals</h3>
              <p className="text-gray-400 mb-4">
                Learn the basic terminology, concepts, and mechanics of options contracts in the cryptocurrency market.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Call and put options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Strike prices and expiry dates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Option premiums and pricing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-dark p-6 rounded-lg border border-gray-800">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 flex items-center justify-center mb-4">
                <Layout className="h-6 w-6 text-gradient-mid" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Trading Strategies</h3>
              <p className="text-gray-400 mb-4">
                Discover basic options strategies that you can implement in different market conditions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Covered calls and protective puts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Bull and bear spreads</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">When to use each strategy</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-dark p-6 rounded-lg border border-gray-800">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-gradient-mid" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Risk Management</h3>
              <p className="text-gray-400 mb-4">
                Learn essential risk management techniques specifically for options trading.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Position sizing for options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Managing volatility risk</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Hedging with options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Structure */}
      <section className="py-16 bg-primary-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 text-gradient-mid rounded-full text-sm font-medium mb-4">
                Course Structure
              </span>
              <h2 className="text-3xl font-bold mb-6 text-white">Options Trading 101</h2>
            </div>
            
            <div className="bg-primary-dark rounded-xl overflow-hidden border border-gray-800">
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    The course includes:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-gradient-mid mr-2" />
                      <span className="text-gray-300">FREE</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gradient-mid mr-2" />
                      <span className="text-gray-300">Weekly Live Stream</span>
                    </div>
                    <div className="flex items-center">
                      <Layout className="h-5 w-5 text-gradient-mid mr-2" />
                      <span className="text-gray-300">Practical Exercises</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary border border-gray-800">
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-5 w-5 text-gradient-mid mr-2" />
                      <h4 className="text-lg font-medium text-white">Options Trading 101</h4>
                    </div>
                    <div className="pl-7 space-y-2">
                      <div className="flex items-center justify-between py-2 border-t border-gray-800">
                        <div className="flex items-center">
                          <span className="text-gradient-mid mr-2">•</span>
                          <span className="text-gray-300">Video</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-2 border-t border-gray-800">
                        <div className="flex items-center">
                          <span className="text-gradient-mid mr-2">•</span>
                          <span className="text-gray-300">PDF</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-primary border-t border-gray-800">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <p className="text-gray-400 mb-4 sm:mb-0">Coming soon! Join our waitlist to be notified when this course is available.</p>
                  <Link to="/options-trading-masterclass" className="btn btn-outline">
                    View Masterclass
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-dark to-primary rounded-xl overflow-hidden border border-gray-800">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-8 md:mb-0 text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Options Trading Journey?</h2>
                    <p className="text-gray-300 mb-6">
                      While this course is still in development, check out our Options Trading Masterclass for advanced strategies.
                    </p>
                  </div>
                  
                  <div className="md:w-1/3 md:pl-8 flex justify-center md:justify-end">
                    <Link to="/options-trading-masterclass" className="btn btn-primary">
                      Explore Masterclass
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 