import   { ArrowRight, BarChart, ArrowDown, Book, CheckCircle, Clock, Play, FileText, Copy } from 'lucide-react';
 
import { Link } from 'react-router-dom';
 

export default function FuturesTrading() {
  const modules = [
    {
      id: 1,
      title: "Welcome to Crypto Futures",
      lessons: [
        { title: "Introduction", duration: "5:10", type: "video" },
        { title: "What Are Crypto Futures?", duration: "2:42", type: "video" },
        { title: "Welcome to Crypto Futures - Text Summary", duration: "", type: "text" }
      ]
    },
    {
      id: 2,
      title: "Getting in the Game",
      lessons: [
        { title: "Fund Your Futures Account", duration: "4:19", type: "video" },
        { title: "How to Open a Crypto Futures Position", duration: "5:49", type: "video" },
        { title: "Types of Crypto Futures Orders", duration: "8:56", type: "video" }
      ]
    },
    {
      id: 3,
      title: "Handle With Care",
      lessons: [
        { title: "Position Sizing and Risk Management", duration: "4:23", type: "video" },
        { title: "Leverage", duration: "4:27", type: "video" },
        { title: "Perpetuals and Funding Rates", duration: "3:34", type: "video" },
        { title: "Handle With Care - Text Summary", duration: "", type: "text" }
      ]
    },
    {
      id: 4,
      title: "BTC Leads & Margins Matter",
      lessons: [
        { title: "BTC Dominance and its Relation to the Alts", duration: "5:26", type: "video" },
        { title: "Token Margins vs USDT Margins", duration: "7:41", type: "video" }
      ]
    },
    {
      id: 5,
      title: "Final Metrics",
      lessons: [
        { title: "Final Lesson", duration: "", type: "video" }
      ]
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Lifetime Access to All Course Materials"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Private Discord Community"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Weekly Live Stream Sessions"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Trade Analysis Sessions"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Trading Strategy Templates"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Personal Risk Calculator"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-primary-dark">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Futures Trading Masterclass
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                  Master advanced futures trading strategies with our comprehensive course designed for serious traders.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">14+ Video Lessons</span>
                  </div>
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">Weekly Live Stream</span>
                  </div>
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">24/7 Support</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://whop.com/futures-trading-wl/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a href="#curriculum" className="btn btn-outline">
                    View Curriculum
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10 md:hidden"></div>
              <img 
                src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/9483081e-c1db-4277-58e3-4b4572d25b00/public"
                alt="Future Trading Workstation" 
                className="rounded-lg shadow-xl w-full border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Makes This Course Different</h2>
            <p className="text-gray-400">
              Our futures trading course is built for traders who are serious about mastering the cryptocurrency futures markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-light p-6 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-gradient-mid" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Data-Driven Approach</h3>
              <p className="text-gray-400">
                Learn to analyze market data effectively using proven technical analysis methods specific to crypto futures.
              </p>
            </div>
            
            <div className="bg-primary-light p-6 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 rounded-lg flex items-center justify-center mb-4">
                <ArrowDown className="h-6 w-6 text-gradient-mid" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Risk Management Focus</h3>
              <p className="text-gray-400">
                Develop a systematic approach to managing risk and preserving capital in volatile market conditions.
              </p>
            </div>
            
            <div className="bg-primary-light p-6 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 rounded-lg flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-gradient-mid" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Real-World Applications</h3>
              <p className="text-gray-400">
                Apply trading theories to actual market scenarios with practical examples and case studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-primary-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Course Curriculum</h2>
            <p className="text-gray-400 mb-10">
              Designed to take you from the basics to advanced futures trading concepts with a structured learning path
            </p>
            
            <div className="space-y-6">
              {modules.map((module) => (
                <div key={module.id} className="bg-primary p-6 rounded-lg shadow-md border border-gray-800">
                  <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end flex items-center justify-center mr-3 text-sm">
                      {module.id}
                    </span>
                    {module.title}
                  </h3>
                  
                  <div className="space-y-3 mt-4">
                    {module.lessons.map((lesson, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mr-3">
                            {lesson.type === "video" ? (
                              <Play className="h-3 w-3 text-gradient-mid" />
                            ) : (
                              <FileText className="h-3 w-3 text-gradient-mid" />
                            )}
                          </div>
                          <span className="text-gray-300">{lesson.title}</span>
                        </div>
                        {/* Timing removed as requested */}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-gradient-start/20 to-gradient-end/20 mix-blend-overlay z-10"></div>
                             <img 
                src="https://images.unsplash.com/photo-1736751035793-353baaa416cf?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmclMjBkZXNrJTIwd2l0aCUyMGNoYXJ0c3xlbnwwfHx8fDE3NDczMzkyMzd8MA&ixlib=rb-4.1.0&fit=fillmax&h=500&w=800" 
                alt="Trading Workspace with Cryptocurrency Charts" 
                className="w-full object-cover aspect-video"
              />
    
              </div>
            </div>
            
            <div className="lg:w-1/2 text-white order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 text-gradient-mid rounded-full text-sm font-semibold mb-4">
                Course Highlights
              </span>
              <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Crypto Futures Fundamentals</h3>
                    <p className="text-gray-400">Learn what crypto futures are and how they differ from spot trading</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Position Opening & Order Types</h3>
                    <p className="text-gray-400">Master all the essential order types and position strategies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Risk Management & Leverage</h3>
                    <p className="text-gray-400">Learn safe position sizing and responsible leverage use</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Market Dynamics</h3>
                    <p className="text-gray-400">Understand BTC dominance and different margin types</p>
                  </div>
                </div>
              </div>
              
              {/* Preview button removed as requested */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-dark to-primary rounded-xl overflow-hidden shadow-xl border border-gray-800">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-full mb-8 md:mb-0 text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Master Futures Trading?</h2>
                    <p className="text-gray-300 mb-6">
                      Join our comprehensive masterclass and transform your trading skills with proven strategies and expert guidance.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="text-gradient-mid mr-3 mt-1">
                            {feature.icon}
                          </div>
                          <span className="text-gray-300">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="https://whop.com/futures-trading-wl/" 
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing</h2>
            <p className="text-gray-400">
              Get started with our premium Futures Trading Masterclass
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            {/* Annual Plan */}
            <div className="lg:w-1/2">
              <div className="bg-primary-light p-8 rounded-lg border border-gradient-mid flex flex-col h-full relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-gradient-start to-gradient-end text-white text-xs px-3 py-1 font-medium">
                  7-DAY FREE TRIAL
                </div>
                <div className="absolute -top-1 -right-1 -left-1 h-1 bg-gradient-to-r from-gradient-start to-gradient-end"></div>
                <h3 className="text-xl font-bold mb-2 text-white">Annual Subscription</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">$299</span>
                  <span className="text-gray-400">/year</span>
                  <div className="text-sm text-gray-400 mt-1">
                    <span className="line-through">$599.88</span>
                    <span className="text-gradient-mid ml-2">Save $300.88</span>
                  </div>
                </div>
                
                <div className="space-y-3 my-6 flex-grow">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5" />
                    <span className="text-gray-300">Full Course Access</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5" />
                    <span className="text-gray-300">Weekly Live Streams</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5" />
                    <span className="text-gray-300">Private Discord Community</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5" />
                    <span className="text-gray-300">Trading Templates & Tools</span>
                  </div>
                </div>
                
                <a 
                  href="https://whop.com/futures-trading-wl/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary w-full"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Special Coupon Offer */}
            {/* <div className="lg:w-1/2">
              <div className="bg-gradient-to-r from-primary-dark to-primary rounded-lg overflow-hidden shadow-xl border border-gray-800 h-full flex flex-col">
                <div className="p-8 flex-grow">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-start text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      LIMITED TIME
                    </span>
                    <span className="text-gray-300 text-sm">Until June 1st, 2024</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">50% OFF Special Offer</h3>
                  <p className="text-gray-300 mb-6">
                    Use our exclusive coupon code during checkout to get an incredible 50% discount on your annual subscription.
                  </p>
                  
                  <div className="bg-primary/50 border border-gray-700 rounded-lg p-4 mb-6 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="mb-3 md:mb-0">
                        <span className="text-xs uppercase text-gray-400">Coupon Code:</span>
                        <div className="font-mono text-xl font-bold text-white tracking-wider">
                          WE1DG17TC3Q2U
                        </div>
                      </div>
                      <button 
                        className="btn btn-sm btn-outline"
                        onClick={() => {
                          navigator.clipboard.writeText('WE1DG17TC3Q2U');
                          alert('Coupon code copied to clipboard!');
                        }}
                      >
                        Copy Code
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5" />
                      <span className="text-gray-300">Save $149.50 on your subscription</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5" />
                      <span className="text-gray-300">Just $149.50 for a full year access</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5" />
                      <span className="text-gray-300">All course benefits included</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://whop.com/futures-trading-wl/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    Claim This Offer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div> */}

            {/* Additional pricing plans can be added here if needed */}
              <div className="lg:w-1/2">
              <div className="bg-gradient-to-r from-primary-dark to-primary rounded-lg overflow-hidden shadow-xl border border-gray-800 h-full flex flex-col">
                <div className="p-8 flex-grow">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-start text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      LIMITED TIME
                    </span>
                    <span className="text-gray-300 text-sm">Until August 30th, 2025</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">80% OFF Special Offer</h3>
                  {/* <p className="text-gray-300 mb-6">
                    Use our exclusive coupon code during checkout to get an incredible 50% discount on your annual subscription.
                  </p> */}
                  
                  <div className="bg-primary/50 border border-gray-700 rounded-lg p-4 mb-6 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="mb-3 md:mb-0">
                        <span className="text-xs uppercase text-gray-400">Coupon Code:</span>
                        <div className="font-mono text-xl font-bold text-white tracking-wider">
                          SUMMER
                        </div>
                      </div>
                      <button 
                        className="btn btn-sm btn-outline"
                        onClick={() => {
                          navigator.clipboard.writeText('WE1DG17TC3Q2U');
                          alert('Coupon code copied to clipboard!');
                        }}
                      >
                        Copy Code
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5" />
                      <span className="text-gray-300">Save $239.18 on your subscription</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5" />
                      <span className="text-gray-300">Just $59.80 for a full year access</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5" />
                      <span className="text-gray-300">All course benefits included</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://whop.com/futures-trading-wl/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    Claim This Offer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Affiliate Program Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-gradient-start/30 to-gradient-end/30 mix-blend-overlay z-10"></div>
                <img 
                  src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/0917d754-dec5-4c87-6844-19fd761be600/public" 
                  alt="Trader on phone with multiple monitors" 
                  className="rounded-lg w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2 text-white">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 text-gradient-mid rounded-full text-sm font-semibold mb-4">
                Grow With Us
              </span>
              <h2 className="text-3xl font-bold mb-6">Become an Affiliate Partner</h2>
              <p className="text-gray-300 mb-6">
                Join the Wealth Lab Affiliate Program and earn generous commissions by referring students to our premium trading courses. Leverage your network and help others succeed while generating passive income.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Earn 30% Commission</h3>
                    <p className="text-gray-400">Receive substantial commissions on every successful referral</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Exclusive Marketing Materials</h3>
                    <p className="text-gray-400">Access professional banners, email templates, and promotional content</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Real-Time Analytics</h3>
                    <p className="text-gray-400">Track your performance with detailed reporting and analytics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">60-Day Cookie Duration</h3>
                    <p className="text-gray-400">Extended tracking period to maximize your earnings potential</p>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-primary">
                Apply to Become an Affiliate
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
  