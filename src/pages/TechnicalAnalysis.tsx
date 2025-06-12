import  { ArrowRight, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TechnicalAnalysis() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-primary-dark">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Technical Analysis 101
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                  Master the art and science of chart reading and pattern recognition to make data-driven trading decisions.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">FREE</span>
                  </div>
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">Weekly Live Stream</span>
                  </div>
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">Practical Exercises</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://whop.com/trading-technical-analysis" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10 md:hidden"></div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwY2hhcnRzJTIwdGVjaG5pY2FsJTIwYW5hbHlzaXMlMjBjb21wdXRlcnxlbnwwfHx8fDE3NDczNDIxODZ8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                alt="Technical Analysis Learning" 
                className="rounded-lg shadow-xl w-full border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Course Structure</h2>
            <p className="text-gray-300 mb-12 text-center">
              Our Technical Analysis 101 course is designed to help you master chart reading and develop profitable trading strategies.
            </p>

            <div className="space-y-8">
              <div className="bg-primary-light rounded-lg overflow-hidden border border-gray-800">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 rounded-lg bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 text-gradient-mid">
                      <BarChart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Technical Analysis 101</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-gradient-mid mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm">Video</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-5 w-5 text-gradient-mid mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm">PDF</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-primary-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">What You'll Learn</h2>
            <p className="text-gray-300 mb-12 text-center">
              By the end of this course, you'll have developed the skills to analyze market charts, identify profitable trading setups, and implement data-driven strategies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">Skills You'll Develop</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Identify chart patterns with high probability outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Use technical indicators to confirm trade signals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Determine optimal entry and exit points</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Develop personalized trading strategies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">Course Includes</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Video lessons with real market examples</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Weekly live trading sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Downloadable PDF resources</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Practical exercises to build chart reading skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Trading Concepts Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Advanced Trading Concepts</h2>
              <p className="text-gray-300 mb-6">
                Our Technical Analysis course goes beyond the basics to teach you advanced concepts that professional traders use daily.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Trend identification and confirmation techniques</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Advanced oscillator and momentum indicator strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Multi-timeframe analysis for improved accuracy</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Volume analysis and market structure</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHx0cmFkaW5nJTIwY2hhcnRzJTIwdGVjaG5pY2FsJTIwYW5hbHlzaXMlMjBjb21wdXRlcnxlbnwwfHx8fDE3NDczNDIxODZ8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                alt="Advanced Technical Analysis Dashboard" 
                className="rounded-lg shadow-xl border border-gray-800"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Learning Section */}
      <section className="py-16 bg-primary-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHx0cmFkaW5nJTIwY2hhcnRzJTIwdGVjaG5pY2FsJTIwYW5hbHlzaXMlMjBjb21wdXRlcnxlbnwwfHx8fDE3NDczNDIxODZ8MA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                alt="Real-world trading application" 
                className="rounded-lg shadow-xl border border-gray-800"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full opacity-30 blur-xl"></div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">Practical, Hands-On Learning</h2>
              <p className="text-gray-300 mb-6">
                Our course emphasizes practical application over theory. You'll learn by analyzing real market conditions and participating in live trading sessions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Real-time market analysis sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Guided exercises with instructor feedback</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Case studies of successful trading setups</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Weekly live Q&A and trading sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-gradient-start/10 via-gradient-mid/10 to-gradient-end/10 p-8 md:p-12 rounded-lg border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Master Technical Analysis?</h2>
              <p className="text-gray-300 mb-8">
                Join our comprehensive course and transform your trading skills with data-driven chart analysis and proven technical strategies.
              </p>
              <a 
                href="https://whop.com/trading-technical-analysis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 