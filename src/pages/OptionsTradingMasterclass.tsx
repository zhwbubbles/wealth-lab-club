import  { Link } from 'react-router-dom';
import { CheckCircle, Award, Clock, Shield, Users, BookOpen, Book, HelpCircle } from 'lucide-react';

export default function OptionsTradingMasterclass() {
  // Course modules and lessons
  const modules = [
    {
      title: "Options Intro",
      lessons: [
        {
          title: "Crypto Options Starter",
          duration: "8:11",
          type: "video"
        }
      ]
    },
    {
      title: "Options Building Blocks",
      lessons: [
        {
          title: "Calls and Puts",
          duration: "9:17",
          type: "video"
        }
      ]
    },
    {
      title: "Options Analysis",
      lessons: [
        {
          title: "Options Pricing and The Greeks",
          duration: "20:39",
          type: "video"
        }
      ]
    },
    {
      title: "Option Strategies",
      lessons: [
        {
          title: "Options Spreads and Options Writing",
          duration: "17:32",
          type: "video"
        },
        {
          title: "Straddles & Strangles - Vol Plays",
          duration: "7:35",
          type: "video"
        }
      ]
    },
    {
      title: "Masterclass Summary",
      lessons: [
        {
          title: "Masterclass Text Summary",
          type: "document"
        }
      ]
    }
  ];

  // Course features
  const features = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Comprehensive Content",
      description: "5+ detailed video lessons covering all aspects of options trading"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Expert Instruction",
      description: "Learn from experienced options traders with years of market experience"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Practical Strategies",
      description: "Real-world trading strategies that you can apply immediately"
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      title: "Ongoing Support",
      description: "Get your questions answered through our dedicated support channels"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay bg-gradient-to-br from-gradient-start to-gradient-end"></div>
        
        <div className="container relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-white mb-8 md:mb-0">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 text-gradient-mid rounded-full text-sm font-medium mb-4">
                Advanced Options Trading
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Options Trading Masterclass</h1>
              <p className="text-xl text-gray-300 mb-8">
                Master options trading with comprehensive strategies for profiting in any market condition. Perfect for traders ready to advance their skills.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gradient-mid mr-2" />
                  <span className="text-gray-300">5+ Video Lessons</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gradient-mid mr-2" />
                  <span className="text-gray-300">Intermediate Level</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-gradient-mid mr-2" />
                  <span className="text-gray-300">Lifetime Access</span>
                </div>
              </div>
              
              <a 
                href="https://whop.com/futures-trading-wl/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Enroll Now
              </a>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-gradient-start/20 to-gradient-end/20 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxvcHRpb25zJTIwdHJhZGluZyUyMGNoYXJ0cyUyMGNyeXB0byUyMGZpbmFuY2V8ZW58MHx8fHwxNzQ4NjE5MzA0fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                  alt="Options Trading Charts" 
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Structure Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 text-gradient-mid rounded-full text-sm font-medium mb-4">
                Course Structure
              </span>
              <h2 className="text-3xl font-bold mb-6 text-white">What You'll Learn</h2>
              <p className="text-gray-300">
                A comprehensive curriculum designed to take your options trading skills to the next level
              </p>
            </div>
            
            <div className="bg-primary-dark rounded-xl overflow-hidden border border-gray-800">
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    The course includes:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gradient-mid mr-2" />
                      <span className="text-gray-300">5+ Video Lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Book className="h-5 w-5 text-gradient-mid mr-2" />
                      <span className="text-gray-300">Downloadable Resources</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-gradient-mid mr-2" />
                      <span className="text-gray-300">Weekly Live Streams</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {modules.map((module, index) => (
                    <div key={index} className="p-4 rounded-lg bg-primary border border-gray-800">
                      <div className="flex items-center mb-2">
                        <Award className="h-5 w-5 text-gradient-mid mr-2" />
                        <h4 className="text-lg font-medium text-white">{module.title}</h4>
                      </div>
                      <div className="pl-7 space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center justify-between py-2 border-t border-gray-800">
                            <div className="flex items-center">
                              <span className="text-gradient-mid mr-2">•</span>
                              <span className="text-gray-300">{lesson.title}</span>
                            </div>
                            {lesson.duration && (
                              <div className="flex items-center text-gray-400">
                                <Clock className="h-4 w-4 mr-2" />
                                <span>{lesson.duration}</span>
                              </div>
                            )}
                            {lesson.type === 'document' && (
                              <div className="flex items-center text-gray-400">
                                <Book className="h-4 w-4 mr-2" />
                                <span>Document</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Preview Section */}
      <section className="py-16 bg-primary-light">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-gradient-start/20 to-gradient-end/20 mix-blend-overlay z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxvcHRpb25zJTIwdHJhZGluZyUyMGNoYXJ0cyUyMGNyeXB0byUyMGZpbmFuY2V8ZW58MHx8fHwxNzQ4NjE5MzA0fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                  alt="Financial Growth with Options Trading" 
                  className="w-full object-cover aspect-video"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2 text-white order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 text-gradient-mid rounded-full text-sm font-medium mb-4">
                Course Highlights
              </span>
              <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Options Fundamentals</h3>
                    <p className="text-gray-400">Learn what crypto options are and how they differ from traditional options.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">The Greeks & Option Pricing</h3>
                    <p className="text-gray-400">Master Delta, Gamma, Theta, Vega, and how they affect option prices.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Advanced Strategies</h3>
                    <p className="text-gray-400">Learn spreads, straddles, strangles, and other multi-leg options strategies.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Volatility Trading</h3>
                    <p className="text-gray-400">Understand how to profit from market volatility using options.</p>
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 text-gradient-mid rounded-full text-sm font-medium mb-4">
                Pricing
              </span>
              <h2 className="text-3xl font-bold mb-6 text-white">Investment in Your Trading Future</h2>
            </div>
            
            <div className="bg-primary-dark rounded-xl overflow-hidden border border-gray-800">
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <div className="flex items-center">
                      <span className="text-4xl font-bold text-white">$299</span>
                      <span className="text-lg text-gray-400 ml-2">/ year</span>
                    </div>
                    <p className="text-gray-300 mt-2">
                      One-time payment for lifetime access
                    </p>
                  </div>
                  
                  <div className="mt-6 md:mt-0">
                    <a 
                      href="https://whop.com/futures-trading-wl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Special Offer</h3>
                      <p className="text-gray-300">
                        Use the coupon code below for 50% off until June 1st
                      </p>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex flex-col items-center">
                      <span className="text-xs uppercase text-gray-400">Coupon Code:</span>
                      <div className="font-mono text-xl font-bold text-white tracking-wider">
                        WE1DG17TC3Q2U
                      </div>
                    </div>
                    <button 
                      className="btn btn-sm btn-outline mt-4 md:mt-0"
                      onClick={() => {
                        navigator.clipboard.writeText('WE1DG17TC3Q2U');
                        alert('Coupon code copied to clipboard!');
                      }}
                    >
                      Copy Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Affiliate Section */}
      <section className="py-16 bg-primary-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-dark rounded-xl overflow-hidden border border-gray-800">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3">
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/0917d754-dec5-4c87-6844-19fd761be600/public" 
                        alt="Affiliate Partner Program" 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 text-white">
                    <h2 className="text-2xl font-bold mb-4">Become an Affiliate Partner</h2>
                    <p className="text-gray-300 mb-6">
                      Earn commission by promoting our courses to your audience. We offer competitive rates and provide all the marketing materials you need.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">30% commission on all referred sales</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Custom affiliate links and tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-gradient-mid mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Marketing materials and support</span>
                      </li>
                    </ul>
                    <a href="#contact" className="btn btn-outline">
                      Contact Us to Join
                    </a>
                  </div>
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
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-full mb-8 md:mb-0 text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Master Options Trading?</h2>
                    <p className="text-gray-300 mb-6">
                      Join our comprehensive masterclass and transform your trading skills with professional options trading strategies.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href="https://whop.com/futures-trading-wl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Enroll Now
                      </a>
                      <Link to="/options-trading-basics" className="btn btn-outline">
                        View Basics Course
                      </Link>
                    </div>
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
 