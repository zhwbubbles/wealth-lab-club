import  { ArrowRight, Shield, Server, CreditCard, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WalletsExchanges() {
  const topics = [
    "Types of cryptocurrency wallets",
    "Private key management",
    "Hardware wallet setup and security",
    "Exchange selection criteria",
    "KYC and compliance requirements",
    "Preventing phishing and scams",
    "Secure transaction practices",
    "Cold storage solutions",
    "DeFi platform security",
    "Backing up wallet information"
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Wallet Security",
      description: "Learn best practices for securing your crypto assets using different wallet types"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Exchange Analysis",
      description: "Understand how to evaluate cryptocurrency exchanges for security, features, and fees"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Transaction Safety",
      description: "Master the process of safely sending and receiving cryptocurrency transactions"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Key Management",
      description: "Develop strategies for storing and backing up your wallet keys and recovery phrases"
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
                <div className="inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 text-sm">
                  <span className="gradient-text font-medium">Coming Soon</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Wallets & Exchanges 101
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                  Learn how to securely store, send, receive, and trade cryptocurrencies with confidence.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">15+ Video Lessons</span>
                  </div>
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">8+ Hours Content</span>
                  </div>
                  <div className="bg-primary-light/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-800">
                    <span className="text-white font-medium">Step-by-Step Guides</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn btn-primary opacity-75 cursor-not-allowed">
                    Coming Soon
                  </button>
                  <Link to="/about" className="btn btn-outline">
                    Join Waitlist
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10 md:hidden"></div>
              <img 
                src="https://images.unsplash.com/photo-1518343265568-51eec52d40da?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmclMjBhbmFseXNpcyUyMGNoYXJ0cyUyMHByb2Zlc3Npb25hbCUyMGRhcmt8ZW58MHx8fHwxNzQ2NTQ2NjMzfDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
                alt="Cryptocurrency Wallets and Exchanges" 
                className="rounded-lg shadow-xl w-full border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Course Features</h2>
            <p className="text-gray-300 mb-12 text-center">
              Our Wallets & Exchanges 101 course covers all aspects of cryptocurrency storage, security, and trading platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-primary-light p-6 rounded-lg border border-gray-800">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 text-gradient-mid">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-primary-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">What You'll Learn</h2>
            <p className="text-gray-300 mb-12 text-center">
              By the end of this course, you'll understand how to safely manage your cryptocurrency holdings and interact with exchanges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-start bg-primary/60 p-4 rounded-lg">
                  <svg className="h-6 w-6 text-gradient-mid mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Skills */}
      <section className="py-16 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Practical Skills You'll Develop</h2>
            <p className="text-gray-300 mb-12 text-center">
              Our hands-on approach ensures you can immediately apply what you learn to secure and manage your own cryptocurrency assets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-light to-primary rounded-lg overflow-hidden border border-gray-800">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Setting Up Wallets</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Step-by-step hardware wallet configuration</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Creating and securing software wallets</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Properly backing up recovery phrases</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-light to-primary rounded-lg overflow-hidden border border-gray-800">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Using Exchanges Safely</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Choosing reputable exchanges</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Setting up enhanced security features</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-gradient-mid mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Navigating exchange interfaces safely</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-primary-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-gradient-start/10 via-gradient-mid/10 to-gradient-end/10 p-8 md:p-12 rounded-lg border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">Register Your Interest</h2>
              <p className="text-gray-300 mb-8">
                Join our waitlist to be notified when Wallets & Exchanges 101 becomes available. Early registrants will receive special pricing and bonus security guides.
              </p>
              <form className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow newsletter-input"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-primary whitespace-nowrap"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
              <p className="text-sm text-gray-500">
                In the meantime, check out our <Link to="/courses/futures-trading" className="text-gradient-mid hover:underline">Futures Trading Masterclass</Link> which is available now.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
  